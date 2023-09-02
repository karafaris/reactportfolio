// import Card from "react-bootstrap/Card";
// import {Container,Col,Row} from 'react-bootstrap';
// import { Button } from "react-bootstrap";
import {
  codequiz,
  weatherdashboard,
  notetaker,
  workdayplanner,
  employeetracker,
  queerresourcedatabase,
  flighttracker,
  texteditor,
} from "../../assets/images";
import "./portfolio.css";

const Portfolio = () => {
  const projectsInfo = [
    {
      title: "Code Quiz",
      image: codequiz,
      description:"Created a timed quiz and set up a responsive interface",
      githuburl: "https://github.com/karafaris/WebAPIs.git",
      deployurl: "https://karafaris.github.io/WeatherDashboard/",
    },
    {
      title: "Weather Dashboard",
      image: weatherdashboard,
      description:"An application where you could search a city and then in return the results would should third-party weather data via API",
      githuburl: "https://github.com/karafaris/WeatherDashboard.git",
      deployurl: "hhttps://karafaris.github.io/WeatherDashboard/",
    },
    {
      title: "Note Taker",
      image: notetaker,
      description:"The Note Taker application solves the problem of organizing and storing notes by providing users with a digital platform where they can easily write, save, and retrieve their notes, eliminating the need for physical notepads or scattered digital files",
      githuburl: "https://github.com/karafaris/NoteTaker.git",
      deployurl: "https://notetakerapplication-4fa8eb058202.herokuapp.com/",
    },
    {
      title: "Work Day Planner",
      image: flighttracker,
      description:"It's a dynamic day calendar that I can use as a project management tool.",
      githuburl: "https://github.com/karafaris/WorkDaySchedulerV2.git",
      deployurl: "https://karafaris.github.io/WorkDaySchedulerV2/",
    },
    {
      title: "Employee Tracker",
      image: employeetracker,
      description:"It's a command-line application using node, inquirer, and MySQL to efficiently manage a company's departments, roles, and employees",
      githuburl: "https://github.com/karafaris/EmployeeTracker.git",
      deployurl: "https://youtu.be/bTA37PWM9Bw",
    },
    {
      title: "Queer Resource Database",
      image: queerresourcedatabase,
      description:
        "Resource website that allows users to look up trans and queer-affirming counselors after logging into the website and also contribute by adding additional resources.",
      githuburl: "https://github.com/ronbuttermore/queer-asterisk-resource-database.git",
      deployurl: "https://obscure-reaches-55046-bf910aba05ce.herokuapp.com/",
    },
    {
      title: "Flight Tracker",
      image: flighttracker,
      description:
        "It's a application where users could look up a flight based off certain criteria and the results would display the flight status information",
      githuburl: "https://github.com/sjhudek/flighttracker.git",
      deployurl: "https://sjhudek.github.io/flighttracker/",
    },
    {
      title: "Text Editor",
      image: texteditor,
      description:
        "It'a platform where they can generate and store notes or code snippets both online and offline",
      githuburl: "https://github.com/karafaris/TextEditor.git",
      deployurl: "https://texteditor-2023-144c594086be.herokuapp.com/",
    },
  ];
  
 // <div className="row">
  //   <Card style={{width: "18rem"}} key={index} className='box'>
  //   <Card.Img variant="top" src={card.image} className='card-img-top' />
  //   <Card.Body>
  //     <Card.Title>{card.title}</Card.Title>
  //     <Card.Text>{card.description}</Card.Text>
  //     <Button variant="primary">{card.githuburl}</Button>
  //     <Button variant="primary">{card.deployurl}</Button>
  //   </Card.Body>
  // </Card>
  //   </div>

  return (
    <div className="container-1">
      <div className="grid">
        {projectsInfo.map((project, i) => {
          return (
            <a className="card-link" href={project.githuburl} target="_blank">
              <div key={i} className="card">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt="project image"
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{`${project.description.substring(
                    0,
                    70
                  )}...`}</p>
                  <div className="buttonContainer">
                  <a href={project.githuburl} className="gitAndLiveLink">
                    Github
                  </a>
                  <a href={project.deployurl} className="gitAndLiveLink">
                    Live
                  </a>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  ); 
};

export default Portfolio;