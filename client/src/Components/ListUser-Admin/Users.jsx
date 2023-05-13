//IMPORT STYLE:
import "./Users.css"
//IMPORT REACT:
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get_users, put_user , delete_user, set_users, sort_user} from "../../redux/actions/userActions";
import Swal from "sweetalert2";
import swal from "sweetalert";

const ListUsers = () => {
  const { userInfo } = useSelector((state) => state.userSignin);
  const token = userInfo.token;
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  
  const [isEditing, setIsEditing] = useState(false);
  const [selectedValue, setSelectedValue] = useState({});
  const [searchValue, setSearchValue] = useState("");
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
  dispatch(get_users(token));
    }, [dispatch, token]);
  
  const handleLabelClick = () => {
    setIsEditing(true);
  };

  const handlePutUser = async ({ id, isAdmin, token }) => {
    setIsLoading(true);
    await dispatch(put_user({ id, isAdmin, token }));
    await dispatch(get_users(token));
    setIsLoading(false);
  };

  const handleSelectChange = (event, user) => {
    const newSelectedValue = {
      ...selectedValue,
      [user._id]: event.target.value,
    };
    setSelectedValue(newSelectedValue);
    setIsEditing(false);
    if (event.target.value === "true") {
      Swal.fire({
        title: `Do you want to make ${user.name} an admin?`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ok",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          handlePutUser({
            id: user._id,
            isAdmin: true,
            token,
          });
        } else {
          setSelectedValue({
            ...selectedValue,
            [user._id]: "false",
          });
        }
      });
    } else {
      handlePutUser({
        id: user._id,
        isAdmin: false,
        token,
      });
    }
  };  
    
  const handledelete = (u) =>{
      Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        const updateUsers = users.filter(user => user._id !== u._id);
        dispatch(set_users(updateUsers));
          }
        });

          // dispatch(delete_user(u._id)) //// << Ruta no funciona , cuando la arreglen lo actualizo
          // dispatch(get_users(token));
    }

    const handleSearch =() =>{

      const filteredUsers = users.filter(user=>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user._id.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase())
      );
  
      if (filteredUsers.length > 0){
          dispatch(set_users(filteredUsers));
      } else {
        swal({
          title: "User not found",
          icon: "warning",
          confirmButtonText: "OK",
          showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
        }); 
      }
    }
    
    const handleOnChange =(e) =>{
      setSearchValue(e.target.value)
      if(e.target.value === "") dispatch(get_users(token)) 
    }
    
    const handleSelectsearch = (event) =>{
      dispatch(sort_user({value:event.target.value, users}))
    }

  // Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  // Calcular índices de usuarios a mostrar en la página actual
const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage;
const currentUsers = Array.isArray(users) ? users.slice(indexOfFirstUser, indexOfLastUser) : [];

// Calcular el número total de páginas
const totalUsers = Math.ceil((users?.length || 0) / usersPerPage);

  // Cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Botones para ir a la página siguiente y anterior
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };


  return (

        <div className="stockList">
            <h1>List User</h1>
            <label>Search user:<input name="searchUser" type="text" onChange={handleOnChange } placeholder="Search users"></input><button type="submit" onClick={handleSearch} >        <img
          src="https://tinypic.host/images/2023/04/27/lupa2.png"
          alt="iconLupa"
          className="Lup"
        /></button></label>
            <label>Sort by:
              <select onChange={handleSelectsearch}>
                <option value="all"> All </option>
                <option value="NameAsc" >Fullname A-Z</option>
                <option value="NameDsc" >Fullname Z-A</option>
                {/* <option value="IdAsc" >ID ↑</option>
                <option value="IsDsc" >ID ↓</option> */}
                <option value="EmailAsc" >Email A-Z</option>
                <option value="EmailDsc" >Email Z-A</option>
                <option value="Users" >Users</option>
                <option value="Admin" >Admin</option>
              </select>
              </label>
            <table>
              <thead>
                <tr>
                  <th className="thStock1">ID</th>
                  <th className="thStock2">Fullname</th>
                  <th className="thStock2">Email</th>
                  <th className="thStock2">Status</th>
                  <th className="thStock3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers?.map((u) => (
                  <tr key={u._id}>
                    <td>{u._id}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>
                    {isEditing && selectedValue[u._id] !== undefined ? (
                          <select
                            name={`isAdmin-${u._id}`}
                            value={selectedValue[u._id]}
                            onChange={(event) => handleSelectChange(event, u)}
                          >
                            <option value="false">User</option>
                            <option value="true">Admin</option>
                          </select>
                        ) : (
                          <label
                            onClick={() => {
                              setSelectedValue({
                                ...selectedValue,
                                [u._id]: u.isAdmin,
                              });
                              setIsEditing(true);
                            }}
                          >
                            {u.isAdmin ? "Admin" : "User"}
                          </label>
                        )}
                    </td>
                    {u.email === "admin@gmail.com" ? <td> </td> : 
                      <td>
                          <button onClick={() => handledelete(u)}>Delete</button>
                          {/* <button>Block</button> */} 
                      </td>
                      }
                  </tr>
                ))}
              </tbody>
            </table>
      
            {/* Paginado */}
            <div className="pagination">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Prev
              </button>
      
              {Array.from({ length: totalUsers }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? "active" : ""}
                >
                  {page}
                </button>
              ))}
      
              <button onClick={goToNextPage} disabled={currentPage === totalUsers}>
                Next
              </button>
            </div>
          </div>
        );
      };
    
    export default ListUsers;
