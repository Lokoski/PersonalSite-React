import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'


const HeaderComponent = () => {
    return (
        <div className="header-wrapper" id='home'>
        <div className="social-top d-flex pt-3 justify-content-end">
            <a
                target="_blank"
                rel="noreferrer"
                className="btn btn-social-icon btn-linkedin icon-hover "
                href="http://linked.com/in/alexlokoski"
            >
            <i className="fa fa-linkedin fa-3x " />
            </a>
            {" "}
            <a
                target="_blank"
                rel="noreferrer"
                className="btn btn-social-icon btn-github icon-hover "
                href="http://github.com/lokoski"
            >
            <i className="fa fa-github fa-3x" />
            </a>
            {" "}
            <a
                target="_blank"
                rel="noreferrer"
                className="btn btn-social-icon btn-twitter icon-hover"
                href="http://twitter.com/alexlokoski"
            >
            <i className="fa fa-twitter fa-3x " />
            </a>{" "}
            </div>
            <div className="main-info">
                <h1 style={{color: 'rgb(187, 183, 183)'}}>Hi, I'm <span className="myName" style={{color: 'rgba(138, 18, 18, 0.87)'}}>Alex Lokoski</span></h1>
                <Typed
                    className="typed"
                    strings={["Welcome to my website","I'm a full-stack web developer"]}
                    typeSpeed={80}
                    backSpeed={90}
                    backDelay={2000}
                />
                <Link to='projects' offset={-80} smooth={true} href="#" className="btn-portfolio">View my work</Link>
            </div>
        </div>
    )
}

export default HeaderComponent
