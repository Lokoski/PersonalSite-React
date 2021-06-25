import React from "react";
import Bubamara from "../img/Project-Imgs/Bubamara/BubamaraCafeFront.png";
import Nucamp from "../img/Project-Imgs/Nucamp/NuCampFront.png";
import PersonalSite from "../img/Project-Imgs/PersonalSite/PersonalSiteFront.png";
import WeatherApp from "../img/Project-Imgs/WeatherApp/WeatherFront.png"
import Calculator from "../img/Project-Imgs/Calculator/Calculator.png"
import Todo from "../img/Project-Imgs/ToDoApp/Todo.png"


const Projects = () => {

    return (
      <React.Fragment>
        <div id="my-projects" className="container-fluid  mt-5">
          <div className="project-container container  pb-5">
            <h1 id="projects" className="about-heading2">
              Projects
            </h1>
            <div className="row my-5">
            <div className={"personal-site col-12 col-sm-12 col-md-5 "}>
                <div className="overlay">
                  <div className="text">
                    <h2>Personal Website</h2>
                  </div>
                  <div>
                    <button
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var personalModal = document.getElementById("personal");
                        modalBG.style.display = "block";
                        personalModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={"weather col-12 col-sm-12 col-md-5 "}>
                <div className="overlay">
                  <div className="text">
                    <h2>Weather App</h2>
                  </div>
                  <div>
                    <button
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var weatherModal = document.getElementById("weather-app");
                        modalBG.style.display = "block";
                        weatherModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className={"calculator col-12 col-sm-12 col-md-5"}>
                <div className="overlay">
                  <div className="text">
                    <h2>Calculator</h2>
                  </div>
                  <div>
                    <button
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var calculatorModal = document.getElementById("calculator");
                        modalBG.style.display = "block";
                        calculatorModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className={"todo col-12 col-sm-12 col-md-5"}>
                <div className="overlay">
                  <div className="text">
                    <h2>To Do App</h2>
                  </div>
                  <div>
                    <button
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var todoModal = document.getElementById("todo");
                        modalBG.style.display = "block";
                        todoModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={"bubamara col-12 col-sm-12 col-md-5"}>
                <div className="overlay">
                  <div className="text">
                    <h2>Cafe Bubamara</h2>
                  </div>
                  <div>
                    <button
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var bubamaraModal = document.getElementById("bubamara");
                        modalBG.style.display = "block";
                        bubamaraModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className={"nucamp col-12 col-sm-12 col-md-5 "}>
                <div className="overlay">
                  <div className="text">
                    <h2>NuCamp Campsite</h2>
                  </div>
                  <div>
                    <button
                      className="project-button"
                      onClick={() => {
                        var modalBG = document.getElementById("gallery-card");
                        var nucampModal = document.getElementById("nucamp");
                        modalBG.style.display = "block";
                        nucampModal.style.display = "block";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/*hidden modals*/}


        <div id="gallery-card" >
          <div id="bubamara" className="modal-card">
            <div className="visual">
              <img src={Bubamara} alt="" />
            </div>
            <div className="modal-info">
              <h2>Cafe Bubamara</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    This is a website I created for a restaurant. It is fully
                    responsive on all mobile devices.
                  </li>
                  <li>Designed with HTML5, CSS3, Bootstrap 4 and JavaScript.</li>
                </ul>
              </div>
              <div className="modal-bottom">
              <a href="https://github.com/Lokoski/CafeBubamara" target="_blank" rel="noreferrer">
                  <h3>Go to GitHub</h3>
                </a>
                <p
                  className="close-icon"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var bubamaraModal = document.getElementById("bubamara");
                    modalBG.style.display = "none";
                    bubamaraModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="nucamp" className="modal-card">
            <div className="visual">
              <img src={Nucamp} alt="" />
            </div>
            <div className="modal-info">
              <h2 >NuCamp Campsite</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    This project was created as part of the curriculum of the coding bootcamp I attended. It is fully
                    responsive on all mobile devices.
                  </li>
                  <li>
                    Developed with ReactJs, Redux, Reactstrap and SASS.
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a href="https://github.com/Lokoski/Nucamp-React" target="_blank" rel="noreferrer">
                  <h3>Go to GitHub</h3>
                </a>
                <p
                  className="close-icon"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var nucampModal = document.getElementById("nucamp");
                    modalBG.style.display = "none";
                    nucampModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="calculator" className="modal-card">
            <div className="visual">
              <img src={Calculator} alt="" />
            </div>
            <div className="modal-info">
              <h2>Calculator</h2>
              <div className="modal-description">
                <ul>
                  <li>
                    This is a simple calculator app that I built while learning vanilla JavaScript. It is fully functional
                      and mobile friendly.
                  </li>
                  <li>
                    Developed with HTML5, CSS3 and vanilla JavaScript.
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
                <a href="https://github.com/Lokoski/CalculatorJS" target="_blank" rel="noreferrer">
                  <h3>Go to GitHub</h3>
                </a>
                <p
                  className="close-icon"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var calculatorModal = document.getElementById("calculator");
                    modalBG.style.display = "none";
                    calculatorModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="personal" className="modal-card">
            <div className="visual">
              <img src={PersonalSite} alt="" />
            </div>
            <div className="modal-info">
              <h2>Personal Website</h2>
              <div className="modal-description">
                <ul>
                  <li>This is my personal website and you are currently on it! It is fully
                    responsive on all mobile devices.</li>
                  <li>
                    Developed with ReactJs, CSS3 and Bootstrap 4. 
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
              <a href="https://github.com/Lokoski/PersonalSite-React" target="_blank" rel="noreferrer">
                  <h3>Go to GitHub</h3>
                </a>
                <p
                  className="close-icon"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var personalModal = document.getElementById("personal");
                    modalBG.style.display = "none";
                    personalModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>

          <div id="todo" className="modal-card">
            <div className="visual">
              <img src={Todo} alt="" />
            </div>
            <div className="modal-info">
              <h2>Todo App</h2>
              <div className="modal-description">
                <ul>
                  <li>This is a To Do app that I built in the process of learning vanilla JavaScript.
                  The app supports all CRUD operators.</li>
                  <li>
                    Developed with HTML5, CSS3 and vanilla JavaScript. 
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
              <a href="https://github.com/Lokoski/ToDoJS-CRUD" target="_blank" rel="noreferrer">
                  <h3>Go to GitHub</h3>
                </a>
                <p
                  className="close-icon"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var todoModal = document.getElementById("todo");
                    modalBG.style.display = "none";
                    todoModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>


          <div id="weather-app" className="modal-card">
            <div className="visual">
              <img src={WeatherApp} alt="" />
            </div>
            <div className="modal-info">
              <h2>Weather App</h2>
              <div className="modal-description">
                <ul>
                  <li>This is a simple weather app I created to practice working with APIs. It is fully
                    responsive on all mobile devices.</li>
                  <li>
                    Developed with ReactJs, CSS3 and the OpenWeatherMap API.
                  </li>
                </ul>
              </div>
              <div className="modal-bottom">
              <a href="https://github.com/Lokoski/WeatherApp" target="_blank" rel="noreferrer">
                  <h3 style={{marginRight : "3rem"}}>Go to GitHub</h3>
                </a>
                <a href="https://weather22.netlify.app" target="_blank" rel="noreferrer">
                  <h3 style={{marginRight : "3rem"}}>Live demo</h3>
                </a>
                <p
                  className="close-icon"
                  onClick={() => {
                    var modalBG = document.getElementById("gallery-card");
                    var weatherModal = document.getElementById("weather-app");
                    modalBG.style.display = "none";
                    weatherModal.style.display = "none";
                  }}
                >
                  &#10005;
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  export default Projects;

