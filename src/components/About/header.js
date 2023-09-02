// Import the ReactVivus component from the "react-vivus" library.
// ReactVivus is used to animate an SVG file.
import ReactVivus from "react-vivus";

// Import the SVG file that will be animated.
import svg from "../../assets/images/svg/newfile_animated.svg";

// Define a functional component called "MainTitle" responsible for rendering the animated title.
const MainTitle = () => {
  // Render the animated title inside a <div> with the id "main-title".
  return (
    <div id="main-title">
      {/* Use ReactVivus to animate the SVG */}
      <ReactVivus
        id="foo"
        option={{
          file: svg, // Specify the SVG file to animate.
          animTimingFunction: "EASE", // Set the animation timing function.
          type: "oneByOne", // Specify the animation type (oneByOne).
          onReady: console.log, // Callback function when animation is ready (for logging).
        }}
        callback={console.log} // Callback function when animation is complete (for logging).
      />
    </div>
  );
};

// Export the MainTitle component for use in other parts of the application.
export default MainTitle;
