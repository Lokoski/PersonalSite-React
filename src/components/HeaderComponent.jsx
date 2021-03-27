import React from 'react'
import Typed from 'react-typed'

const HeaderComponent = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm <span style={{color: 'rgba(138, 18, 18, 0.87)'}}>Alex Lokoski</span></h1>
                <Typed
                    className="typed"
                    strings={['Im a full stack developer','Welcome to my website']}
                    typeSpeed={40}
                    backSpeed={50}
                    backDelay={100}
                />
                <a href="#" className="btn-portfolio">Portfolio</a>
            </div>
        </div>
    )
}

export default HeaderComponent
