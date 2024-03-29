import React from "react";
import picture from "../img/profile.jpeg";
import html from "../img/icons/icon_html.png"
import sass from "../img/icons/icon_sass.png"
import js from "../img/icons/icon_javascript.png"
import react from "../img/icons/icon_react.png"
import css from "../img/icons/icon_css.png"
import redux from "../img/icons/icon_redux.png"
import mongo from "../img/icons/icon_mongodb.png"
import node from "../img/icons/icon_nodejs.png"
import express from "../img/icons/icon_express.png"
import github from "../img/icons/icon_github.png"
import git from "../img/icons/icon_git.png"
import wp from "../img/icons/icon_webpack.png"
import "font-awesome/css/font-awesome.min.css";


function AboutMe() {
  return (
    <div className="container py-5" id='about'>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrapper">
            <img className="profile-pic" src={picture} alt="me" />
          </div>
        </div>
        <div className="col-lg-5 col-xm-12 about-me">
          <h1 className="about-heading">About Me</h1>
          <p className="about-p">
            Hi, my name is Aleksandar Lokoski and I’m a full stack developer! I was
            first introduced to coding while trying to create a website for my
            fitness business and I haven't looked back since. I'm a curious,
            driven team player, who is always looking to improve. As a web
            developer, I have experience working with JavaScript, ReactJS, Redux,
            HTML, CSS, Sass and Bootstrap for the front end, and React Native for mobile developer.
            I'm also comfortable with NodeJS, Express and MongoDB for back end development. 
            <br/>
            <br/>
                Outside of coding, I’m that
            annoying friend that’s always looking to do something new. I also
            have my own fitness business and am very passionate about helping
            people to achieve their fitness goals and live their best life!
          </p>
        </div>
      </div>

      {/*-------SKILLS-------*/}

      <div className="container">
        <div className="col-lg-5 col-xm-12 ">
          <h1 className="skills-heading">toolbox</h1>
          </div>
        <div className="row skills-row">
        <div className="col-lg-5 col-xm-12 skills-col-be card">
          <div className="cardWrapper">
            <div className="">
              <h1 className="skills-col-fe">Front-end</h1>
              <div className="row">
                <div className="item">
                  <img src={html} alt="html" className="languageImage"/>
                  <h2>HTML</h2>
                </div>

                <div className="item">
                  <img src={css} alt="css3" className="languageImage"/>
                  <h2>CSS</h2>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <img src={js} alt="js" className="languageImage"/>
                  <h2>JavaScript</h2>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img src={react} alt="react" className="languageImage"/>
                  <h2>React</h2>
                </div>

                <div className="item">
                  <img src={redux} alt="redux" className="languageImage"/>
                  <h2>Redux</h2>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img src={sass} alt="scss" className="languageImage"/>
                  <h2>SASS</h2>
                </div>
              </div>
            </div>
          </div>
            </div>
            <div className="col-lg-5 col-xm-12 skills-col-be card">
          <div className="cardWrapper">
            <div className="">
              <h1 className="skills-col-fe">Back-end</h1>
              <div className="row">
                <div className="item">
                  <img src={node} alt="nodejs" className="languageImage"/>
                  <h2>NodeJs</h2>
                </div>

                <div className="item">
                  <img src={express} alt="express" className="languageImage"/>
                  <h2>Express</h2>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <img src={mongo} alt="mongodb" className="languageImage"/>
                  <h2>MongoDB</h2>
                </div>
              </div>
              <h1 className="skills-col-fe">Technologies</h1>
              <div className="row">
                <div className="item">
                  <img src={git} alt="git" className="languageImage"/>
                  <h2>Git</h2>
                </div>

                <div className="item">
                  <img src={github} alt="github" className="languageImage" />
                  <h2>GitHub</h2>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img src={wp} alt="webpack" className="languageImage"/>
                  <h2>Webpack</h2>
                </div>
              </div>
            </div>
          </div>
          </div>
            </div>
        </div>
    </div>    
  );
};

export default AboutMe;
