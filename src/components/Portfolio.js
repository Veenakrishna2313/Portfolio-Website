import React, { Component } from 'react';
import studentProfiles from "./assets/Projects/Student profiles.png";
import tvshow from "./assets/Projects/TV show app.png";
import crypto from "./assets/Projects/crypto tracker.png"
import grocery from "./assets/Projects/grocery list Manager.png";
import instadev from "./assets/Projects/InstaDev.png";
import musicplayer from "./assets/Projects/musicplayer.png";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h1 className="text-uppercase text-center py-5">Portfolio</h1>
      <div className="image-box-wrapper row justify-content-center">
        <div className="portfolio-image-box col">
          <img
            className="portfolio-image"
            src={studentProfiles}
            alt="Grocery List Manager Project"
          />
          <p className="portfolio-text">
            A user-friendly, responsive front-end application built with React,
            react hooks, and Bootstrap that efficiently showcases student
            profiles using the Hatchways API. The app allows users to add tags,
            search by name, and filter through tags for a seamless exploration
            experience.
          </p>
          <a
            target="_blank"
            href="https://studentprofilelist.herokuapp.com/"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>
          <a
            target="_blank"
            href="https://studentprofilesearch.netlify.app/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
          </a>

          <div className="overflow"></div>
        </div>

        <div className="portfolio-image-box col ">
          <img
            className="portfolio-image"
            src={crypto}
            alt="TV guide project..."
          />
          <p>
            An interactive cryptocurrency tracking app created with React Hooks,
            Material UI, and Chart UI. The user-friendly interface empowers
            users to efficiently monitor cryptocurrency data and stay informed
            about market trends.
          </p>
          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/TVshows-App"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>

          <div className="overflow"></div>
        </div>
        <div className="portfolio-image-box col">
          <img
            className="portfolio-image"
            src={instadev}
            alt="Photo sharing app for women developers..."
          />
          <p>React, Redux, NodeJS, MongoDB, Postman, Heroku. </p>

          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/InstaDev-G"
            className="button button btn btn-warning btn-sm "
          >
            Browse Code
          </a>

          <div className="overflow"></div>
        </div>
        <div className="portfolio-image-box col">
          <img
            className="portfolio-image"
            src={grocery}
            alt="Grocery List Manager Project"
          />
          <p>Angular framework, CSS Bootstrap, Github Pages</p>
          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/Grocery-list-manager"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>
          <a
            target="_blank"
            href="https://veenakrishna2313.github.io/Grocery-list-manager/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
          </a>

          <div className="overflow"></div>
        </div>
        <div className="portfolio-image-box col">
          <img
            className="portfolio-image"
            src={musicplayer}
            alt="Music Player"
          />
          <p>Html, CSS, Javascript and Github Pages</p>
          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/Music-Player"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>
          <a
            target="_blank"
            href="https://veenakrishna2313.github.io/Music-Player/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
          </a>

          <div className="overflow"></div>
        </div>
      </div>
    </div>
  );
}
 
export default Portfolio;