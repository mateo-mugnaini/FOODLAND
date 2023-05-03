import React, { useState } from "react";
import axios from "axios"
/* ----------------------- STYLES -----------------------*/
import "./FormRegister.css"

const FormRegister = () => {

    const [user, setUser] = useState({
      name: "",
      // lastName: "",
      // phone: "",
      email: "",
      // address: "",
      password: "",
    });
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(
          "http://localhost:5000/api/users/signup",
          user
        );
        alert("Registro exitoso");
        setUser({
          name: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          password: "",
        });
        console.log(res.data, "Registro Exitoso");
      } catch (err) {
        console.log(err);
      }
    };
    

  return (
    <div className="formRegisterContainer">
      <form className="formRegister" onSubmit={handleSubmit}>
        <div className="labelCreate">
          {/* ----------------------- NOMBRE -----------------------*/}
          <div className="labelCreateUser">
            <label htmlFor="name" className="labelCreateUser">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="inputCreateUser"
            />
          </div>
          {/* ----------------------- APELLIDO -----------------------*/}
          <div className="labelCreateUser">
            <label htmlFor="lastName" className="labelCreateUser">
              Last name:
            </label>
            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              className="inputCreateUser"
            />
          </div>
          {/* ----------------------- PHONE -----------------------*/}
          <div className="labelCreateUser">
            <label htmlFor="phone" className="labelCreateUser">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="inputCreateUser"
            />
          </div>
          {/* ----------------------- EMAIL -----------------------*/}
          <div className="labelCreateUser">
            <label htmlFor="email" className="labelCreateUser">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="inputCreateUser"
            />
          </div>
          {/* ----------------------- DIRECCION -----------------------*/}
          <div className="labelCreateUser">
            <label htmlFor="address" className="labelCreateUser">
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              className="inputCreateUser"
            />
          </div>
          {/* ----------------------- PASSWORD -----------------------*/}
          <div className="labelCreateUser">
            <label htmlFor="password" className="labelCreateUser">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="inputCreateUser"
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormRegister