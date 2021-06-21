import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar as NavBar, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 col-12">
          <NavBar
            className="pr-5"
            bg="dark"
            variant="dark"
            collapseOnSelect
            expand="md"
            sticky="top"
          >
            <NavBar.Brand className="pl-5 text-success">
              Hirelous
              <span style={{ color: "greenyellow", fontWeight: "bolder" }}>
                .
              </span>
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav" />
            <NavBar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Link className="nav-link mr-3 text-success" to="/">
                  Home
                </Link>
                <Link className="nav-link mr-3 text-success" to="/login">
                  Login
                </Link>

                <Link className="nav-link mr-3 text-success" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link mr-3 text-success" to="/employee">
                  <FontAwesomeIcon icon={faUserPlus} /> Employee SignUp
                </Link>
                <Link className="nav-link mr-3 text-success" to="/jobSeeker">
                  <FontAwesomeIcon icon={faUserPlus} /> Job Seeker SignUp
                </Link>
              </Nav>
            </NavBar.Collapse>
          </NavBar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
