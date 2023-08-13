import React from 'react';
// import Carousel, { CarouselItem } from '../../uiElements/Carousel/Carousel';
// import ProjectCard from '../../uiElements/projectCard/projectCard';
import AboutMe from '../aboutMe/aboutMe';
import Education from '../aboutMe/education/education';
import ContactUs from '../contactUs/contactUs';
import Internships from '../experience/interships/internships';
import PORs from '../experience/PORs/PORs';
import Home from '../home/home';
import Projects from '../projects/projects';
import LeftDecoration from './leftDecoration/leftDecoration';
import './main.scss'
import Navbar from './navbar/navbar';
import RightDecoration from './rightDecoration/rightDecoration';
import SocialIcons from './socialIcons/socialIcons';

function Main() {
    return(

        <div className='main'>

            {/* Navbar */}
            <Navbar />

            {/* SocialIcons */}
            <SocialIcons />

            {/* Component */}
            <div className='component-container'>
                <Home />
                <AboutMe />
                <Education />
                <Projects />
                <PORs />
                <Internships />
                <ContactUs />
            </div>

            {/* Right Decoration Line */}
            <RightDecoration />

            {/* Left Decoration Line */}
            <LeftDecoration />

        </div>

    );
}

export default Main;