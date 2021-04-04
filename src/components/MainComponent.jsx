import React from "react";
import Home from './HomePage';
import ContactMe from './ContactMe';
import Footer from './Footer';
//import Navbar from './Navbar'
import Portfolio from './Portfolio';
import Particles from 'react-particles-js'
import AboutMe from './AboutMe'
import ReactstrapNav from './ReactstrapNav'






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
                {/* <Navbar /> */}
                <ReactstrapNav />
                <Home />
                <AboutMe />
                <Portfolio />
                <ContactMe />
                <Footer />
        </div>
    )
}

export default Main;