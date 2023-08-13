/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from '../../uiElements/Button/Button';
import profilePic from '../../assets/profilePic.jpeg';
import './aboutMe.scss'
import PageHeading from '../../uiElements/PageHeading/PageHeading';

function AboutMe() {
    return (
        <div className='about-me-container' id='about'>
            
            <PageHeading heading={"About Me"}/>

            <div className='img-text-container'>
                <div className='text-and-button-container'>
                    <div className='text'>
                        <p>
                        Hello! My name is <b>Aman</b>, currently pursuing my Btech degree in Chemical Engineering at IIT Madras, and currently I am in my 3rd year.
                        </p>

                        <p>
                        My journey as a software developer started back when I had a privilege to attend a summer school held by CFI, IITM. After that, I worked on projects like Instispace app, my own personal portfolio website, ChES website and also interned at Desklamp developers. Fast-forward to today, I am working with desklamp and building new products for them.
                        </p>

                        <p>
                        I love to learn new technologies along with the ones I know, that are, Flutter, React js, React Native, HTML, CSS, JavaScript, C, C++ ,etc.
                        </p>
                    </div>
                    <div className='education-button'>
                        <Button text={"Education"}></Button>
                    </div>
                </div>

                <div className='img-circle-container'>
                    <div className='img-container'>
                        <img src={profilePic} className="img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;