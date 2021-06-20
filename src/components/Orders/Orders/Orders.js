import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { Link } from "react-router-dom";
import "../../Dashboard/Sidebar/Sidebar.css";
import {
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const containerStyle = {
  border: "1px solid red",
};

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser] = useContext(UserContext);
  console.log(loggedInUser.email);
  useEffect(() => {
    fetch("http://localhost:5000/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <section>
      <div style={containerStyle} className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <div
            className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
            style={{ height: "100vh" }}
          >
            <ul className="list-unstyled">
              <li>
                <Link to="/orders" className="text-white">
                  <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                  <span>Orders</span>
                </Link>
              </li>

              <li>
                <Link to="/" className="text-white">
                  <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
              </li>
            </ul>
            <div>
              <Link to="/" className="text-white">
                <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-10 col-sm-12 col-12 ">
          <h2 className="mt-5 text-dark text-center">
            Ordered Services = <b>{orders.length}</b>
          </h2>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Service Name</th>
                  <th>Price</th>
                  <th>Order Status</th>
                </tr>
              </thead>
              {orders.map((order) => (
                <tbody>
                  <tr>
                    <td>{order.date}</td>
                    <td>{order.name}</td>
                    <td>${order.price}</td>
                    <td>{order.status}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
