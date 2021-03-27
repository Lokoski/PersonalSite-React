import React from "react";
import Header from './HeaderComponent';
// import ContactMe from './ContactMeComponent';
//import Footer from './FooterComponent';
import Navbar from './Navbar'
// import Home from './HomeComponent';
// import Projects from './ProjectComponent';
import Particles from 'react-particles-js'
import AboutMe from './AboutMe'

const Main = () => {
    return(
        <div className="main">
                <Particles 
                    params={{ 
                        particles:{
                            number:{
                                value:30,
                                density:{
                                    enable:true,
                                    value_area: 500
                                }
                            },
                            shape:{
                                type: "square",
                                stroke:{
                                    width:5,
                                    color:"rgba(138, 18, 18, 0.87)"
                                }
                            }
                        }
                    }}
                />
                <Navbar />
                <Header />
                <AboutMe />
        </div>
    )
}

export default Main;