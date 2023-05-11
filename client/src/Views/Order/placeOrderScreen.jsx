import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./placeOrderScreen.css";
import useLocalStore from "../../hooks/useLocalStore";
import { createOrder } from "../../redux/actions/orderActions";
import { Link } from "react-router-dom";
import swal from "sweetalert";
//import Loader from "../../Components/Loader/Loader";
//import MessageBox from "../../Views/Error/messageBox";

export default function PlaceOrderScreen() {
  const dispatch = useDispatch();
  const [cart] = useLocalStore("Carrito", []);
  const totalstate = useSelector((state) => state.order.totalOrder);
  const { userInfo } = useSelector((state) => state.userSignin);

  // console.log(userInfo)

  const [value, setValue] = useState({
    name: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
	email:"",
  });

  //   ================ creo shippingAddress ==========

  let shippingAddress = {
    fullName: value.lastname + "," + value.name,
    address: value.address,
    city: value.city,
    postalCode: value.postalCode,
    country: value.country,
  };

  // ============= Cargo los datos de la orden ============
  const paymentMethod = "Paypal";
  // let paymentResult = "Pending";
  let shippingPrice = 0;
  let itemsPrice = totalstate.subtotal;
  let taxPrice = totalstate.taxes;
  let totalPrice = parseFloat(totalstate.totalOrder.toFixed(2));

  // ========== ShippingAdress ========
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!userInfo || !userInfo._id)
      swal({
        title: "You need to be logged in to complete the purchase",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
  };

  // ======== Despacho la orden =======
  const placeOrderHandler = () => {
    if (!userInfo || !userInfo._id) {
      swal({
        title: "You need to be logged in to complete the purchase",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    } else if (
      !value.address ||
      !value.lastname ||
      !value.name ||
      !value.country ||
      !value.postalCode ||
      !value.city ||
	  !value.email
    ) {
      swal({
        title: "you need to complete all the shipping information",
        icon: "warning",
        confirmButtonText: "OK",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      return;
    } else {
      dispatch(
        createOrder(
          {
            orderItems: cart.map((product) => ({ ...product, slug: "prueba" })),
            shippingAddress,
            paymentMethod,
            // paymentResult, <<<< no lo pide el back
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice,
            user: userInfo._id,
          },
          userInfo.token
        )
      );
    }
  };

  return (
    <div name="ShippingOrder" className="ShippingOrder">
      {/* =========== Columna izquierda ========== */}
      <div className="columna">
        {/*userInfo ? 
			<div>
			<h2>User:</h2>
			<div className="isLogin">
				<img src="https://tinypic.host/images/2023/04/27/carrito-removebg-preview.png" alt="ProfileUSer"></img>  
				<label>
					<h3>User:<input value={userInfo.name} type="text" readOnly/></h3>
					<h3>Email:<input value={userInfo.email}  type="text" readOnly/></h3>
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
        <h2>Invoice Data</h2>
        <br />

        {/* console.log(userSignin.userInfo) >>>> activo */}
        <div name="Container Form Shipping" className="Form-Shipping">
          <form onClick={handleFormSubmit} className="formInput">
            {userInfo ? (
              <div pointerEvents="none">
                <label>
                  Name:
                  <input
                    type="text"
                    value={value.name}
                    onChange={(event) =>
                      setValue({ ...value, name: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Lastname:
                  <input
                    type="text"
                    value={value.lastname}
                    onChange={(event) =>
                      setValue({ ...value, lastname: event.target.value })
                    }
                  ></input>
                </label>
                <br />
				<label>
                  Email:
                  <input
                    type="text"
                    value={value.email}
                    onChange={(event) =>
                      setValue({ ...value, email: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Adress:
                  <input
                    type="text"
                    value={value.address}
                    onChange={(event) =>
                      setValue({ ...value, address: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  City:
                  <input
                    type="text"
                    value={value.city}
                    onChange={(event) =>
                      setValue({ ...value, city: event.target.value })
                    }
                  ></input>
                </label>
                <br />
                <label>
                  PostalCode:
                  <input
                    type="text"
                    value={value.postalCode}
                    onChange={(event) =>
                      setValue({ ...value, postalCode: event.target.value })
                    }
                  ></input>
                </label>
                <label>
                  Country:
                  <input
                    type="text"
                    value={value.country}
                    onChange={(event) =>
                      setValue({ ...value, country: event.target.value })
                    }
                  ></input>
                </label>
                {/* <br />
                <button>Continue</button> */}
              </div>
            ) : (
              <div>
                <h2>User:</h2>
                <div className="bottons">
                  <p>You need to be logged in to continue</p>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>{" "}
                  {"or "}
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      {/* =========== Columna derecha  ========== */}
      {/* <div className="columna"> */}
        {/* ============ RESUMEN DE COMPRA ============ */}
        {/* <div name="Resumen" className="resumen">
          <h2>Order Items</h2>
          <div className="row"> */}
            {/* {cart.map((item) => (
              <li key={item.id}>
                <h4>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="imgResumen"
                  ></img> */}

                  {/* {item.quantity}
                  {"  "}
                  {item.name}
                  {"  "} */}
                {/* </h4>
                <h3>${item.quantity * item.price}</h3>
              </li>
            ))}
            ;
          </div>
        </div> */}
        {/* ============ METODO DE PAGO =============== */}
        {/* <div name="Payment" className="containerPayment">
          <br />
          <h2>Payment</h2>
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/paypal-logo-2.png"
            value="Paypal"
            alt="logoPaypal"
            className="paypalLogo"
          ></img>
        </div>
      </div> */}

      <div className="columna">
        {/* ===========Summary ========== */}
        <h2>Order Summary</h2>

        <div className="summary">
          <label>
            <h4>
              Subtotal:<span>${itemsPrice.toFixed(2)}</span>
            </h4>
            <h4>
              Shipping:<span>{shippingPrice}</span>
            </h4>
            <h4>
              Taxes:<span>${taxPrice.toFixed(2)}</span>
            </h4>
          </label>
          <hr></hr>

          <h3>
            Total:<span>${totalPrice}</span>
          </h3>
          <label className="Shippingtitle">
            Shipping:<br></br>
            <span>To: {value.lastname + "," + value.name}</span>
            <span>
              {value.address},{value.postalCode},{value.city}
            </span>
          </label>
        </div>
        {/* ========= Boton para generar orden ====== */}
        <button
          type="button"
          onClick={placeOrderHandler}
          className="PlaceOrder"
          disabled={cart.length === 0}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
