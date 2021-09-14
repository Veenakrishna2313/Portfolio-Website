import React, { Component } from 'react';
import tvshow from "./assets/Projects/TV show app.png";
import grocery from "./assets/Projects/grocery list Manager.png";
import instadev from "./assets/Projects/InstaDev.png";
import musicplayer from "./assets/Projects/musicplayer.png";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box col">
            <img
              className="portfolio-image"
              src={tvshow}
              alt="TV guide project..."
            />
            <div className="overflow"></div>
          </div>
          {/** */}

          <div className="portfolio-image-box col">
            <img
              className="portfolio-image"
              src={instadev}
              alt="Photo sharing app for women developers..."
            />
            <div className="overflow"></div>
          </div>

          {/** */}

          <div className="portfolio-image-box col">
            <img
              className="portfolio-image"
              src={grocery}
              alt="Grocery List Manager Project"
            />
            <div className="overflow"></div>
          </div>
          {/** */}

          <div className="portfolio-image-box col">
            <img
              className="portfolio-image"
              src={musicplayer}
              alt="Music Player"
            />
            <div className="overflow"></div>
          </div>

          <div className="portfolio-image-box col">
            <img className="portfolio-image" src={grocery} alt="Movie Rental" />
            <div className="overflow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Portfolio;