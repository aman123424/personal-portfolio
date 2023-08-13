import React from 'react';
import './internships.scss';
import ProjectCard from '../../../uiElements/projectCard/projectCard';
import PageHeading from '../../../uiElements/PageHeading/PageHeading';
import Carousel, { CarouselItem } from '../../../uiElements/Carousel/Carousel';

import instiSpaceLogo from '../../../assets/instispaceImages/appLogo.jpeg'
import frontendTeam from '../../../assets/instispaceImages/frontendTeam.jpeg'
import instiSpaceFullTeam from '../../../assets/instispaceImages/fullTeam.jpeg'
import pitch from '../../../assets/instispaceImages/pitch.jpeg'
import withInstiSpacePoster from '../../../assets/instispaceImages/withPoster.jpeg'
import instiSpaceWorking from '../../../assets/instispaceImages/working.jpeg'

function Internships () {
    return(
        <div className='internsips-container'>
            <PageHeading heading={"Internships"}/>
            <div className='intern-cards-container'>
                
                <ProjectCard card = {
                    {   cardType: "Internship",
                        organization: "Desklamp", 
                        position: "Frontend Engineer", 
                        description: "Desklamp is an Antler-backed startup from IITM that has built an award winning desktop PDF reader, with an advanced notemaking system. I was responsible for the mobile version built using React as a PWA. This app was deployed to over 5000 users across the globe who were actively demanding a mobile version.", 
                        link: "https://web.desklamp.io",
                        images: []
                    }
                    }
                />         
                
            </div>
        </div>
    );
}

export default Internships;