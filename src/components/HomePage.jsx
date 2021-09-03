import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Particles from "react-particles-js";

const HomePage = () => {
  return (
    <div className="header-wrapper" id="home">
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.05,
            },
            move: {
              speed: 0.7,
            },
            shape: {
              type: "square",
              stroke: {
                width: 3,
                color: "rgba(138, 18, 18, 0.87)",
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      
      {" "}

      <div className="social-top d-flex pt-3 justify-content-end">
        <a
          target="_blank"
          rel="noreferrer"
          className="btn btn-social-icon icon-hover "
          href="https://drive.google.com/file/d/1Xej3F-X7mPF354ypgvi0EnQ7upW7fCC0/view?usp=sharing"
        >
          <i className="fas fa-file-alt fa-3x"></i>
        </a>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="btn btn-social-icon icon-hover"
          href="http://linkedin.com/in/alexlokoski"
        >
          <i className="fab fa-linkedin fa-3x " />
        </a>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="btn btn-social-icon icon-hover"
          href="http://github.com/lokoski"
        >
          <i className="fab fa-github fa-3x" />
        </a>{" "}
        <a
          target="_blank"
          rel="noreferrer"
          className="btn btn-social-icon icon-hover"
          href="http://twitter.com/alexlokoski"
        >
          <i className="fab fa-twitter fa-3x" />
        </a>{" "}
      </div>
      <div className="main-info">
        <h1 style={{ color: "rgb(187, 183, 183)" }}>
          Hi, I'm{" "}
          <span className="myName" style={{ color: "rgba(138, 18, 18, 0.87)" }}>
            Alex Lokoski
          </span>
        </h1>
        <Typed
          className="typed"
          strings={["Welcome to my website", "I'm a full-stack web developer"]}
          typeSpeed={80}
          backSpeed={90}
          backDelay={2000}
          cursor={true}
        />
        <Link
          to="projects"
          offset={-90}
          smooth={true}
          href="#"
          className="btn-portfolio"
        >
          View my work
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
