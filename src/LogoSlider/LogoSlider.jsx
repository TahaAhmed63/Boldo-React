import React from 'react';
import mylogo1 from "../assets/Logo Shape (1).png"
import mylogo2 from "../assets/noun_Pie Chart_4196192 1.png"


const logos = [
  {
    id: 1,
    logo: mylogo1,
    name: 'Boldo',
  },
  {
    id: 2,
    logo: mylogo2,
    name: 'Presto',
  },
  {
    id: 3,
    logo: mylogo1,
    name: 'Boldo',
  },
  {
    id: 4,
    logo: mylogo2,
    name: 'Presto',
  },
  {
    id: 5,
    logo: mylogo1,
    name: 'Boldo',
  },
  {
    id: 6,
    logo: mylogo2,
    name: 'Presto',
  },
];

const LogoSlide = () => {
  return (

    <div className="container">
      <div className="row ">
        <div className="logo-slide mt-5">
          {logos.map((logo) => (
            <div key={logo.id} className="col col-sm-1">
              <div className="logo-wrap">
                <img src={logo.logo} alt="" />
                <h6>{logo.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlide;
