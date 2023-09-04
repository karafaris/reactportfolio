// Import necessary modules and components
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import config from "./data/particles.json";
import Particles from 'react-tsparticles';
import { loadSnowPreset } from "tsparticles-preset-snow";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";

// ParticlesContainer is a React component responsible for rendering particles
class ParticlesContainer extends React.PureComponent {
  // Custom initialization for particles engine with a snow preset
  async customInit(engine) {
    await loadSnowPreset(engine);
  }

  render() {
    // Configuration options for the particles
    const options = {
      preset: "snow"
    };
    return <Particles options={options} init={this.customInit} style={{ opacity: "0.2" }} />
  }
}

function App() {
  // State to keep track of the selected page
  const [selectedPage, setSelectedPage] = useState("About");

  // Function to change the selected page
  const changePage = (page) => {
    setSelectedPage(page);
  };

  // Function to render the selected page based on the state
  const renderPage = () => {
    switch (selectedPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      case "Contact":
        return <Contact />;
      default:
        return <h1>Page not found!</h1>;
    }
  };

  return (
    <>
      {/* Render the Navbar, ParticlesContainer, selected page, and Footer */}
      <Navbar changePage={changePage} />
      <ParticlesContainer />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
