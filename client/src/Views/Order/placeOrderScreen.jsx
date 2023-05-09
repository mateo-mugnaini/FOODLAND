import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./placeOrderScreen.css"
import useLocalStore from "../../hooks/useLocalStore";
import { post_order } from "../../redux/actions/orderActions";
import { Link } from "react-router-dom";
//import Loader from "../../Components/Loader/Loader";
//import MessageBox from "../../Views/Error/messageBox";

export default function PlaceOrderScreen() {
	
	const dispatch = useDispatch();
	const [cart, setCart] = useLocalStore("Carrito",[]);
	const totalstate= useSelector((state) => state.order.totalOrder);
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;

	// console.log(userInfo)

	const [value, setValue] = useState({
		name: "",
		lastname: "",
		address: "",
		city: "",
		postalCode: "",
		country: "",
	});

	//   ================ creo shippingAddress ==========
	
		let shippingAddress= {
			fullname: value.lastname+","+ value.name,
			address: value.address,
			city: value.city,
			postalCode: value.postalCode,
			country: value.country,
		}


	  // ============= Cargo los datos de la orden ============
	const paymentMethod ="Paypal";
	// let paymentResult = "Pending";
	let shippingPrice = 0;
	let itemsPrice = totalstate.subtotal ;    
	let taxPrice= totalstate.taxes ;
	let totalPrice =totalstate.totalOrder.toFixed(2);


	// ========== ShippingAdress ======== 
	const handleFormSubmit = (event) => {
		event.preventDefault();
		// console.log(value);
	  };

    // ======== Despacho la orden =======
	const placeOrderHandler = () => {
		if (!userInfo || !userInfo._id) { // verifica si userInfo no está definido o si su propiedad _id es falsa o nula
			alert("You need to be logged in to complete the purchase");
			return;
		}
		else if (!value.address || !value.lastname || !value.name || !value.country || !value.postalCode || !value.city) {
			alert("you need to complete all the shipping information");
			return;
		}
		else {
			dispatch(post_order({
				orderItems: cart,
				shippingAddress,
				paymentMethod,
				// paymentResult, <<<< no lo pide el back
				itemsPrice,
				shippingPrice,
				taxPrice,
				totalPrice,
				user: userInfo._id,
			}));
		}
	};

	return (
		<div name="ShippingOrder" className="ShippingOrder">
			{/* =========== Columna izquierda ========== */}
			<div className="columna">
			{userInfo ? 
			<div>
			<h2>User:</h2>
			<div class="isLogin">
				{/* aca iria la imagen de perfil */}
				<img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="ProfileUSer"></img>  
				<label>
					<h3>User:<input value={userInfo.name} type="text" readonly/></h3>
					<h3>Email:<input value={userInfo.email}  type="text" readonly/></h3>
				</label>
			</div>
			</div>
			:
			<div>
				<h2>User:</h2>
				<div className="bottons">
					<p>You need to be logged in to continue</p>
				<Link to="/login"><button>Login</button></Link> {"or "}
				<Link to="/register"><button>Register</button></Link>
				</div>
			</div>
			}

			 {/* =============== SHIPPING ======================= */}
				<h2>Shipping</h2><br/>

				{/* console.log(userSignin.userInfo) >>>> activo */}
				<div name="Container Form Shipping" className="Form-Shipping">

					<form onClick={handleFormSubmit} className="formInput" >
						{ userInfo? <div pointer-events="none">
						<label>Name:<input type="text" value={value.name} onChange={(event) =>setValue({ ...value, name: event.target.value })}></input></label>
						<label>Lastname:<input type="text" value={value.lastname} onChange={(event) =>setValue({ ...value, lastname: event.target.value })}></input></label><br/>
						<label>Adress:<input type="text" value={value.address} onChange={(event) =>setValue({ ...value, address: event.target.value })}></input></label>
						<label>City:<input type="text" value={value.city} onChange={(event) =>setValue({ ...value, city: event.target.value })}></input></label><br/>
						<label>PostalCode:<input type="text" value={value.postalCode} onChange={(event) =>setValue({ ...value, postalCode: event.target.value })}></input></label>
						<label>Country:<input type="text"value={value.country} onChange={(event) =>setValue({ ...value, country: event.target.value })} ></input></label><br/>
						<button>Continue</button>
						</div>
						:<div> 
							{/* Esto es para no pueda acceder la info */}
						<label>Name:<input disabled></input></label>
						<label>Lastname:<input disabled></input></label><br/>
						<label>Adress:<input disabled></input></label>
						<label>City:<input disabled></input></label><br/>
						<label>PostalCode:<input disabled></input></label>
						<label>Country:<input disabled ></input></label><br/>
						<button>Continue</button>
						</div>
						}
					</form>
				</div>


			</div>
	{/* =========== Columna derecha  ========== */}
			<div className="columna">

				{/* ============ RESUMEN DE COMPRA ============ */}
					<div name="Resumen" className="resumen">
						<h2>Order Items</h2>
						<div className="row">
						{cart.map((item) => (
							<li key={item.product}>
												
								<h4><img
										src={item.image}
										alt={item.name}
										className="imgResumen"
									></img>
									
								{item.quantity}{"  "}{item.name}{"  "}
								</h4>
								<h3>${item.quantity * item.price}</h3>
							</li>
							))};
							</div>
				</div>
				{/* ============ METODO DE PAGO =============== */}
				<div name="Payment" class="containerPayment">
					<br/>
						<h2>Payment</h2>
				<img src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-2.png" value="Paypal" alt="logoPaypal" class="paypalLogo"></img>
				</div>
				</div>

				<div className="columna">
	
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
										<span>To: {value.lastname+","+value.name}</span>
										<span>{value.address},{value.postalCode},{value.city}</span>
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
	);
}
