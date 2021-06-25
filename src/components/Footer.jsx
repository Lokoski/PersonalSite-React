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
              className="btn btn-social-icon btn-file col-sm"
              href="https://drive.google.com/file/d/1oL5Vbiaqx7n7fW8QQF0P9jUtQ98iG9W8/view?usp=sharing"
            >
              <i className="fas fa-file-alt fa-3x spin" />
            </a>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-icon btn-linkedin col-sm"
              href="https://www.linkedin.com/in/alexlokoski/"
            >
              <i className="fab fa-linkedin fa-3x spin" />
            </a>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-icon btn-github col-sm"
              href="http://github.com/lokoski"
            >
              <i className="fab fa-github fa-3x spin" />
            </a>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="btn btn-social-icon btn-twitter col-sm"
              href="http://twitter.com/alexlokoski"
            >
              <i className="fab fa-twitter fa-3x spin" />
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
