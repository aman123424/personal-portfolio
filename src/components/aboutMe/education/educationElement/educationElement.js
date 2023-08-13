import React from 'react';
import './educationElement.scss'

function EducationElement({education}) {
    return(
        <div className='education-element'>
            <div className='duration'>{education.duration}</div>
            <div className='institute'>{education.institute}</div>
            <div className='description'>{education.description}</div>
        </div>
    );
}

export default EducationElement;
