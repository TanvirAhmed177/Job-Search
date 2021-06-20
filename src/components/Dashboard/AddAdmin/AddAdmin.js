import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      name: data.name,
      email: data.email,
    };
    fetch("http://localhost:5000/addAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("New admin added to your website successfully. Thanks!");
      });
  };
  return (
    <section>
      <div className="row">
        <div className="col-md-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>

        <div className="col-md-3 col-sm-12 col-12 pl-5">
          <h1 className="contactHeader mt-5 mb-4">
            Add new Admin to the website......
          </h1>
        </div>
        <div className="col-md-6 col-sm-12 col-12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group mt-5">
              <input
                type="text"
                name="name"
                {...register("name")}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Admin Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="email"
                {...register("email")}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Admin email"
              />
            </div>

            <input type="submit" className="btn btn-dark" value="ADD" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddAdmin;
