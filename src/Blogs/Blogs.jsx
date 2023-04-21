import React from 'react'
import "./style.css"
import avt1 from './../assets/Ellipse 10.png'
import avt2 from './../assets/Ellipse 10 (1).png'
import avt3 from './../assets/Ellipse 10 (2).png'
import ban1 from './../assets/Rectangle 1270.png'
import ban2 from './../assets/Rectangle 1270 (5).png'
import ban3 from './../assets/Rectangle 1270 (6).png'
import eclipse from '../assets/Ellipse 9.png'

 const Blogs = () => {
    const cardDetails = [
        {
          title: 'Category',
          data:"November 22, 2021",
          Banner:ban1,


          description:
            'Pitch termsheet backing validation focus release.',
            avaterimg:avt1,
            avaterName:"Chandler Bing",

        },
        {
          title: 'Category',
          data:"November 22, 2021",
          Banner:ban2,
          description:
            'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            avaterimg:avt2,
            avaterName:"Chandler Bing",
        },
        {
          title: 'Category',
          data:"November 22, 2021",
          Banner:ban3,
          description:
            'Beta prototype sales iPad gen-z marketing network effects value proposition',
            avaterimg:avt3,
            avaterName:"Monica Geller",
        },
      ];
  return (
 <>
  <div className="container-fluid Blogs">
      <div className="container">
        <div className="Blogs-wrap">
          <div className="Blogs-head">
            <h6>Our Blog</h6>
          </div>
          <div className="Blogs-header">
            <h2>
            Value proposition accelerator product management venture           
             </h2>
          </div>
        </div>
        <div className="Blog-card-wrap row">
        {cardDetails.map((card, index) => (
   <div className="col-md-4 col-sm-12 col-lg-3" key={index}>
<div className="blog-wrap">
  <div className="card-bannner">
<img src={card.Banner} alt="" />
  </div>
  <div className="blog-details">
    <div className="blog-head-para">
    <div className="blog-header">
      <div className="blog-heading">
        <h6>{card.title}</h6>
      </div>
      <div className="blog-date">
        <p>{card.data}</p>
      </div>
      </div>
<div className="card-para">
  <p>{card.description}</p>
</div>
<div className="author-detail">
  <div className="author-img">
    <img src={card.avaterimg} alt="" />
  </div>
  <div className="author-name">
    <h6>{card.avaterName}</h6>
  </div>
</div>
    </div>

  </div>


</div>

 </div>
 ))}
 <div className="btn-blog">
  <button>Load more</button>
 </div>
 <div className="email-section">
  <div className="overlayimage">  
  <img src={eclipse} alt="" />
  </div>
<div className="email-header">
  <h6>An enterprise template to ramp up your company website</h6>
</div>
<div className="email-fields">
  <input type="email" placeholder='your email address' name="" id="" />
  <div className="btn-email">
    <button>Start now</button>
  </div>
</div>

 </div>  
        </div>
        </div>
        </div>
 
 </>
  )
}
export default Blogs