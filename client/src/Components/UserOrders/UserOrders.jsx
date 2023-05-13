import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { total_order } from "../../redux/actions/orderActions";
import { Link } from "react-router-dom";

import "./UserOrders.css"

const UserOrders = () => {
  const orders = useSelector((state) => state.totalOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(total_order());
  }, [dispatch]);

  console.log(orders);

  return (
    <div>
      <div>
        <h1>My order history</h1>
      </div>
      <div className="orderTableUser">
        <table >
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
            {orders?.length === undefined ? (
              <tr>
                <td colSpan="6">
                  <p>
                    Todavía no tienes órdenes, continúa comprando{" "}
                    <Link to="/">aquí</Link>.
                  </p>
                </td>
              </tr>
            ) : (
              orders?.map((p) => (
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