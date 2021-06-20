import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Testimonial.css";
import user from "../../../images/user.png";

const Testimonial = ({ reviewData }) => {
  const { name, location, review } = reviewData;
  return (
    <div className="card shadow-sm">
      <div className="text-white " id="icon">
        <div className="d-flex align-items-center justify-content-center">
          <FontAwesomeIcon
            className="icon active-icon mt-2"
            icon={faQuoteLeft}
          />
        </div>
      </div>
      <div className="card-body">
        <p className="card-text text-center pt-4">{review}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src={user} alt="" width="60" />
        <div>
          <h6 className="text-warning">{name}</h6>
          <p className="m-0">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
