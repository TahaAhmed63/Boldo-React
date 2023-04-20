import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avater1 from "./../assets/Ellipse 4 (1).png";
import avater2 from "./../assets/Ellipse 4.png";
import avater3 from "./../assets/Ellipse 4 (2).png";
import "./style.css";

import { Custum } from './custumBtn/Custum';
export const TestimonialCarousel = () => {

  // array of testimonials data
  const testimonialData = [
    {
      id: 1,
      name: "Albus Dumbledore",
      img: avater1,
      email: "Manager @ Howarts",
      feedback: "“Buyer buzz partner network disruptive non-disclosure agreement business”"
    },
    {
      id: 2,
      name: "Severus Snape",
      email: "Manager @ Howarts",
      img: avater2,
      feedback: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
    },
    {
      id: 3,
      name: "Harry Potter",
      img: avater3,
      email: "Team Leader @ Gryffindor",
      feedback: "Release facebook responsive web design business model canvas seed money monetization."
    },
    {
      id: 4,
      name: "Albus Dumbledore",
      img: avater1,
      email: "Manager @ Howarts",
      feedback: "“Buyer buzz partner network disruptive non-disclosure agreement business”"
    },
    {
      id: 5,
      name: "Severus Snape",
      email: "Manager @ Howarts",
      img: avater2,
      feedback: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
    },
    {
      id: 6,
      name: "Harry Potter",
      img: avater3,
      email: "Team Leader @ Gryffindor",
      feedback: "Release facebook responsive web design business model canvas seed money monetization."
    }
  ];

  // responsive breakpoints for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  <Custum/>
  // state for the selected testimonial index

  return (
    <>



      <Carousel
        responsive={responsive}
        showDots={false}
        itemClass=""
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<Custum/>}



        
      >
    
    <div className="card-wraper">
              <div className="card">
             <div className="card-para">
          <p>{testimonialData[0].feedback}</p>
              
              </div>
              <div className="profile-wrap">
              <div className="icon-img">
                <img src={testimonialData[0].img} alt="" />

              </div>
              <div className="profile-para">
                   <h6>{testimonialData[0].name}</h6>
                   <p>{testimonialData[0].email}</p>
              </div>
              </div>
             </div>
             
            </div>
            <div className="card-wraper">
              <div className="card">
             <div className="card-para2">
          <p>{testimonialData[1].feedback}</p>
              
              </div>
              <div className="profile-wrap">
              <div className="icon-img">
                    <img src={testimonialData[1].img} alt="" />
              </div>
              <div className="profile-para">
              <h6>{testimonialData[1].name}</h6>
                   <p>{testimonialData[1].email}</p>
                </div>
              </div>
             </div>
             
            </div>
            <div className="card-wraper">
              <div className="card">
             <div className="card-para">
          <p>{testimonialData[2].feedback}</p>
              
              </div>
              <div className="profile-wrap">
              <div className="icon-img">
              <img src={testimonialData[2].img} alt="" />


              </div>
              <div className="profile-para">
              <h6>{testimonialData[2].name}</h6>
                   <p>{testimonialData[2].email}</p>
                </div>
              </div>
             </div>
             
            </div>
            <div className="card-wraper">
              <div className="card">
             <div className="card-para">
          <p>{testimonialData[3].feedback}</p>
              
              </div>
              <div className="profile-wrap">
              <div className="icon-img">
              <img src={testimonialData[3].img} alt="" />

              </div>
              <div className="profile-para">
              <h6>{testimonialData[3].name}</h6>
                   <p>{testimonialData[3].email}</p>
                </div>
              </div>
             </div>
             </div>
             
           <div className="card-wraper">
              <div className="card">
             <div className="card-para2">
          <p>{testimonialData[4].feedback}</p>
              
              </div>
              <div className="profile-wrap">
              <div className="icon-img">
              <img src={testimonialData[4].img} alt="" />

              </div>
              <div className="profile-para">
              <h6>{testimonialData[4].name}</h6>
                   <p>{testimonialData[4].email}</p>
                </div>
              </div>
             </div>
             
            </div>
               <div className="card-wraper">
              <div className="card">
             <div className="card-para2">
          <p>{testimonialData[5].feedback}</p>
              
              </div>
              <div className="profile-wrap">
              <div className="icon-img">
              <img src={testimonialData[5].img} alt="" />

              </div>
              <div className="profile-para">
              <h6>{testimonialData[5].name}</h6>
                   <p>{testimonialData[5].email}</p>
              </div>
              </div>
             </div>
             
            </div>   
 



      </Carousel>
   
    </>
  );
};







