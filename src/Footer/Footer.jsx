import React from 'react'
import logo from './../assets/Logo Shape (3).png'
import "./Style.css"
export const Footer = () => {
  return (
 <>
 <div className="container-fluid footer mt-5">
    
    <div className="container">
        <div className="footer-wrap">
        <div className="footer-info">
<div className="logo-wrap">
    <img src={logo} alt="" />
    <h6>Boldo</h6>
</div>
<div className="footer-para">
    <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
</div>
<div className="foot-credit">
    <p>All rights reserved.</p>
</div>
        </div>
<div className="footer-landings">
    <div className="footerlanding-details">
        <h6 className='active'>Landings</h6>
        <h6>Home


</h6>
        <h6>Products</h6>
        <h6>Services</h6>
    </div>
</div>
<div className="footer-landings">
    <div className="footerlanding-details">
        <h6 className='active'>Company</h6>
        <h6>Home


</h6>
        <h6>Careers</h6>
        <h6>Services</h6>
    </div>
</div>
<div className="footer-landings">
    <div className="footerlanding-details">
        <h6 className='active'>Resources</h6>
        <h6>Blog


</h6>
        <h6>Products</h6>
        <h6>Services</h6>
    </div>
</div>
    </div>
 </div>
 
 </div>
 </>
  )
}
