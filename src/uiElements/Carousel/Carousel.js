import React, {useState, useEffect} from 'react';
import { useSwipeable } from 'react-swipeable';
import Button from '../Button/Button';
import './Carousel.scss';

export const CarouselItem = ({children, width}) => {
    return(
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    )
}

function Carousel({children, isImages}) {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if(newIndex < 0){
            newIndex = React.Children.count(children) - 1;
        }else if(newIndex > React.Children.count(children) - 1){
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }
    
    // Use only for images

    useEffect(() => {
        if(isImages){
            const interval = setInterval(() => {
                updateIndex(activeIndex + 1);
            }, 2000 );
            
            return () => {
                clearInterval(interval);
            }
        }

    })

    const handlers = useSwipeable({
        onSwipedRight: () => updateIndex( activeIndex - 1),
        onSwipedLeft: () => updateIndex( activeIndex + 1)
    })

    return(
        <div className='carousel'>
            
            <div className='inner' style={{transform: `translate(-${activeIndex*100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}
            </div>

            {
                isImages ? null : 
                <div className='indicators'>
                
                    <div className='btn'>
                        <Button text={"View Prev"} onClick={()=>{updateIndex(activeIndex - 1)}}/>
                    </div>

                    <div className='btn'>
                        <Button text={"View Next"} onClick={()=>{updateIndex(activeIndex + 1)}}/>
                    </div>
            </div>
            }
        </div>
        
    );
}

export default Carousel;