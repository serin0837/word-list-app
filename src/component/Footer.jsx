import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="social-link">
          <a
            href="https://twitter.com/SerinJeon"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/serin-jeon/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/serin0837"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="fa fa-github"></i>
          </a>

          <a
            aria-label="Email Serin"
            href="mailto:serin0837@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn contact-details"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div>
          <p> © 2020. Serin Jeon - all rights reserved | serin0837@icloud.com</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
