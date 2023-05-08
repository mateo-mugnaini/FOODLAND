import React, { useState } from 'react';

import "./UserProfile.css"
import usuario from "../../Imgs/usuario.jpg"
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import { signout } from "../../redux/actions/userActions";
import Swal from 'sweetalert2'
import legalPopup from "../../Texts/legalPopup.txt"

function Profile() {


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  
  const navigate = useNavigate();
  
  const dispatch = useDispatch();

  
  const showLegalInfo = () => {
    fetch(legalPopup)
    .then((response) => response.text())
    .then((data) => {
      Swal.fire({
        title: 'Supermarket Purchase Agreement',
        text:data,
        confirmButtonText: 'OK'
      })
    });
    
  }
  
  const [userData, setUserData] = useState({
    name: "Juan",
    lastName: "Rodriguez",
    phone: "2456789453",
    email: "juanro@gmail.com",
    address: "los tilos 2234",
    password: "",
  });
  
  const handleEditProfile = () => {
    // Lógica para mostrar un formulario de edición
  };
  
  const signOutHandler = () => {
    dispatch(signout());
    navigate("/")
		//dispatch(signout());
    //window.location.href = "/"
	};
  
  return (
    <div className='userProfile'>
      
        <Link to="/">
          <button className="btnHome">BACK TO HOME</button>
        </Link>
      
        <div className='profileCard'>
            <div className='left'> 
                <img src={usuario} alt="" />
                <p>Id = {userInfo._id}</p>
                <div className='left-btns'>
                    <button onClick={showLegalInfo}> Legal information </button>
                    <button onClick={signOutHandler} className='singOut-btn'> Sing out</button>
                </div>
            </div>
            <div className='right'>
                <h1>{userInfo.name} { userData.lastName}</h1>
                <h3><span>Email adress: </span> {userInfo.email}</h3>
                <h3><span>Adress: </span>{userData.address}</h3>
                <h3><span>Phone number: </span> {userData.phone}</h3>
                <button className='editProfile-btn'>Edit profile</button>
            </div>
        </div>
    </div>
  );
}

export default Profile;