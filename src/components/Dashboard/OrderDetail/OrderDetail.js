import React from "react";
import { useForm } from "react-hook-form";

const OrderDetail = ({ order }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const statusData = {
      status: data.status,
    };
    fetch(`http://localhost:5000/updateOrders/${order._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusData),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Service updated successfully");
      });
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Service Name</th>
            <th>Price</th>
            <th>Payment ID</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{order.date}</td>
            <td>{order.name}</td>
            <td>${order.price}</td>
            <td>{order.paymentId}</td>
            <td>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="status"
                  {...register("status")}
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="service status"
                  required
                />
                <input
                  type="submit"
                  className="btn btn-dark mt-1"
                  value="SET"
                />
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;
