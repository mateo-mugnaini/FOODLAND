import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../../redux/actions/orderActions";
import { Link } from "react-router-dom";

import "./UserOrders.css"

const UserOrders = () => {
  const orders = useSelector((state) => state.order.myOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

console.log(orders.map());
  const aux = orders.map(e => e.orderItems)

  // console.log(aux.map(e => e.map(p => p)));
  const compra = aux.map(e => e.map(p => p))

  // console.log(compra);

  return (
    <div>
      <div>
        <h1>My order history</h1>
      </div>
      <div className="orderTableUser">
        <table>
          <thead>
            <tr>
              <th className="thStock1">Name</th>
              <th className="thStock2">Category</th>
              <th className="thStock2">Price</th>
              <th className="thStock2">Amount</th>
              <th className="thStock2">Total Price</th>
              <th className="thStock3">Status</th>
            </tr>
          </thead>
          <tbody>
            {compra?.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <p>
                    Todavía no tienes órdenes, continúa comprando{" "}
                    <Link to="/">aquí</Link>.
                  </p>
                </td>
              </tr>
            ) : (
              compra?.map((p) => (
                <tr key={p._id}>
                  <td>{p.name}</td>
                  <td>{p.category}</td>
                  <td>usd${p.price}</td>
                  <td>{p.brand}</td>
                  <td>usd${p.totalPrice}</td>
                  <td>usd${p.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserOrders;
