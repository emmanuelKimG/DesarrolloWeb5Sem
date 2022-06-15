import '../css/SliderCard.css'
import React from 'react'
import { SliderData } from "./SliderData"
import {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa' 


const SliderCard = () =>{
    const [currentImg, setCurrentImg] = useState(0)
    const length = SliderData.length

    const nextSlide = () => {
        setCurrentImg(currentImg === length -1? 0 : currentImg+1)
    }

    const prevSlide =()=>{
        setCurrentImg(currentImg === 0 ? length -1 : currentImg -1)
    }
    
    if(!Array.isArray(SliderData) || length <= 0)
        return null
    

    return(
       <div className="slider">
           <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
           <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
           {SliderData.map((slide, index) =>{
               return(
                   <div className={index === currentImg? 'slide active' : 'slide'}
                   key={index}>
                       {index ===currentImg && (<img src={slide.image} alt="Slider img" height='250px' width='400px'/>)}        
                   </div>
               )
                
               
           })}
       </div>
    )
}

export default SliderCard