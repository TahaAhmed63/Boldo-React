import React from 'react'
import "./style.css"
import Navbar from '../Navbar/Navbar'
import myimg2 from "../assets/Group 256.png"
import myimg3 from "../assets/Group 208.png"
import myimg4 from "../assets/Group 264.png"
import LogoSlide from '../LogoSlider/LogoSlider'
import eclipse from '../assets/Ellipse 9.png'

 const Banner = () => {
  return (
   <>
   <div className="banner-background">
    <div className="overlay-img">
      <img src={eclipse} alt="" />
    </div>
<Navbar/>
<div className="container-fluid d-flex justify-content-space-between w-100">
  <div className="container mt-5 ">
    <div className="banner-content-wrap">
          <div className="content-wrap-head">
            <div className="content-head mt-5">
<h1>Save time by building  fast with Boldo Template </h1>
            </div>
<div className="content-para">
  <p>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.</p>
</div>
<div className="content-btn-wrap">
  <div className="btn-1">
   <button className="btn-p">Buy template</button>
  </div>
  <div className="btn-2">
    <butoon className="btn-e">
    Explore
    </butoon>
  </div>
</div>
          </div>
          <div className="container">
            <div className="bannerimages">
          <div className="content-wrap-img">
            <div className="img-1">
              <img src={myimg2} alt="" />
            </div>


          </div>
          <div className="row mt-3">
            <div className="col-md-5">

            <div className="ban-img">
            <img src={myimg3} alt="" />
            </div>
            </div>
            <div className="col">
              <div className="img-4">
       <img src={myimg4} alt="" />
       </div>
       </div>
            </div>

          </div>
       
          </div>
 
    </div>
  
  </div>


</div>
<LogoSlide/>
   </div>
   
   </>
  )
}
export default Banner