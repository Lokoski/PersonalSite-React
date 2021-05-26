import React from "react";
import Home from './HomePage';
import ContactMe from './ContactMe';
import Footer from './Footer';
import AboutMe from './AboutMe'
import ReactstrapNav from './ReactstrapNav'
import Projects from './Projects'


const Main = () => {

    return(
        <main className="main">
                <ReactstrapNav />
                <Home />
                <AboutMe />
                <Projects />
                <ContactMe />
                <Footer />
        </main>
    )
}

export default Main;