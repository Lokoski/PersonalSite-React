import React from 'react'
import Typed from 'react-typed'

const HeaderComponent = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm <span className="myName" style={{color: 'rgba(138, 18, 18, 0.87)'}}>Alex Lokoski</span></h1>
                <Typed
                    className="typed"
                    strings={["Welcome to my website","I'm a full-stack web developer"]}
                    typeSpeed={60}
                    backSpeed={70}
                    backDelay={2000}
                />
                <a href="#" className="btn-portfolio">Portfolio</a>
            </div>
        </div>
    )
}

export default HeaderComponent
