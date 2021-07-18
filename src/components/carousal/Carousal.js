import React, {useState} from 'react'
import {Data} from './Data'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './Carousal.css'
function Carousal() {
    const [current, setCurrent] = useState(0);
    const length = Data.length;

    const nextSlide = ()=>{
        setCurrent(current===(length-1)?0:current+1)
    }
    const prevSlide = ()=>{
        setCurrent(current===0?length-1:current-1)
    }
    if(!Array.isArray(Data)){
        return null;
    }


    return (
        <div id="Carousal">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
            {Data.map((data, index)=>{
                console.log(typeof(data.image));

                return(
                    <div className={index===current ? 'slide active':'slide'} key={index}>
                        {index===current &&(<img src={data.image} alt="loading" className="image"/>)}
                        <div className="newFlex">
                        {index===current &&(<a href={data.link} target="_blank" rel="noreferrer"><button className="buttonbtnbtnbtn">{data.place}</button></a>)}
                        {/* */}
                        </div>
                    </div>
                ) 
            })}
        </div>
    )
}

export default Carousal
