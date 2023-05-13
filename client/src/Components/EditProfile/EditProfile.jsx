import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { register } from "../../redux/actions/userActions";
import Loader from "../Loader/Loader";
import MessageBox from "../Error/messageBox";
import "./EditProfile.css"

const EditProfile = () => {
    const navigate = useNavigate();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const { search } = useLocation();
	const redirectInUrl = new URLSearchParams(search).get("redirect");
	const redirect = redirectInUrl ? redirectInUrl : "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;

	const dispatch = useDispatch();

	const submitHandler = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
		} else {
			dispatch(register(name, email, password));
		}
	};

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [userInfo, navigate, redirect]);
return(
    <div className="EditProfileContainer">
        <form className="formRegister" onSubmit={submitHandler}>
				{loading && <Loader></Loader>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}

				<div className="labelCreateUser">
					<label htmlFor="name" className="labelCreateUser">
						New name
					</label>
					<input
						type="text"
						id="name"
						placeholder="Enter name"
						required
						onChange={(e) => setName(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="email" className="labelCreateUser">
						New email address
					</label>
					<input
						type="email"
						id="email"
						placeholder="Enter email"
						required
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="password" className="labelCreateUser">
						New password
					</label>
					<input
						type="password"
						id="password"
						placeholder="Enter password"
						required
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<div className="labelCreateUser">
					<label htmlFor="confirmPassword" className="labelCreateUser">
						Confirm new password
					</label>
					<input
						type="password"
						id="confirmPassword"
						placeholder="Confirm password"
						required
						onChange={(e) => setConfirmPassword(e.target.value)}
					></input>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Update
					</button>
					<label />
				</div>
			</form>
    </div>
)
}

export default EditProfile