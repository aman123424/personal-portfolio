import React from 'react';
import './PORs.scss'
import PageHeading from '../../../uiElements/PageHeading/PageHeading';
import EducationElement from '../../aboutMe/education/educationElement/educationElement';

function PORs() {

    const PORs = [
        {
            duration: "Webops Coordinator",
            institute: "Chemical Engineering Society (ChES), IITM",
            description: "Me and my team enhanced the user experience on Chemplus website, the Institute ChES Fest, for smooth registration of events. We monitored performance, traffic and resolved issues and hence, increased the foot fall of events by 50%, by improvising the website",
        },
        {
            duration: "Webops Supercoordinator",
            institute: "Shaastra 2023 (ISO certified techfest of IITM)",
            description: "Me and my coordinators built a mobile application for the tech fest of our college, Shaastra. It included all the necessary information about the fest like schedule, events, exhibitions, shows, shows, etc.",
        },
        {
            duration: "Coordinator",
            institute: "Mess Monitoring Commitee (MMCC)",
            description: "I inspected the cleanliness of mess and also the food quality provided in the mess, and hence improved the quality of food provided. I handled the complaints of students regarding mess issues and helped to maintain a good relationship between the students and the caterers.",
        },
    ];
    return(
        <div className='por-container' id='experience'>
            <PageHeading heading={"Positions of Responsibility"}/>

            <div className='por-element-container'>
                {
                    PORs.map(POR => {
                        return(
                            <EducationElement education = {POR}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default PORs;