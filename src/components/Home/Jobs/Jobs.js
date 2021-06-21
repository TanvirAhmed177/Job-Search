import React, { useEffect, useState } from "react";
import JobsDetail from "../JobsDetail/JobsDetail";

import "./Jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://mighty-mesa-38038.herokuapp.com/jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setList(data);
      });
  }, []);

  var handleChange = (e) => {
    let word = e.target.value;
    if (word === "Select Type") {
      setList(jobs);
    } else if (word === "Full time") {
      const filtered = jobs.filter((item) => item.type === "Full time");
      setList(filtered);
    } else if (word === "Part time") {
      const filtered = jobs.filter((item) => item.type === "Part time");
      setList(filtered);
    } else if (word === "Remote") {
      const filtered = jobs.filter((item) => item.location === "Remote");
      setList(filtered);
    } else if (word === "Office") {
      const filtered = jobs.filter((item) => item.location === "Office");
      setList(filtered);
    } else if (word === "Contract") {
      const filtered = jobs.filter((item) => item.location === "Contract");
      setList(filtered);
    }
  };
  return (
    <section className="ftco-section mt-5">
      <div className="container">
        <div className="row justify-content-center pb-5 mb-3">
          <div className="col-md-7 heading-section text-center ">
            <h3 className="text-success">Job Details</h3>
            <hr width="200px" color="grey" />
          </div>
        </div>
        <h4 style={{ display: "inline", marginRight: "10px" }}>Job Type - </h4>
        <select
          className="form-select text-center mb-5"
          aria-label="Default select example"
          onChange={handleChange}
          title="type"
        >
          <option selected value="Select Type">
            All Type
          </option>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
        </select>
        <h4
          style={{ display: "inline", marginRight: "10px", marginLeft: "20px" }}
        >
          Job Location -{" "}
        </h4>
        <select
          className="form-select text-center mb-5"
          aria-label="Default select example"
          onChange={handleChange}
          title="location"
        >
          <option selected value="Select Type">
            All Type
          </option>
          <option value="Remote">Remote</option>
          <option value="Office">Office</option>
        </select>

        <div className="row">
          {list.map((job) => (
            <JobsDetail job={job}></JobsDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
