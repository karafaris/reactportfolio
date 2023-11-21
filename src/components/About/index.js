// Import the image to be displayed in the About section.
import image from "../../assets/images/mypic.png";

// Import the CSS file for styling the About section.
import "./about.css";

// Import the MainTitle component from the "header" file.
import MainTitle from "./header";

// Import FontAwesome icons for social media and contact information.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Define the About functional component.
const About = () => {
  return (
    <>
      {/* About Me section */}
      <div className="about-me">
        <section className="about-section">
          {/* Main title */}
          <h1 className="hero-heading">Kara Faris</h1>

          {/* Subtitle */}
          <h2>Full Stack Developer</h2>

          {/* Display the user's image */}
          <div>
            <img src={image} alt="Kara Faris" />
          </div>

          {/* Description */}
          <p className="content">
            {/* User's introduction and description */}
            I am a passionate and ambitious Full Stack Developer and UX/UI enthusiast currently residing in Kansas. With a strong drive for learning and creating applications, I bring prior experience in quality assurance and a keen desire to leverage my skills and expertise in a fast-paced development environment, aiming to further enhance my career.
            As a web developer, my approach centers on mobile-first web development, and I specialize in crafting responsive web applications that significantly improve the user experience. I am committed to staying updated with industry trends and best practices, consistently working towards creating innovative solutions that meet the evolving needs of users and businesses.
          </p>

          {/* Email Me button */}
          <a
            href="mailto:karafaris@icloud.com"
            alt="email Kara Faris"
            title="email me at karafaris@icloud.com"
            className="btn"
          >
            Email Me
          </a>

          {/* Social media icons */}
          <div className="hidden d-flex justify-content-center social-media-icons">
            <div className="hide">
              {/* GitHub icon */}
              <a href="https://github.com/karafaris">
                <FontAwesomeIcon icon={faGithub} />
              </a>

              {/* LinkedIn icon */}
              <a href="https://www.linkedin.com/in/kara-faris/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              {/* Email icon */}
              <a
                href="mailto:karafaris@icloud.com"
                alt="email Kara Faris"
                title="email me at karafaris@icloud.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>

            {/* Additional social media icons (commented out) */}
            {/* <a href="https://www.instagram.com">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a> */}
          </div>
        </section>
      </div>
    </>
  );
};

// Export the About component for use in other parts of the application.
export default About;

