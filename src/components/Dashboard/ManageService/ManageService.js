import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Edit from "../../../images/Group 307.png";
import Delete from "../../../images/Group 33150.png";
import Sidebar from "../Sidebar/Sidebar";

const ManageService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => alert("Your service is being deleted successfully!"));
  };
  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-10 col-sm-12 col-12 pl-5">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>

                <th>Action</th>
              </tr>
            </thead>

            {services.map((s) => (
              <tbody>
                <tr>
                  <td>{s.name}</td>
                  <td>{s.price}</td>

                  <td>
                    <img
                      style={{ height: "25px", cursor: "pointer" }}
                      className="pr-1"
                      src={Edit}
                      alt=""
                    />
                    <img
                      style={{ height: "25px", cursor: "pointer" }}
                      src={Delete}
                      onClick={() => handleDelete(s._id)}
                      alt=""
                    />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageService;
