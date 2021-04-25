import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ReactstrapNav() {
  const [stuck, setStuck] = useState(false);

  //Navbar shows up on scroll

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (stuck === false) {
        if (window.pageYOffset > 715) {
          setStuck(true);
        }
      } else {
        if (window.pageYOffset < 715) {
          setStuck(false);
        }
      }
    });
  }, [stuck]);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="black"
      variant="dark"
      style={
        stuck
          ? {
              position: "fixed",
              top: "0",
              width: "100%",
              left: "0",
              background: "#000",
              opacity: "1",
              height: "8%",
              transition: ".3s ease-in-out",
              padding: "0 10px",
              color: "#000",
            }
          : {}
      }
    >
      <div className="container">
        <Navbar.Brand to="home" smooth={true} className="navbar-brand" href="#">
          <img href="/home" className="logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <span>
            <FontAwesomeIcon
              className="hamburgerMenu"
              icon={faBars}
              style={{ color: "rgba(138, 18, 18, 0.87)" }}
            />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <ul className="navbar-nav mr-auto mt-0">
              <li className="nav-item mt-0">
                <Nav.Link eventKey="1" className="nav-link" href="#home">
                  Home
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link eventKey="2" className="nav-link" href="#about">
                  About Me
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link eventKey="3" className="nav-link" href="#projects" offset={-100}>
                  Projects
                </Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link
                  eventKey="4"
                  smooth={true}
                  className="nav-link"
                  href="#contact"
                >
                  Contact Me
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
