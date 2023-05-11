//IMPORT STYLE:
import "./Users.css"
//IMPORT REACT:
import { useSelector,useDispatch } from "react-redux";
import { useEffect ,useState } from "react";
import { get_users } from "../../redux/actions/userActions";

const ListUsers = () =>{

        const  listUsers = useSelector((state) => state.users);
        const {userInfo} = useSelector((state) => state.userSignin);
        const dispatch = useDispatch();
        const token = userInfo.token;

        // console.log(listUsers)
      
        useEffect(() => {
          dispatch(get_users(token));
        }, [dispatch]);
      
        // Paginado
        const [currentPage, setCurrentPage] = useState(1);
        const usersPerPage = 10;
      
        // Calcular índices de productos a mostrar en la página actual
        const indexOfLastProduct = currentPage * usersPerPage;
        const indexOfFirstProduct = indexOfLastProduct - usersPerPage;
        const currentProducts = listUsers?.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );
      const aux = currentProducts?.map(e => e = e.active)
        console.log(aux);
      
        // Calcular el número total de páginas
        const totalUsers = Math.ceil(listUsers.length / usersPerPage);
      
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
                {currentPage?.map((p) => (
                  <tr key={p._id}>
                    <td>{p.id}</td>
                    <td>{p.fullname}</td>
                    <td>{p.email}</td>
                    <td>{p.Status}</td>
                    <td></td>
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
      

    // <div name="ContainerListUsers" className="UserList">
    // <div id="bodywrap">
    // <div class="row">
    // <div class="large-10 columns">
    // <div class="scroll-window-wrapper">
    // <h2>User List</h2>
    // <label>Filtros:</label>
    // <br></br>
    // <br></br>
    // <div class="scroll-window">
    // <table class="table table-striped table-hover user-list fixed-header">
    //     <thead>
    //     <th><div>FullName</div></th>
    //     <th><div>Email</div></th>
    //     <th><div>Status</div></th>
    //     <th><div>Edit</div></th>
    //     </thead>
    //     <tbody>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">View User</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     <tr>
    //         <td>Michael Jones</td>
    //         <td>michael@gmail.com</td>
    //         <td>active</td>
    //         <td class="text-right">
    //         <button class="button tiny">block user</button>
    //         <button class="button alert tiny">Delete</button>     
    //         </td>
    //     </tr>
    //     </tbody>
    // </table>
    // </div>
    // </div>
    // </div>
    // </div>
    // </div>
    // </div>
    // )
export default ListUsers;