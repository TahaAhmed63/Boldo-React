import React from 'react';
import './style.css';
import ArrowImg from '../assets/arrow-right.png';

const Services = () => {
  const cardDetails = [
    {
      title: 'Cool feature title',
      description:
        'Learning curve network effects return on investment.',
    },
    {
      title: 'Cool feature title',
      description:
        'Learning curve network effects return on investment.',
    },
    {
      title: 'Cool feature title',
      description:
        'Learning curve network effects return on investment.',
    },
  ];

  return (
    <div className="container-fluid services">
      <div className="container">
        <div className="service-wrap">
          <div className="services-head">
            <h6>Our Services</h6>
          </div>
          <div className="services-header">
            <h2>
              Handshake infographic mass market crowdfunding iteration.
            </h2>
          </div>
        </div>

        <div className="service-card-wrap row">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-12 col-lg-3"
            >
              <div className="cardbody"></div>

              <div className="card-content">
                <div className="card-detail mt-3">
                  <h6>{card.title}</h6>
                  <p>{card.description}</p>
                </div>

                <div className="card-btn">
                  <p>Explore page</p>

                  <div className="arrow">
                    <img src={ArrowImg} alt="" />
                  </div>
                </div>

                <div className="hr"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
