// Import necessary dependencies and styles
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../Footer/footer.css"; // Import the CSS styles
import { Container } from "react-bootstrap";

// Define the Footer functional component
function Footer() {
  return (
    <div className="footer">
      {/* Container for social media icons */}
      <div className="d-flex justify-content-center social-media-icons-white">
        <a href="https://github.com/karafaris">
          <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
        </a>
        <a href="https://www.linkedin.com/in/kara-faris/">
          <FontAwesomeIcon icon={faLinkedin} /> {/* LinkedIn icon */}
        </a>
        <a
          href="mailto:karafaris@icloud.com"
          alt="email Kara Faris"
          title="email me at karafaris@icloud.com"
        >
          <FontAwesomeIcon icon={faEnvelope} /> {/* Email icon */}
        </a>
        <a href="https://www.instagram.com/karafariskarafaris/">
          <FontAwesomeIcon icon={faInstagram} /> {/* Instagram icon */}
        </a>
        <a href="https://www.facebook.com/kara.faris.545">
          <FontAwesomeIcon icon={faFacebook} /> {/* Facebook icon */}
        </a>
      </div>

      {/* Text below social media icons */}
      <p className="footer-text">
        <strong>© Kara Faris </strong>Full-Stack Portfolio
      </p>
    </div>
  );
}

// Export the Footer component for use in other parts of the application
export default Footer;
