// import React, { useState } from "react";
// import axios from "axios";
// import swal from "sweetalert"
// import "./FormRegister.css";

// import {
//   ValidateName,
//   ValidateLastName,
//   ValidatePhone,
//   ValidateEmail,
//   ValidatePassword,
// } from "./ValidationsRegister";


// const FormRegister = () => {

  
//   const [user, setUser] = useState({
//     name: "",
//     lastName: "",
//     phone: "",
//     email: "",
//     address: "",
//     password: "",
//   });
  
//   const [errors, setErrors] = useState({});
  
//   const handleChange = (e, cb) => {
//     const {name, lastName, phone, email, password,value} = e.target
//     setUser({ ...user, [e.target.name]: e.target.value });
//     setErrors({
//       ...errors,
//       [name]: cb(value),
//       [lastName]: cb(value),
//       [phone]: cb(value),
//       [email]: cb(value),
//       [password]: cb(value),
//     });
//   };
  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(
//         "http://localhost:5000/api/users/signup",
//         user
//       )
//       .then(res => console.log(res,'marcos'))
//       setUser({
//         name: "",
//         lastName: "",
//         phone: "",
//         email: "",
//         address: "",
//         password: "",
//       });
//        swal({
//         title: "Registro exitoso",
//         icon: "success",
//         confirmButtonText: "OK",
//         showClass: {
//           popup: "animate__animated animate__fadeInDown",
//         },
//         hideClass: {
//           popup: "animate__animated animate__fadeOutUp",
//         },
//       });
 
//       setTimeout(() => {
//         window.location.replace("/");
//       }, 2000);
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
    

//   return (
//     <div className="formRegisterContainer">
//       <form className="formRegister" onSubmit={handleSubmit}>
//         <div className="labelCreate">
//           {/* ----------------------- NOMBRE -----------------------*/}
//           <div className="labelCreateUser">
//             <label htmlFor="name" className="labelCreateUser">
//               Name:
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={user.name}
//               onChange={(e) => handleChange(e, ValidateName)}
//               className="inputCreateUser"
//             />
//             {errors["name"]?.isValidation ? null : <p  className="errorFormCP">{errors?.lastName?.message}</p>}
//           </div>
//           {/* ----------------------- APELLIDO -----------------------*/}
//           <div className="labelCreateUser">
//             <label htmlFor="lastName" className="labelCreateUser">
//               Last name:
//             </label>
//             <input
//               type="text"
//               name="lastName"
//               value={user.lastName}
//               onChange={(e) => handleChange(e, ValidateLastName)}

//               className="inputCreateUser"
//             />
//             {errors["lastName"]?.isValidation ? null : <p  className="errorFormCP">{errors?.lastName?.message}</p>}
//           </div>
//           {/* ----------------------- PHONE -----------------------*/}
//           <div className="labelCreateUser">
//             <label htmlFor="phone" className="labelCreateUser">
//               Phone:
//             </label>
//             <input
//               type="text"
//               name="phone"
//               value={user.phone}
//               onChange={(e) => handleChange(e, ValidatePhone)}
//               className="inputCreateUser"
//             />
//             {errors["phone"]?.isValidation ? null : <p  className="errorFormCP">{errors?.phone?.message}</p>}
//           </div>
//           {/* ----------------------- DIRECCION -----------------------*/}
//           <div className="labelCreateUser">
//             <label htmlFor="address" className="labelCreateUser">
//               Address:
//             </label>
//             <input
//               type="text"
//               name="address"
//               value={user.address}
//               onChange={(e) => handleChange(e, ()=> ({isValidation: true, message: "",}))}
//               className="inputCreateUser"
//             />
//             {errors["address"]?.isValidation ? null : <p  className="errorFormCP">{errors?.address?.message}</p>}
//           </div>
//           {/* ----------------------- EMAIL -----------------------*/}
//           <div className="labelCreateUser">
//             <label htmlFor="email" className="labelCreateUser">
//               Email:
//             </label>
//             <input
//               type="text"
//               name="email"
//               value={user.email}
//               onChange={(e) => handleChange(e, ValidateEmail)}
//               className="inputCreateUser"
//             />
//             {errors["email"]?.isValidation ? null : <p  className="errorFormCP">{errors?.email?.message}</p>}
//           </div>
//           {/* ----------------------- PASSWORD -----------------------*/}
//           <div className="labelCreateUser">
//             <label htmlFor="password" className="labelCreateUser">
//               Password:
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={user.password}
//               // onChange={(e) => handleChange(e)}
//               onChange={(e) => handleChange(e, ()=> ({isValidation: true, message: "",}))}
//               className="inputCreateUser"
//             />
//             {errors["password"]?.isValidation ? null : <p  className="errorFormCP">{errors?.password?.message}</p>}
//           </div>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default FormRegister

