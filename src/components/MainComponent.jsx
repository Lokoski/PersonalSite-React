import React, { useState } from "react";
import Home from './HomePage';
import ContactMe from './ContactMe';
//import Footer from './FooterComponent';
import Navbar from './Navbar'
//import MySkills from './MySkills';
import Portfolio from './Portfolio';
import Particles from 'react-particles-js'
import AboutMe from './AboutMe'





const Main = () => {

    return(
        <div className="main">
                <Particles 
                    params={{ 
                        particles:{
                            number:{
                                value:60,
                                density:{
                                    enable:true,
                                    value_area: 500,
                                }
                            },
                            line_linked: {
                                enable: true,
                                opacity: 0.05
                            },
                            move: {
                                speed: 0.7
                            },
                            shape:{
                                type: "square",
                                stroke:{
                                    width:3,
                                    color:"rgba(138, 18, 18, 0.87)",
                                }
                            }
                        },
                        interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse"
                                    }
                                }
                        }
                    }}
                />
                {/* <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} /> */}
                <Navbar />
                <Home />
                <AboutMe />
                <Portfolio />
                <ContactMe />
        </div>
    )
}

export default Main;