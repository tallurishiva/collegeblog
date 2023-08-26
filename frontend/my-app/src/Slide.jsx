import React from 'react';
//import image from "./WhatsApp Image 2023-06-30 at 22.54.22.jpg";
import news from "./absolutvision-WYd_PkCa1BY-unsplash.jpg";
import stories from "./naassom-azevedo-AcWC8WuCQ_k-unsplash.jpg";
import ideas from "./absolutvision-82TpEld0_e4-unsplash.jpg";
import './slide.css';
const Slide = () => {
  return (
    <div className='cont'>
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={stories} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>share your college stories</h5>
            <p>College days are like chapters in a book. Each chapter holds its unique memories, friendships, and lessons</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={ideas} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Share your ideas</h5>
            <p>Sharing ideas is like planting seeds of inspiration. As they take root in the minds of others, they grow and blossom, shaping a world filled with innovation and creativity.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={news} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Know whats Happening</h5>
            <p>News is the compass that guides us through the complexities of our world. Informed and aware, we navigate the tides of change, seeking truth amidst the waves of information</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>
  );
};

export default Slide;
