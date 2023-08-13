/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import Button from '../../../uiElements/Button/Button';
import './navbar.scss';

function Navbar() {

    const [active, setActive] = useState('home');
    const [isNav, setIsNav] = useState(false);

    const handleScroll = () => {
        // Logic to determine the active page based on scroll position
        // For example, you can compare the scroll position with the positions of different elements on the page and update the active page accordingly
        // You can use methods like getBoundingClientRect() to get the position of elements
    
        // Example logic: If element with ID 'section1' is in view, set activePage to 'section1'
        // const home = document.getElementById('home');
        // if (home) {
        //   const rect = home.getBoundingClientRect();
        //   if (rect.top >= 0 || rect.bottom <= window.innerHeight) {
        //     setActivePage('Home');
        //   }
        // }

        const scroll = document.body.getBoundingClientRect().top;
        if(scroll < 0) {
          setIsNav(true)
        }else{
          setIsNav(false)
        }

        const home = document.getElementById('home');
        const about = document.getElementById('about');
        const projects = document.getElementById('projects');
        const experience = document.getElementById('experience');
        const footer = document.getElementById('contact');
        if (home) {
          const rect = home.getBoundingClientRect();
          if (rect.top <= 100) {
            setActive('home')
          }
        }
        if(about){
            const rect = about.getBoundingClientRect();
          if (rect.top <= 200) {
            setActive('about');
          }
        }
        if(projects){
            const rect = projects.getBoundingClientRect();
          if (rect.top <= 100) {
            setActive('projects');
          }
        }
        if(experience){
            const rect = experience.getBoundingClientRect();
          if (rect.top <= 200) {
            console.log("structure")
            setActive('experience');
          }
        }
        if(footer){
            const rect = footer.getBoundingClientRect();
          if (rect.bottom <= window.innerHeight) {
            console.log("footer")
            setActive('contact');
          }
        }

        // const rules = document.getElementById('rules');
        // if (rules) {
        //   const rect = rules.getBoundingClientRect();
        //   if (rect.top >= 0 || rect.bottom <= window.innerHeight) {
        //     setActivePage('Rules');
        //   }
        // }
      };
    
      useEffect(() => {
        // Attach scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      // const scroll = document.body.getBoundingClientRect().top

      // console.log("scroll: ", scroll)

    return(
        <div className={`navbar-container ${isNav ? "active" : ""}`}>

            <div className={`navbar-element ${active === "home" ? "active" : ""}`} onClick={()=>{
                document.getElementById('home')?.scrollIntoView({
                    behavior: 'smooth'
                });
                setActive('home')
            }}>Home</div>
            <div className={`navbar-element ${active === "about" ? "active" : ""}`} onClick={()=>{
                document.getElementById('about')?.scrollIntoView({
                    behavior: 'smooth'
                });
                setActive('about')
            }}>About</div>
            <div className={`navbar-element ${active === "projects" ? "active" : ""}`} onClick={()=>{
                document.getElementById('projects')?.scrollIntoView({
                    behavior: 'smooth'
                });
                setActive('projects')
            }}>Projects</div>
            <div className={`navbar-element ${active === "experience" ? "active" : ""}`} onClick={()=>{
                document.getElementById('experience')?.scrollIntoView({
                    behavior: 'smooth'
                });
                setActive("experience")
            }}>Experience</div>
            <div className={`navbar-element ${active === "contact" ? "active" : ""}`} onClick={()=>{
                document.getElementById('contact')?.scrollIntoView({
                    behavior: 'smooth'
                });
                setActive('contact')
            }}>Contact</div>
            <a className={`resume`} target="_blank" href="https://drive.google.com/file/d/1E7XANVpTGJzGpAPpHO2Qe7kjVzZFUIQ2/view?usp=share_link">
                <Button text={"Resume"} onClick={()=>{}}/>
            </a>
        
        </div>
    );
}

export default Navbar;