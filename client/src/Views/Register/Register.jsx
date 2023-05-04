import React from "react";
        /* ----------------------- STYLES -----------------------*/
import "../Register/Register.css"
        /* ----------------------- COMPONENTS -----------------------*/
import FormRegister from "../../Components/FormRegisterUser/FormRegister";

const UserRegister = () => {

    return (
        <div className="registerContainer">
            <FormRegister/>
        </div>
    )
}

export default UserRegister