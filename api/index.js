import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./src/routes/seedRoutes.js";
import userRouter from "./src/routes/userRoutes.js"
import Product from "./src/routes/products.js";

import path from 'path';

dotenv.config();

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log("Connected to db");
	})
	.catch((err) => {
		console.log(err.message);
	});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/api/products",Product)
app.use("/api/seed", seedRouter);
app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

//Catches errors due to express-async-handler
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});