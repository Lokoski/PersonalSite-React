import React from 'react'
import Typed from 'react-typed'
import { Link } from 'react-scroll'

const HeaderComponent = () => {
    return (
        <div className="header-wrapper" id='home'>
            <div className="main-info">
                <h1 style={{color: 'rgb(187, 183, 183)'}}>Hi, I'm <span className="myName" style={{color: 'rgba(138, 18, 18, 0.87)'}}>Alex Lokoski</span></h1>
                <Typed
                    className="typed"
                    strings={["Welcome to my website","I'm a full-stack web developer"]}
                    typeSpeed={60}
                    backSpeed={70}
                    backDelay={2000}
                />
                <Link to='projects' offset={-50} smooth={true} href="#" className="btn-portfolio">View my work</Link>
            </div>
        </div>
    )
}

export default HeaderComponent
