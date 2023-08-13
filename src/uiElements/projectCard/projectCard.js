import React, {useState} from 'react';
import Button from '../Button/Button';
import Carousel, { CarouselItem } from '../Carousel/Carousel';
import './projectCard.scss'
import flutter from '../../assets/Skills/flutter_logo.svg';
import javascript from '../../assets/Skills/js_logo.svg'

function ProjectCard ({card}) {

    const [imgFullScreen, setImgFullScreen] = useState(false);

    return(
        <div className='card-container'>

            <div className='card'>
                <div className='designation'>
                    <div className='organization'>{card.organization}</div>

                    <div className='position'>{`(${card.position})`}</div>
                </div>

                <div className='img-text-container'>
                
                    <div className={`img-container`} onClick={() => {setImgFullScreen(true); console.log("imgFullScreen: ", imgFullScreen)}}>
                        <Carousel isImages={true}>
                            {
                                card.images?.map(image=>{
                                    return(
                                        <CarouselItem>
                                            <img src={image} className="image"></img>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    
                    <div className='description'>{card.description}</div>
                
                </div>

                <div className='show-more'>
                    <Button text={`View ${card.cardType === "Project" ? "Project" : ""}`} onClick={()=>window.open(card.link)}/>
                </div>
            </div>

            {/* { imgFullScreen ? 
                <div className='full-screen-img' onClick={()=>{setImgFullScreen(false)}}>
                    <Carousel isImages={true}>
                        <CarouselItem>
                            <img src={flutter}></img>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={javascript}></img>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={flutter}></img>
                        </CarouselItem>
                    </Carousel>
                </div> 
                : null
            } */}

        </div>
    );
}

export default ProjectCard;