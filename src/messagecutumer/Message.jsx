import React from 'react'
import "./style.css"
import Accordion from './Accordion'

export const Message = () => {
  return (
  <>
  <div className="container-fluid message">
<div className="container">
    <div className="msg-bg">
        <div className="msg-img">

        </div>
       <div className="msg-wrap">
                <div className="head-wrap">
             <p>We connect our customers with the best, and help them keep up-and stay open.</p>

                </div>
                <div className="acordoin-wrap">
                <div className="accordion">
                <Accordion
          title="We connect our customers with the best?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        <Accordion
          title="Android research & development rockstar? "
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
        />
        </div>

        </div>

            </div>
         
    
</div>
</div>
  </div>
  
  </>
  )
}
