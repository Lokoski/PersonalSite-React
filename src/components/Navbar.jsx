import React from 'react'
import logo from '../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container" >
                <a className="navbar-brand" href="#"><img href="#" className="logo" src={logo} alt='logo'/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="hamburgerMenu"icon={faBars} style={{ color: "black" }}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
</nav>
    )
}
