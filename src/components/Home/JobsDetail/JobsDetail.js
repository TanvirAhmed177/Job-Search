import React from "react";

const ServiceDetail = ({ job }) => {
  const { title, type, companyName, location, skills, link } = job;

  return (
    <>
      <div className="col-md-14 services pb-5">
        <div className="card ">
          <div className="card-header">{title}</div>
          <div className="card-body">
            <h5 className="card-title">Company: {companyName}</h5>
            <h5 className="card-title">Type: {type}</h5>
            <h5 className="card-title">Location: {location}</h5>
            <h5 className="card-title">Skills required: {skills}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum
              quo non earum sunt consectetur laudantium esse atque veniam? Illo
              pariatur quia libero labore, nobis voluptates, alias asperiores a
              exercitationem sint rerum at quisquam officia unde assumenda
              sequi. Repudiandae aliquid deserunt earum eveniet ducimus debitis
              esse, unde quidem natus. Fugiat.
            </p>

            <a href={link} className="btn btn-secondary">
              Apply
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
