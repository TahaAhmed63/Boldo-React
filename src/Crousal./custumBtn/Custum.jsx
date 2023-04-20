import React from 'react'
import "../style.css"
import arrow1 from "./../../assets/Group 232.png";
import arrow2 from "./../../assets/Group 233.png";

export const Custum = ({ next, previous, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
  <>
   <div className="carousel-arrows">
        <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} ><img src={arrow2} alt="left arrow"/></button>
        <button className={currentSlide > 9 ? 'disable' : ''}  onClick={() => next()} ><img src={arrow1} alt="right arrow"/></button>
      </div>   
  
  </>
  )
}
