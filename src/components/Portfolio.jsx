import React from "react";
import PersonalSite from "../img/Project-Imgs/PersonalSite/PersonalFront.png"
import BubamaraFront from "../img/Project-Imgs/Bubamara/BubamaraFront.png"
import NucampCard from "../img/Project-Imgs/Nucamp/NucampCards.png"

// FONTAWESOME IMPORTS

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'

//REACT POPUPBOX

import { PopupboxContainer } from 'react-popupbox'
import 'react-popupbox/dist/react-popupbox.css'

import { openPersonal, openNucamp, openBubamara, popupboxConfigMyWebsite,} from './ProjectPopUp'

function Portfolio() {


    return (
        <div className="portfolio-wrapper" id="projects">
            <div className="container">
                <h1 className="text-uppercase text-center py-5 portfolio-header">My projects</h1>
                <div className="break-line"></div>
                <div className="img-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPersonal}>
                        <img src={PersonalSite} alt="portfolioimage" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon 'icon={faSearchPlus} />
                       
                </div>
                {/*---*/}
                    <div className="portfolio-image-box" onClick={openBubamara}>
                        <img src={BubamaraFront} alt="bubamarafront" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon 'icon={faSearchPlus} />
                    </div>
                {/*---*/}
                    <div className="portfolio-image-box" onClick={openNucamp}>
                        <img src={NucampCard} alt="nucamp" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon 'icon={faSearchPlus} />
                    </div>
                {/*---*/}
                    <div className="portfolio-image-box" onClick={openPersonal}>
                        <img src={PersonalSite} alt="nucamp" className="portfolio-image"/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className='portfolio-icon 'icon={faSearchPlus} />

                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigMyWebsite} />
        </div>
    )
}

export default Portfolio;
