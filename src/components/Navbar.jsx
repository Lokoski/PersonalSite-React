import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-scroll'

export default function Navbar() {
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
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={
        stuck
          ? { 
                position: "fixed",
                top: "0",
                width: "100%",
                left: "0",
                background: "#000",
                opacity: "1",
                height: "10%",
                transition: ".3s ease-in-out",
                padding:"0 10px",
                color:'#000'            }
          : { left: '0' ? '0' : '-100%' }
      }
    >
    
      <div className="container">
        <Link to='home' smooth={true} className="navbar-brand" href="#">
          <img href="/home" className="logo" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            className="hamburgerMenu"
            icon={faBars}
            style={{ color: "rgba(138, 18, 18, 0.87)" }}
          />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to='home' eventKey="1" smooth={true} className="nav-link" href="home">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to='about' offset={-40} eventKey="2" smooth={true} className="nav-link" href="about">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to='projects'  offset={-50} eventKey="3" smooth={true} className="nav-link" href="projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to='contact'  offset={-50} eventKey="4" smooth={true} className="nav-link" href="contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

