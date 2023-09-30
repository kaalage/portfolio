import React from 'react';
import BannerBackground from "../Assets/home-background.png";
import BannerImage from "../Assets/home-image.png";
import Navbar from './Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='home-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt="" />
        </div>
      <div className='home-banner-container'>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Hi, I am Karina Lage<br></br>
            A Full Stack Developer<br></br>
            based in Florianópolis.
          </h1>
          <button className="primary-button">
            LET'S GET STARTED
          </button>
        </div>
          <div className="home-image-section">
          <img src={BannerImage} alt="" />
            </div>
      </div>
      </div>
    </div>
  );
};

export default Home;