import express from "express";
import bcrypt from "bcryptjs";
import expressAsyncHandler from "express-async-handler";
import User from "../models/user.js";

const userRouter = express.Router();

userRouter.get(
	"/",
	//isAuth,
	//isAdmin,
	expressAsyncHandler(async (req, res) => {
		const users = await User.find({});
		res.send(users);
	})
);

export default userRouter