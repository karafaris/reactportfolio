// Import necessary modules and components
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  // Define state to manage the current page
  const [currentPage, switchPage] = useState("Home");

  // Function to render the current page based on the 'currentPage' state
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Project":
        return <Projects />;
      case "Resume":
        return <Resume />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      {/* Navbar component */}
      {/* Note: Commented out for demonstration */}
      {/* <Navbar /> */}
      
      {/* Conditionally render Navbar and the current page */}
      {currentPage === 'Home' ? 
        <div>
          <Navbar currentPage={currentPage} switchPage={switchPage} />
          {renderPage(currentPage)}
        </div>
        :
        <div>
          <Navbar currentPage={currentPage} switchPage={switchPage} />
          {renderPage(currentPage)}
        </div>
      }

      {/* Footer component */}
      <Footer />
    </>
  );
}

export default App;
