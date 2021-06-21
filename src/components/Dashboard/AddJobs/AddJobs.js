import React from "react";
import { useForm } from "react-hook-form";

import Sidebar from "../Sidebar/Sidebar";

const AddJobs = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const jobData = {
      postedOn: new Date(),
      title: data.title,
      type: data.type,
      location: data.location,
      companyName: data.companyName,
      skills: data.skills,
      link: data.link,
    };
    fetch("https://mighty-mesa-38038.herokuapp.com/pendingJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(
          "Job details added to our pending list successfully. Admin will check it soon. Thanks!"
        );
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
            Add new service to the <br></br> website.
          </h1>
          <p>
            Fill up the following form and submit to add new service to the
            system.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 col-12 ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group mt-5">
              <input
                type="text"
                name="title"
                {...register("title")}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Job Title"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="type"
                {...register("type")}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Job Type"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="location"
                {...register("location")}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Job Location"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="companyName"
                {...register("companyName")}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Company Name"
              />
            </div>
            <div class="form-group">
              <input
                type="skills"
                name="type"
                {...register("skills")}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Required Skills"
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="link"
                {...register("link")}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Apply link"
              />
            </div>

            <input type="submit" className="btn btn-dark" value="SEND" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobs;
