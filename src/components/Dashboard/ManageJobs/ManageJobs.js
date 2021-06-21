import React, { useEffect, useState } from "react";
import Edit from "../../../images/Group 307.png";
import Sidebar from "../Sidebar/Sidebar";
import Delete from "../../../images/Group 33150.png";

const ManageService = () => {
  const [pendingJobs, setPendingJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobsPending")
      .then((res) => res.json())
      .then((data) => {
        setPendingJobs(data);
      });
  }, []);

  const onSubmit = (j) => {
    const jobData = {
      postedOn: new Date(),
      title: j.title,
      type: j.type,
      location: j.location,
      companyName: j.companyName,
      skills: j.skills,
      link: j.link,
    };
    fetch("http://localhost:5000/addJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(
          "Job details approved and added to jobs collection successfully. Thanks!"
        );
      });
  };

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/deleteJobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => alert("This job post is being deleted successfully!"));
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
                <th>Title</th>
                <th>Type</th>

                <th>Location</th>
                <th>Company</th>
                <th>Skills</th>
                <th>Approve</th>
              </tr>
            </thead>

            {pendingJobs.map((j) => (
              <tbody>
                <tr>
                  <td>{j.title}</td>
                  <td>{j.type}</td>
                  <td>{j.location}</td>
                  <td>{j.companyName}</td>
                  <td>{j.skills}</td>

                  <td>
                    <img
                      style={{
                        height: "25px",
                        cursor: "pointer",
                        textAlign: "center",
                        paddingRight: "10px",
                      }}
                      src={Edit}
                      onClick={() => onSubmit(j)}
                      alt=""
                    />
                    <img
                      style={{ height: "25px", cursor: "pointer" }}
                      src={Delete}
                      onClick={() => handleDelete(j._id)}
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
