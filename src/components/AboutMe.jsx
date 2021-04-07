import React from "react";
import picture from "../img/Me.png";

function AboutMe() {
  return (
    <div className="container py-5" id='about'>
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrapper">
            <img className="profile-pic" src={picture} alt="me" />
          </div>
        </div>
        <div className="col-lg-5 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p className="about-p">
            Hi, my name is Alex Lokoski and I’m a full stack developer! I was
            first introduced to coding while trying to create a website for my
            fitness business and I haven’t looked back since. I'm a curious,
            driven team player, who is always looking to improve. As a web
            developer, I have experience working with JavaScript, ReactJS, Redux,
            HTML, CSS, Sass, Bootstrap, and React-native for the front end. I'm also
            comfortable with NodeJS, Express and MongoDB for back end development. 
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
                  <img src="/icons/icon_html.png" alt="html" className="languageImage"/>
                  <h2>HTML</h2>
                </div>

                <div className="item">
                  <img src="/icons/icon_css.png" alt="css3" className="languageImage"/>
                  <h2>CSS</h2>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <img src="/icons/icon_javascript.png" alt="js" className="languageImage"/>
                  <h2>JavaScript</h2>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img src="/icons/icon_react.png" alt="react" className="languageImage"/>
                  <h2>React</h2>
                </div>

                <div className="item">
                  <img src="/icons/icon_redux.png" alt="redux" className="languageImage"/>
                  <h2>Redux</h2>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img src="/icons/icon_sass.png" alt="scss" className="languageImage"/>
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
                  <img src="/icons/icon_nodejs.png" alt="nodejs" className="languageImage"/>
                  <h2>NodeJs</h2>
                </div>

                <div className="item">
                  <img src="/icons/icon_express.png" alt="express" className="languageImage"/>
                  <h2>Express</h2>
                </div>
              </div>

              <div className="row">
                <div className="item">
                  <img src="/icons/icon_mongodb.png" alt="mongodb" className="languageImage"/>
                  <h2>MongoDB</h2>
                </div>
              </div>
              <h1 className="skills-col-fe">Technologies</h1>
              <div className="row">
                <div className="item">
                  <img src="/icons/icon_git.png" alt="git" className="languageImage"/>
                  <h2>Git</h2>
                </div>

                <div className="item">
                  <img src="/icons/icon_github.png" alt="github" className="languageImage" />
                  <h2>GitHub</h2>
                </div>
              </div>
              <div className="row">
                <div className="item">
                  <img src="/icons/icon_webpack.png" alt="webpack" className="languageImage"/>
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
