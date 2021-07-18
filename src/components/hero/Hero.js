import React, {useState} from 'react'
import {HeroContainer, HeroBG, VideoBG, HeroBtnWrapper, HeroContent, HeroP, ArrowForward, ArrowRight} from './Elements'
import {Button} from '../ButtonElement'
import Video from '../../videos/II_Trim.mp4'
function Hero() {
    const [hover, setHover] = useState(false);

    function onHover(){
        setHover(!hover);
    }
    return (
        <div id="hero">
        <HeroContainer>
         <HeroBG>
             <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
         </HeroBG>
         <HeroContent>
             {/* <HeroH1>Hello, this is a random text</HeroH1> */}
             <HeroP>
                 India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.
             </HeroP>
             <HeroBtnWrapper>
                 <a href="#Carousal">
                    <Button onMouseEnter={onHover} onMouseleave={onHover}>
                        Get Started! {hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                 </a>
             </HeroBtnWrapper>
         </HeroContent>
        </HeroContainer>
        </div>
    )
}

export default Hero

