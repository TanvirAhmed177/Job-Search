import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faPlus,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch("https://mighty-mesa-38038.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, []);

  const [isEmployee, setIsEmployee] = useState(false);

  console.log(loggedInUser.email);
  useEffect(() => {
    fetch("https://mighty-mesa-38038.herokuapp.com/isEmployee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsEmployee(data));
  }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <li>
            <Link to="/addReviews" className="text-white">
              <FontAwesomeIcon icon={faComment} /> <span>Add Reviews</span>
            </Link>
          </li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {isEmployee && (
          <li>
            <Link to="/addJobs" className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>Post job</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <div>
            <li>
              <Link to="/adminDashboard" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />{" "}
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/addAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Add Admin</span>
              </Link>
            </li>

            <li>
              <Link to="/manage" className="text-white">
                <FontAwesomeIcon icon={faCog} /> <span>Manage Orders</span>
              </Link>
            </li>
          </div>
        )}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
