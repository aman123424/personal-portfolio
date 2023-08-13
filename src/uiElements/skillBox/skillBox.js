import React from 'react';
import './skillBox.scss'

function SkillBox({skillLogo, skillTitle}) {
    return(
        <div className='skill-box'>
            <img className='skill-logo' src={skillLogo}/>
            <div className='skill-title'>{skillTitle}</div>
        </div>
    );
}

export default SkillBox;