import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./signinScreen.css"
import img1 from "../../Imgs/LogIn-Registro/Img1.png"
import img2 from "../../Imgs/LogIn-Registro/Img2.png"

export default function SigninScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    // hacer la action
  };

  const imgA = img1
  const imgB = img2
  
  return (
    <div className='loginContasiner'>
      <form className="formLogin" onSubmit={submitHandler}>
        <div>
          <h1>Sign In</h1>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Sign In
          </button>
        </div>
        <div>
          <label />
          <div>
            New customer? <Link to="/register">Create your account</Link>
          </div>
        </div>
      </form>
      <div>
        <img className='imgALogin' src={imgA} alt="" />
        <img className='imgBLogin'  src={imgB} alt="" />
      </div>
    </div>
  );
}