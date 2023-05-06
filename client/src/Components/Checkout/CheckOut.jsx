//IMPORT STYLE:
import "./CheckOut.css"

//Import librery:
import { Link } from "react-router-dom";
import { useState } from "react";

//IMPORT COMPONENTS:
const Payment = ({total}) =>{
    const [totalCont, setTotalCont] = useState(total);
    const [errorMessage, setErrorMessage] = useState("");

    function handleCoupon(event) {
        const couponCode = event.target.value.toUpperCase();
        
        if (couponCode === "FOODLAND") {                    // Cupon de descuento del 15%
            setTotalCont(total * 0.85);
            setErrorMessage(<span>- 15% !!</span>);
        } else {
            setTotalCont(total);
            setErrorMessage("Invalid coupon code, please try again.");
        }
    }

    return(
        <div name="ContainerPayment" className="ContainerPayment">
            <h1>Check out</h1>
            <h2>Sub-total<span>${total}</span></h2>
            <h2>Shipping<span>Free</span></h2>
            <hr></hr>
            <h2>Total: <span>${total}</span></h2>
            <h3>Coupon:</h3>
            <input type="text" placeholder="Add discount coupon" onChange={handleCoupon}></input>
            <p>{errorMessage}</p>
            {totalCont ? <h2>Total: <span>${totalCont}</span></h2> : <h2>Total: <span>${total}</span></h2>} 

            <Link to="/placeorder"><button>Buy now</button></Link>
        </div>
    )
}

export default Payment;