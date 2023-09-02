// Import necessary dependencies and styles
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-scroll"; // Import Link from react-scroll for smooth scrolling
// import { Link } from "react-router-dom"; // You can import Link from react-router-dom if needed
import "./navbar.css"; // Import the CSS styles

// Define the Navigation functional component
const Navigation = (props) => {
  // Define the navigation links and their corresponding target sections
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="nav-link" id="responsive-navbar-nav">
          <Nav>
            {/* Navigation links with smooth scrolling */}
            <Nav.Link
              onClick={() => {
                props.changePage("About");
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#portfolio" // Scroll to the "portfolio" section
              onClick={() => {
                props.changePage("Portfolio");
              }}
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#resume" // Scroll to the "resume" section
              onClick={() => {
                props.changePage("Resume");
              }}
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#contact" // Scroll to the "contact" section
              onClick={() => {
                props.changePage("Contact");
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

// Export the Navigation component for use in other parts of the application
export default Navigation;

