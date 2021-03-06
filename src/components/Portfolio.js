import React, { Component } from 'react';
import studentProfiles from "./assets/Projects/Student profiles.png";
import tvshow from "./assets/Projects/TV show app.png";
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
          <p>React, React Hooks, Axios, Bootstrap, Heroku</p>
          <a
            target="_blank"
            href="https://studentprofilelist.herokuapp.com/"
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

        <div className="portfolio-image-box col ">
          <img
            className="portfolio-image"
            src={tvshow}
            alt="TV guide project..."
          />
          <p>
            Angular, Angular material design, Typescript, NodeJS, REST, Json,
            Angular Routing & mapping.
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
          <a
            target="_blank"
            href="https://pacific-island-78597.herokuapp.com/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
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
          <p>Html, css, Javascript and Github Pages</p>
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