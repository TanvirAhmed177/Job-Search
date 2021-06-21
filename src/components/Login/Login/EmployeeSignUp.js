import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";

function EmployeeSignUp() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    const employeeData = {
      name: data.name,
      email: data.email,
      type: data.type,
    };
    fetch("https://mighty-mesa-38038.herokuapp.com/addEmployee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(employeeData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("New employee added to your website successfully. Thanks!");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <section>
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12 pl-5">
            <h1 className="contactHeader mt-5 mb-4">Employee SignUp</h1>
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
                  placeholder="Employee Name"
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
                  placeholder="Employee email"
                />
              </div>
              <div class="form-group">
                <h4>Type:</h4>
                <select {...register("type")}>
                  <option value="premium">Premium</option>
                  <option value="standard">Standard</option>
                  <option value="basic">Basic</option>
                </select>
              </div>

              <input type="submit" className="btn btn-dark" value="Create" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EmployeeSignUp;
