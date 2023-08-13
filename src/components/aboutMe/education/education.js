import React from 'react';
import PageHeading from '../../../uiElements/PageHeading/PageHeading';
import './education.scss'
import EducationElement from './educationElement/educationElement';

function Education() {

    const Education = [
        {
            duration: "2020-2024",
            institute: "IIT Madras",
            description: "A prefinal year undergraduate student pursuing my btech in Chemical Engineering having a CGPA of 7.98 .",
        },
        {
            duration: "2019-2020",
            institute: "Y.C.C. Sillod, Aurangabad",
            description: "I completed my higher secondary education with 78% and also cracking JEE from this jr. college",
        },
        {
            duration: "2017-2018",
            institute: "JNV Aurangabad",
            description: "I secured 1st rank in my 10th class in CBSE board with 93%, also became a state level Scout in this school.",
        },
    ];
    return(
        <div className='education-container' id='education'>
            <PageHeading heading={"Education"}/>

            <div className='education-element-container'>
                {
                    Education.map(education => {
                        return(
                            <EducationElement education = {education}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Education;