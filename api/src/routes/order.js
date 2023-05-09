import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/order.js";
import { isAuth, isAdmin } from "../middlewares/middlewares.js";
import User from "../models/user.js";
import Product from "../models/product.js";

const orderRouter = express.Router();

//Ruta para que el Admin reciba todas las órdenes de compra
orderRouter.get(
	"/",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.find().populate("user", "name");
		res.send(orders);
	})
);

//Ruta para que el usuario cree una orden de compra
orderRouter.post(
	"/",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const newOrder = new Order({
			//orderItems: req.body.orderItems,
			orderItems: req.body.orderItems.map((x) => ({ ...x, product: x._id })),
			shippingAddress: req.body.shippingAddress,
			paymentMethod: req.body.paymentMethod,
			itemsPrice: req.body.itemsPrice,
			shippingPrice: req.body.shippingPrice,
			taxPrice: req.body.taxPrice,
			totalPrice: req.body.totalPrice,
			user: req.user._id,
		});

		const order = await newOrder.save();
		res.status(201).send({ message: "New Order Created", order });
	})
);

//Ruta por si hacemos un dashboard del admin
orderRouter.get(
	"/summary",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.aggregate([
			{
				$group: {
					_id: null,
					numOrders: { $sum: 1 },
					totalSales: { $sum: "$totalPrice" },
				},
			},
		]);
		const users = await User.aggregate([
			{
				$group: {
					_id: null,
					numUsers: { $sum: 1 },
				},
			},
		]);
		const dailyOrders = await Order.aggregate([
			{
				$group: {
					_id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
					orders: { $sum: 1 },
					sales: { $sum: "$totalPrice" },
				},
			},
			{ $sort: { _id: 1 } },
		]);
		const productCategories = await Product.aggregate([
			{
				$group: {
					_id: "$category",
					count: { $sum: 1 },
				},
			},
		]);
		res.send({ users, orders, dailyOrders, productCategories });
	})
);

//Ruta que le manda al usuario todas sus ordenes de compra
orderRouter.get(
	"/mine",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const orders = await Order.find({ user: req.user._id });
		res.send(orders);
	})
);

//Ruta que manda la orden segun id
orderRouter.get(
	"/:id",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			res.send(order);
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	})
);

//Ruta para marcar la orden como paga despues de Paypal
orderRouter.put(
	"/:id/pay",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			order.isPaid = true;
			order.paidAt = Date.now();
			order.paymentResult = {
				id: req.body.id,
				status: req.body.status,
				update_time: req.body.update_time,
				email_address: req.body.email_address,
			};

			const updatedOrder = await order.save();
			res.send({ message: "Order Paid", order: updatedOrder });
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	})
);

//Ruta en donde el Admin registra que se despachó una orden
orderRouter.put(
	"/:id/deliver",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			order.isDelivered = true;
			order.deliveredAt = Date.now();
			await order.save();
			res.send({ message: "Order Delivered" });
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	})
);

//Ruta que usa el Admin para dar de baja una orden
orderRouter.delete(
	"/:id",
	isAuth,
	isAdmin,
	expressAsyncHandler(async (req, res) => {
		const order = await Order.findById(req.params.id);
		if (order) {
			await order.remove();
			res.send({ message: "Order Deleted" });
		} else {
			res.status(404).send({ message: "Order Not Found" });
		}
	})
);

export default orderRouter;
