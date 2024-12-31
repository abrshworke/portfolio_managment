import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Us Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Addis Ababa University Portfolio Management System is designed to
            efficiently streamline academic and institutional portfolios,
            ensuring excellence in education and research.
          </p>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-envelope"></i> Email:{" "}
            <a href="mailto:portfolio@aau.edu.et">portfolio@aau.edu.et</a>
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: +251 11 123 4567
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          © 2024 Addis Ababa University Portfolio Management. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
