import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import OrderDetail from "../OrderDetail/OrderDetail";

const Dashboard = () => {
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
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10 col-sm-12 col-12 pl-5">
          <h2 className="mt-5 text-dark text-center">
            Ordered Services = <b>{orders.length}</b>
          </h2>

          <div className="table-responsive">
            {orders.map((order) => (
              <OrderDetail order={order}></OrderDetail>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
