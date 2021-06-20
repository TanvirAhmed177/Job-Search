import React from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../Shared/Navbar/Navbar";
// import Sidebar from "../Sidebar/Sidebar";

function JobSeekerSignUp() {
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    const jobSeekerData = {
      name: data.name,
      email: data.email,
      type: data.type,
    };
    fetch("http://localhost:5000/addJobSeeker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobSeekerData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("New job seeker added to  website successfully. Thanks!");
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <section>
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12 pl-5">
            <h1 className="contactHeader mt-5 mb-4">Job Seeker SignUp</h1>
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
                  placeholder="Job Seeker Name"
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
                  placeholder="Job Seeker email"
                />
              </div>
              <div class="form-group">
                <h4>Type:</h4>
                <select {...register("type")}>
                  <option value="Fresher">Fresher</option>
                  <option value="Mid Senior">Mid Senior</option>
                  <option value="Senior">Senior</option>
                </select>
              </div>

              <input type="submit" className="btn btn-dark" value="ADD" />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobSeekerSignUp;
