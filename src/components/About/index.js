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
          <h2>Search Engine Optimization Specialist & Full Stack Developer</h2>

          {/* Display the user's image */}
          <div>
            <img src={image} alt="Kara Faris" />
          </div>

          {/* Description */}
          <p className="content">
            {/* User's introduction and description */}
<b>**About: **</b>
<br></br>
I am Kara Faris, a dynamic and results-oriented SEO professional with a passion for driving digital excellence. My journey in the ever-evolving landscape of digital marketing has equipped me with a diverse skill set and a proven track record in SEO strategy, web development, and digital marketing operations.
<br></br> <br></br>


<b>**Education and Training:** </b>
<br></br>
I honed my technical skills at the University of Denver, completing an intensive Coding Boot Camp from April 2023 to October 2023. This program equipped me with a deep understanding of cutting-edge technologies and methodologies in web development.

My academic journey also includes a Bachelor of Science degree in Mass Media with an emphasis in Advertising from the University of Missouri, St. Louis. This educational foundation laid the groundwork for my strategic thinking and creative problem-solving skills.
<br></br><br></br>
<b>**Professional Expertise:**</b>
<br></br>
In my recent role as an SEO & Web Developer Contractor at Yellow Bug, I conducted comprehensive SEO audits and developed strategies that resulted in impactful improvements for clients. Notable achievements include the successful development and deployment of client websites such as EnochRentals.com.

As the Digital Marketing Operations Lead at Blue Tangerine Solutions, I conducted UX/UI audits, executed diverse marketing campaigns, and significantly improved agency efficiency by implementing and managing SEO strategies for clients. My role involved close collaboration with clients to ensure their marketing objectives were met with precision.

In previous positions at Digital Strike, Motivation Technologies, and Location3 Media, I consistently demonstrated my ability to enhance client visibility across various channels, including Google My Business, Facebook, Apple, Bing, and Yelp. My strategic approach and utilization of tools like YEXT led to improved local visibility for over 60+ clients.
<br></br><br></br>

<b>**Skill Set:**</b>
<br></br>
My technical proficiency spans a wide array of tools and languages, including Google Analytics, Google Tag Manager, Jira & Spiceworks, HTML/CSS/Git, JavaScript, Bootstrap, APIs, JQuery, JSON, Node, and Photoshop. This comprehensive skill set allows me to navigate the complex landscape of digital marketing with confidence and agility.
<br></br>
<br></br>
**Next Chapter:**
<br></br>
As I embark on the next chapter of my professional journey, I am eager to bring my expertise, innovative mindset, and passion for excellence to a new opportunity. I am driven by the desire to contribute substantial value to an organization and make a meaningful impact in the field of SEO and web development.

Connect with me to explore how my skills and experiences can contribute to the success of your organization. Let's create digital strategies that not only meet but exceed expectations.

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

