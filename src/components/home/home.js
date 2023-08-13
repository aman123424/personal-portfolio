import React, {useState} from 'react';
import './home.scss'
// import bgImg from '../../assets/homeBg.svg'
import SkillBox from '../../uiElements/skillBox/skillBox';
import htmlLogo from '../../assets/Skills/html_logo.svg'
import cssLogo from '../../assets/Skills/css_logo.svg'
import flutterLogo from '../../assets/Skills/flutter_logo.svg'
import reactLogo from '../../assets/Skills/React_logo.svg'
import cppLogo from '../../assets/Skills/cpp_logo.svg'
import javaScriptLogo from '../../assets/Skills/js_logo.svg'
import typescriptLogo from '../../assets/Skills/ts_logo.svg'
import githubLogo from '../../assets/Skills/github_logo.svg'
// import { type } from '@testing-library/user-event/dist/type';

function Home() {

    const [name, setName] = useState("charlie")
    const handleClick = () => {
        setName('Robin');
        console.log(name);
    }

    const skillIcons = [
        {
            src: cssLogo,
            title: "CSS"
        },
        {
            src: htmlLogo,
            title: "HTML"
        },
        {
            src: flutterLogo,
            title: "Flutter"
        },
        {
            src: reactLogo,
            title: "React"
        },
        {
            src: cppLogo,
            title: "CPP"
        },
        {
            src: typescriptLogo,
            title: "TypeScript"
        }, 
        {
            src: javaScriptLogo,
            title: "JavaScript"
        },
        {
            src: githubLogo,
            title: "Github"
        },
    ]


    // $(document).ready(function(){
    //     animateDiv('.React');
    //     animateDiv('.Flutter');
    //     animateDiv('.CSS');
    //     animateDiv('.CPP');
    // });
    
    // function makeNewPosition(){
        
    //     // Get viewport dimensions (remove the dimension of the div)
    //     var h = $(window).height() - 50;
    //     var w = $(window).width() - 50;
        
    //     var nh = Math.floor(Math.random() * h);
    //     var nw = Math.floor(Math.random() * w);
        
    //     return [nh,nw];    
        
    // }
    
    // function animateDiv(myclass){
    //     var newq = makeNewPosition();
    //     $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
    //       animateDiv(myclass);        
    //     });
        
    // };
    return(
        <div className='home-container' id='home'>
            <div className='icons-container'>
                {
                    skillIcons.map(skillIcon => {
                        return(
                            <div className={`icon ${skillIcon.title}`}>
                                <SkillBox skillLogo={skillIcon.src} skillTitle={skillIcon.title}/>
                            </div>
                        )
                    })
                }
                {/* <div className='react icon'>
                    <SkillBox skillLogo={reactLogo} skillTitle="React"/>
                </div>
                <div className='cpp icon'>
                    <SkillBox skillLogo={cppLogo} skillTitle="CPP"/>
                </div>
                <div className='js icon'>
                    <SkillBox skillLogo={javaScriptLogo} skillTitle="Javascript"/>
                </div>
                <div className='ts icon'>
                    <SkillBox skillLogo={typescriptLogo} skillTitle="TypeScript"/>
                </div>
                <div className='github icon'>
                    <SkillBox skillLogo={githubLogo} skillTitle="Github"/>
                </div>
                <div className='css icon'>
                    <SkillBox skillLogo={cssLogo} skillTitle="CSS"/>
                </div>
                <div className='html icon'>
                    <SkillBox skillLogo={htmlLogo} skillTitle="HTML"/>
                </div> */}
            </div>
            <div className='intro-container'>
                <div className='hello' onClick={handleClick}>Hello, I'm</div>
                    <div className='name'>Aman Kulwal</div>
                <div className='short-intro'>I build interactive websites and applications that run across platforms and devices</div>
                <div className='brief-intro'>My favorite thing about my work is to develop websites or mobile applications. I enjoy the journey from coming up with wild ideas to turning them into a performant product, launching and growing it afterward.</div>
            </div>

            {/* <div className='bgImg-container'>
                <img src={bgImg}/>
            </div> */}
        </div>
    );
}

export default Home;