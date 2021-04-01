import React from "react";
import picture from "../img/Me.png";
import css from "../img/css3.svg"

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
            fitness business and I haven’t looked back ever since. I'm curios,
            driven team player, who’s always looking to improve. As a web
            developer, I’m comfortable working with JavaScript, ReactJS, Redux,
            HTML, CSS, Sass, Bootstrap and React-native for the front end, and NodeJS, 
            Express and MongoDB for the back end. 
            <br/>
            <br/>
                Outside of coding, I’m that
            annoying friend that’s always looking to do something new. I also
            have my own fitness business and I’m very passionate about helping
            people to achieve their fitness goals and live their best life!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="col-lg-5 col-xm-12 ">
          <h1 className="skills-heading">toolbox</h1>
          </div>
        <div className="row skills-row">
            <div className="col-lg col-xm-12 skills-col-fe card m-5">
                <h1>Front-End</h1>
                <ul>
                    <li className="skills">HTML</li>
                    <li className="skills">
                      <div id="logo-holder">
                        <img src={css} className="image" alt="css"/>
                        <div class="text">CSS</div>
                      </div>
                    </li>
                    <li className="skills">SCSS</li>
                    <li className="skills">Bootstrap</li>
                    <li className="skills">JavaScript</li>
                    <li className="skills">React</li>
                    <li className="skills">Redux</li>
                    <li className="skills">React-native</li>
                </ul>
                
                {/*---*/}
            </div>
            <div className="col-lg col-xm-12 skills-col-be card m-5">
                <h1>Back-End</h1>
                <ul>
                    <li className="skills">NodeJS</li>
                    <li className="skills">Express</li>
                    <li className="skills">MongoDB</li>
                    <li className="skills">Mongoose</li>
                </ul>
                <h1>Technologies</h1>
                <ul>
                    <li className="skills">Github</li>
                    <li className="skills">Webpack</li>
                    <li className="skills">Git</li>
                </ul>
            </div>
            <div id="logo-holder">
    <img src={css} className="image" />
    <div class="text">text</div>
</div>
        </div>
    </div>
    </div>
    
  );
};

export default AboutMe;
