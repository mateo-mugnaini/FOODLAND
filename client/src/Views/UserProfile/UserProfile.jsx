import React, { useState } from 'react';
import "./UserProfile.css"
import usuario from "../../Imgs/usuario.jpg"
import { NavLink } from 'react-router-dom';

function Profile() {
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

  return (
    <div className='userProfile'>
        <NavLink to="/">
            Back to home
        </NavLink>
        <div className='profileCard'>
            <div className='left'> 
                <img src={usuario} alt="" />
                <div className='left-btns'>
                    <button> Legal information </button>
                    <button className='singOut-btn'> Sing out</button>
                </div>
            </div>
            <div className='right'>
                <h1>{userData.name} { userData.lastName}</h1>
                <h3><span>Email adress: </span> {userData.email}</h3>
                <h3><span>Adress: </span>{userData.address}</h3>
                <h3><span>Phone number: </span> {userData.phone}</h3>
                <button className='editProfile-btn'>Edit profile</button>
            </div>
        </div>
    </div>
  );
}

export default Profile;