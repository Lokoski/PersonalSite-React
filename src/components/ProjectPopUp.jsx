import React from "react";
import PersonalSite from "../img/Project-Imgs/PersonalSite/PersonalFront.png"
import BubamaraFront from "../img/Project-Imgs/Bubamara/BubamaraFront.png"
import NucampCard from "../img/Project-Imgs/Nucamp/NucampCards.png"


//REACT POPUPBOX

import { PopupboxManager } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

//Personal
export const openPersonal = () => {
    const content = (
        <>
        <img className='portfolio-image-popup'  src={PersonalSite} alt='personal site' />
        <p>This is the website you are currently on. It was build with ReactJs, Bootstrap and few different packages. <br/>It is fully responsive with any mobile device!</p>
        <b>GitHub:</b> 
        <a 
            className="hyperlink" 
            onClick={() => window.open('https://github.com/Lokoski/PersonalSite-React', '_blank')}
            href="https://github.com/Lokoski/PersonalSite-React"
            >
            My Personal Website
        </a>
        </>
    )
    PopupboxManager.open({content})
}

//Nucamp
export const openNucamp = () => {
    const content = (
        <>
        <img className='portfolio-image-popup' src={NucampCard} alt='nucamp site' />
        <p>This website was build as a project at the bootcamp I attended. It is build with ReactJs, Redux, Bootstrap and few different packages. <br/>It is fully responsive with any mobile device!</p>
        <b>GitHub:</b> 
        <a 
            className="hyperlink" 
            onClick={() => window.open('https://github.com/Lokoski/Nucamp-React/', '_blank')}
            href="https://github.com/Lokoski/Nucamp-React/"
            >
            Nucampsite Build With React
        </a>
        </>
    )
    PopupboxManager.open({content})
}

//Bubamara
export const openBubamara = () => {
    const content = (
        <>
        <div>
        <img className='portfolio-image-popup ' src={BubamaraFront} alt='bubamara site' />
        </div>
        <div>
        <p>I built this website for a restaurant. It is built with HTML, CSS and Bootstrap 4. <br/>It is fully responsive with any mobile device!</p>
        </div>
        
        <b>GitHub:</b> 
        <a 
            className="hyperlink" 
            onClick={() => window.open('https://github.com/Lokoski/CafeBubamara', '_blank')}
            href="https://github.com/Lokoski/CafeBubamara"
            >
            Cafe Bubamara
        </a>
        </>
    )
    PopupboxManager.open({content})
}


export const popupboxConfigMyWebsite = {
    titleBar: {
        enable:true,
        text:"My Website"
    },
    fadeIn: true,
    fadeInSpeed:500
}
