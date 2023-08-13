import React from 'react';
import './projects.scss'
import PageHeading from '../../uiElements/PageHeading/PageHeading';
import Carousel, {CarouselItem} from '../../uiElements/Carousel/Carousel';
import ProjectCard from '../../uiElements/projectCard/projectCard';

import instiSpaceLogo from '../../assets/instispaceImages/appLogo.jpeg'
import frontendTeam from '../../assets/instispaceImages/frontendTeam.jpeg'
import instiSpaceFullTeam from '../../assets/instispaceImages/fullTeam.jpeg'
import pitch from '../../assets/instispaceImages/pitch.jpeg'
import withInstiSpacePoster from '../../assets/instispaceImages/withPoster.jpeg'
import instiSpaceWorking from '../../assets/instispaceImages/working.jpeg'

function Projects() {

    const projects = [
        
        {
            cardType: "Project",
            organization: "InstiSpace",
            position: "Project Member",
            description: "We built a one-stop solution for IITM students to serve as a local social media platform along with a 5+ member team . I worked on the front-end of the mobile app with essential functionality such as a Lost & Found, Events, Queries and Networking and Opportunities with support for rich student interaction. We used Flutter to build frontend, TypegraphQL to build backend, and GraphQL to connect frontend with backend.", 
            link: "https://play.google.com/store/apps/details?id=com.cfi.instispace",
            images: [instiSpaceLogo, pitch, instiSpaceWorking, withInstiSpacePoster, frontendTeam, instiSpaceFullTeam]
        },
        {
            cardType: "Project",
            organization: "Sunshine",
            position: "Project Member",
            description: "Desklamp is an Antler-backed startup from IITM that has built an award winning desktop PDF reader, with an advanced notemaking system. I was responsible for the mobile version built using React as a PWA. This app was deployed to over 5000 users across the globe who were actively demanding a mobile version.", 
            link: "https://web.desklamp.io",
            images: []
        },
        {
            cardType: "Project",
            organization: "Portfolio",
            position: "Personal Project",
            description: "Desklamp is an Antler-backed startup from IITM that has built an award winning desktop PDF reader, with an advanced notemaking system. I was responsible for the mobile version built using React as a PWA. This app was deployed to over 5000 users across the globe who were actively demanding a mobile version.", 
            link: "https://web.desklamp.io",
            images: []
        },
    ];
    return(
        <div className='projects-container' id='projects'>
            <PageHeading heading={"Projects"}/>
            <div className='projects-carousel'>
            <Carousel isImages = {false}>
                    {
                        projects.map(project => {
                            return (
                            <CarouselItem>
                                <div className='item-container'>
                                    <ProjectCard card = {project}/>
                                </div>
                            </CarouselItem>)
                        })
                    }

                </Carousel>
            </div>
        </div>
    );
}

export default Projects;