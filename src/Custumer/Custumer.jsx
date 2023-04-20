import React from 'react'
import myimg4 from "./../assets/profile1.png"
import "./style.css"
import myimg2 from "./../assets/Group 209 (1).png"
import check from "./../assets/Group 210.png"
import leave from  "./../assets/star.png"
import sun from "./../assets/sun.png"
import eye from "./../assets/eye.png"
import stats from "./../assets/Group 222.png"


export const Custumer = () => {
  return (
<>
<div className="cantainer-fluid custumer">
    <div className="container">
        <div className="row">
        <div className="custumer-wrap ">
       <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="review-img">
             <div className="stats">
                <img src={myimg2} alt="" />
             </div>
                </div>

        </div>
   <div className="col-md-6 col-sm-12 col-lg-6">
            <div className="container">
                <div className="review-content">
                    <div className="review-discription mt-5">
                        <h6>We connect our customers with the best, and help them keep up-and stay open.</h6>
                        <div className="review-list">
                    
                            <li>
                                <div className="li-img">
                                <img src={check} alt="" />We connect our customers with the best.
                                </div>
                                </li>
                            <li>
                                
                                <div className="li-img">
                                <img src={check} alt="" />
                             
                                Advisor success customer launch party.
                                </div>
                                </li>

                             
                            <li>
                            <div className="li-img">
                                
                                <img src={check} alt="" />Business-to-consumer long tail.
                                </div>
                                </li>

                        
                    </div>
                    <div className="disc-btn">
                 <button>Start now</button>
                 </div>
                    </div>
               

                </div>
            </div>
        </div> 

        </div>
        </div>
        

    </div>
    <div className="container">
        <div className="row mt-5">
        <div className="custumer-wrap">
        
   <div className="col-md-6 col-sm-12 col-lg-6">
        <div className="container">
                <div className="review-content">
                    <div className="review-discription2">
                        <h6>We connect our customers with the best, and help them keep up-and stay open.</h6>
                        <div className="review-list">
                        <li>
                        
                                <div className="li-img2">
                                <img src={leave} alt="" />We connect our customers with the best.
                                </div>
                                
                                </li>
                                <li>

                                <div className="li-img3">
                                <img src={eye} alt="" />Advisor success customer launch party.
                                </div>
                                
                                </li>
                                <li>
                                <div className="li-img3    ">
                                <img src={sun} alt="" />Business-to-consumer long tail.
                                </div>
                                </li>
                         
                        </div>
                        </div>
                
                        </div>
                        </div>


        </div> 
      <div className="col-md-6 col-sm-12 col-lg-6">
            <div className="review-img-2">
                <div className="stats2">
                    <img src={stats} alt="" />
                </div>

            </div>
        </div> 

        </div>
        </div>
    </div>
</div>

</>
  )
}
