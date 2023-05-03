import React from "react";
import axios from "axios"
/* ----------------------- STYLES -----------------------*/
import "./FormRegister.css"

const FormRegister = () => {

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
          // tus datos aquí
        };
        axios.post('http://localhost:5000/api/users/signup', data)
          .then(response => {
            // manejar respuesta exitosa
          })
          .catch(error => {
            // manejar error
          });
      }

  return (
    <div className="formRegisterContainer">
      <form className="formRegister">
      <div className="labelCreate">
        {/* ----------------------- NOMBRE -----------------------*/}
        <div className="labelCreateUser">
          <label form="" className="labelCreateUser">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value="HOLA"
            onChange="HOlA"
            className="inputCreateUser"
          />
        </div>
        {/* ----------------------- APELLIDO -----------------------*/}
        <div className="labelCreateUser">
          <label form="" className="labelCreateUser">
          Last name:
          </label>
          <input
            type="text"
            name="name"
            value="HOLA"
            onChange="HOlA"
            className="inputCreateUser"
          />
        </div>
            {/* ----------------------- PHONE -----------------------*/}
            <div className="labelCreateUser">
          <label form="" className="labelCreateUser">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            value="HOLA"
            onChange="HOlA"
            className="inputCreateUser"
          />
        </div>
        {/* ----------------------- EMAIL -----------------------*/}
        <div className="labelCreateUser">
          <label form="" className="labelCreateUser">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value="HOLA"
            onChange="HOlA"
            className="inputCreateUser"
          />
        </div>
            {/* ----------------------- CITY -----------------------*/}
            <div className="labelCreateUser">
          <label form="" className="labelCreateUser">
            City:
          </label>
          <input
            type="text"
            name="city"
            value="HOLA"
            onChange="HOlA"
            className="inputCreateUser"
          />
        </div>
                {/* ----------------------- PASSWORD -----------------------*/}
                <div className="labelCreateUser">
          <label form="" className="labelCreateUser">
          Password:
          </label>
          <input
            type="text"
            name="password"
            value="HOLA"
            onChange="HOlA"
            className="inputCreateUser"
          />
        </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
