import React from 'react';
import {FaLinkedinIn, FaInstagram, FaGithub, FaGit} from 'react-icons/fa';
import './socialIcons.scss';

function SocialIcons() {
    return(
        <div className='social-media-icons'>
            
            <a className='linkedin icon-container' href='https://www.linkedin.com/in/aman-kulwal-ab8a39212/' target="blank">
                <div className='icon-name'>LinkedIn</div>
                <FaLinkedinIn className='icons'/>
            </a>
            
            <a className='github icon-container' href='https://github.com/aman123424' target="blank">
                <div className='icon-name'>Github</div>
                <FaGithub className='icons'/>
            </a>
            
            <a className='instagram icon-container' href='https://www.instagram.com/aman_kulwal/' target="blank">
                <div className='icon-name'>Instagram</div>
                <FaInstagram className='icons'/>
            </a>
        
        </div>
    )
}

export default SocialIcons;