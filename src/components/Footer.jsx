import React from "react";

import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
      <div className="container">
      <div className="break-line mt-3"></div>
        <div className="row pt-3 footer-row d-flex justify-content-around">
            <a
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-icon btn-linkedin col-md col-sm-12"
              href="https://www.linkedin.com/in/alexlokoski/"
            >
              <i className="fa fa-linkedin fa-3x" />
            </a>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-icon btn-github col-md col-sm-12"
              href="http://github.com/lokoski"
            >
              <i className="fa fa-github fa-3x" />
            </a>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-icon btn-twitter col-md col-sm-12"
              href="http://twitter.com/alexlokoski"
            >
              <i className="fa fa-twitter fa-3x" />
            </a>{" "}
          </div>
          <p className="p-4 text-center">
          ALEX LOKOSKI &copy;
          {new Date().getFullYear()}&nbsp;
        </p>
        </div>
  );
}

export default Footer;
