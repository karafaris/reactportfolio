import React from "react";  // Importing React library for creating components
import "bootstrap/dist/css/bootstrap.css";  // Importing Bootstrap CSS
import { Button } from "react-bootstrap";  // Importing a Button component from React Bootstrap
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  // Importing FontAwesomeIcon from the FontAwesome library
import "./resume.css";  // Importing a custom CSS file
import { uploadedFileLink } from "../../assets/images";  // Importing a file (possibly an image) from a relative path

const Resume = () => {
  return (
    <>
      <div className="resume-sec">  {/* Creating a container div with a class name */}
        <h1 className="skill">Skills</h1>  {/* Adding a header with a class name */}
        <h3 className="skill">Front-end</h3>  {/* Adding a sub-header with a class name */}
        <div>
          <ul className="skills-section1">  {/* Creating an unordered list with a class name */}
            <li>HTML</li>  {/* List item for HTML skill */}
            <li>CSS</li>  {/* List item for CSS skill */}
            <li>Javascript</li>  {/* List item for JavaScript skill */}
            <li>Jquery</li>  {/* List item for jQuery skill */}
            <li>Responsive design</li>  {/* List item for Responsive design skill */}
            <li>React</li>  {/* List item for React skill */}
            <li>Bootstrap</li>  {/* List item for Bootstrap skill */}
          </ul>
        </div>
        <h3 className="skill">Back-end</h3>  {/* Adding another sub-header for Back-end skills */}
        <div>
          <ul className="skills-section1">  {/* Creating another unordered list with a class name */}
            <li>APIS</li>  {/* List item for APIS skill */}
            <li>Node</li>  {/* List item for Node.js skill */}
            <li>Express</li>  {/* List item for Express.js skill */}
            <li>MySql Sequelize</li>  {/* List item for MySQL Sequelize skill */}
            <li>MongoDB Mongoose</li>  {/* List item for MongoDB Mongoose skill */}
            <li>REST</li>  {/* List item for REST skill */}
            <li>GraphQL</li>  {/* List item for GraphQL skill */}
          </ul>
        </div>
        
        {/* Embedded PDF (commented out) */}
        {/* 
        <embed className="resume-section"
          src={uploadedFileLink}
          type="application/pdf"
          frameBorder="0"
          scrolling="auto"
          height="100vh"
          width="100%"
        ></embed>
        */}
        
        {/* Download button for the resume */}
        <a
          className="button"
          href={uploadedFileLink}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="button">
            <FontAwesomeIcon icon={uploadedFileLink} />  {/* Using FontAwesome icon */}
            Download Resume
          </button>
        </a>
      </div>
    </>
  );
};

export default Resume;  // Exporting the Resume component as the default export
