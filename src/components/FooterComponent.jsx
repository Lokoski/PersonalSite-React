import React from "react";

import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-2 offset-1">
            <h5>Links</h5>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Contact Me</h5>
                <div className="text-center">
                    <a role="button" className="btn btn-link" href="tel:201-757-0177">
                    <i className="fa fa-phone" /> 201-757-0177
                    </a>
                    <br />
                    <a
                    role="button"
                    className="btn btn-link"
                    href="mailto:notreal@notreal.co"
                    >
                    <i className="fa fa-envelope-o" /> aleksandar.lokoski@gmail.com
                    </a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
