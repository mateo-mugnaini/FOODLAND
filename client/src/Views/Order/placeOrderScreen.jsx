import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import "./placeOrderScreen.css"
import useLocalStore from "../../hooks/useLocalStore";

import { post_order } from "../../redux/actions/orderActions";
//import Loader from "../../Components/Loader/Loader";
//import MessageBox from "../../Views/Error/messageBox";

export default function PlaceOrderScreen() {
	
	const dispatch = useDispatch();
    //traer el carrito del estado:
	const [cart, setCart] = useLocalStore("Carrito",[]);
	
	const totalOrder = useSelector((state) =>  state.totalOrder);
	console.log(totalOrder);  //No llega la info

	const [value, setValue] = useState({
		name: "",
		lastname: "",
		address: "",
		city: "",
		postalCode: "",
		country: "",
	});


// ====================== Crear un verificador donde si estas Logeado puedas seguir la compra o mandar a loguear ==============





	//   ================ creo shippingAddress ==========
	function concatenaObjeto(objeto) {
		let valores = []; 
		for(let propiedad in objeto) {
		if(objeto.hasOwnProperty(propiedad)) { 
			valores.push(objeto[propiedad]); 
		}}
		return valores.join(", ");}
			// =========Concatenado ==========
		let shippingAddress= concatenaObjeto(value)


	  // ============= Cargo los datos de la orden ============
	const paymentMethod ="Paypal";
	let paymentResult = "Pending";
	let shippingPrice = 0;
	// let itemsPrice = totalOrder.subtotal ;      //<<<<<<<<<<<<<< Aca rompe!! No trae la data 
	// let taxPrice= totalOrder.taxes ;
	// let totalPrice =totalOrder.totalCont;
	let itemsPrice =  0;    
	let taxPrice= 0;
	let totalPrice = 0;

	// ========== ShippingAdress ======== 
	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(value);
	  };

    //despachar la accion con esta información guardada en el carrito con el objeto q figura abajo
    const placeOrderHandler = () => {

		dispatch(post_order({
            orderItems: cart,
            shippingAddress,
            paymentMethod,
			paymentResult,
            itemsPrice, 
            shippingPrice,
            taxPrice,
            totalPrice,
            // user: user._id,  <<<<<<<<<<<<<<< se debe sacar del login 
        })); 
	}; 


    //useeffect q detecte si 
	/* useEffect(() => {
		if (success) {
			navigate(`/order/${order._id}`);
			dispatch({ type: ORDER_CREATE_RESET });
		}
	}, [success, order, navigate, dispatch, navigate]); */

	return (
		<div name="ShippingOrder" className="ShippingOrder">
			{/* =========== Columna izquierda ========== */}
			<div className="columna">
				 {/* verificar si esta Logeado  y renderizar los datos!!*/}
			<h2>User:</h2>
			<div class="isLogin">
				{/* aca iria la imagen de perfil */}
				<img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="ProfileUSer"></img>  
				<label>
					<h3>User:<input value={""}/></h3>
					<h3>Email:<input value={""}/></h3>
				</label>
			</div>

			 {/* =============== SHIPPING ======================= */}
				<h2>Shipping</h2><br/>
				<div name="Container Form Shipping" className="Form-Shipping">

					<form onClick={handleFormSubmit} className="formInput">
						<label>Name:<input type="text" value={value.name} onChange={(event) =>setValue({ ...value, name: event.target.value })}></input></label>
						<label>Lastname:<input type="text" value={value.lastname} onChange={(event) =>setValue({ ...value, lastname: event.target.value })}></input></label><br/>
						<label>Adress:<input type="text" value={value.address} onChange={(event) =>setValue({ ...value, address: event.target.value })}></input></label>
						<label>City:<input type="text" value={value.city} onChange={(event) =>setValue({ ...value, city: event.target.value })}></input></label><br/>
						<label>PostalCode:<input type="text" value={value.postalCode} onChange={(event) =>setValue({ ...value, postalCode: event.target.value })}></input></label>
						<label>Country:<input type="text"value={value.country} onChange={(event) =>setValue({ ...value, country: event.target.value })} ></input></label><br/>
						<button>Continue</button>
					</form>
				</div>
				{/* ============ METODO DE PAGO =============== */}
				<div name="Payment" class="containerPayment">
						<h2>Payment</h2>
						<p>Method:</p>
				<img src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-2.png" value="Paypal" alt="logoPaypal" class="paypalLogo"></img>
				</div>
				{/* ============ RESUMEN DE COMPRA ============ */}
				<div name="Resumen" className="resumen">
						<h2>Order Items</h2>
						{cart.map((item) => (
							<li key={item.product}>
								<div className="row">
									<p>{item.name}</p>				
								<h4><img
										src={item.image}
										alt={item.name}
										className="imgResumen"
									></img>
								{item.quantity} x ${item.price} = ${item.quantity * item.price}
								</h4>
								<br></br>
									
							</div>
							</li>
							))};
				</div>
			</div>
	{/* =========== Columna derecha  ========== */}
			<div className="columna">
					<div className="card card-body">
				{/* ===========Summary ========== */}
								<h2>Order Summary</h2>
							
								<div className="summary">
									<label>
									<h4>Subtotal:<span>${itemsPrice}</span></h4>
									<h4>Shipping:<span>{shippingPrice}</span></h4>
									<h4>Taxes:<span>${taxPrice}</span></h4>
									</label>
									<hr></hr>

									<h3>Total:<span>${totalPrice}</span></h3>
									<label className="Shippingtitle">
										Shipping:<br></br>
										<span>To: {concatenaObjeto(value)}</span>
									</label>
								</div>
					{/* ========= Boton para generar orden ====== */}
								<button
									type="button"
									onClick={placeOrderHandler}
									className="PlaceOrder"
									disabled={cart.length === 0}
								>Place Order</button>
					</div>
				</div>
			</div>
	);
}
