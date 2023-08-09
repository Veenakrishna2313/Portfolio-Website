import React from 'react';
import studentProfiles from "./assets/Projects/Student profiles.png";
import tvshow from "./assets/Projects/TV show app.png";
import crypto from "./assets/Projects/crypto tracker.png"
import picsome from "./assets/Projects/picsome.png"
import travel from "./assets/Projects/travel journal.png";
import cloudify from "./assets/Projects/cloudify.png";
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
            alt="Student Profiles.."
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
            alt="Crypto tracking...."
          />
          <p>
            An interactive cryptocurrency tracking app created with React Hooks,
            Material UI, and Chart UI. The user-friendly interface empowers
            users to efficiently monitor cryptocurrency data and stay informed
            about market trends.
          </p>
          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/crypto-tracker"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>

          <a
            target="_blank"
            href="https://trackcryptocurrencies.netlify.app/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
          </a>

          <div className="overflow"></div>
        </div>

        <div className="portfolio-image-box col ">
          <img
            className="portfolio-image"
            src={picsome}
            alt="Photo Gallery app.."
          />
          <p>
            A responsive photo gallery app utilizing Vite, React hooks, and
            Context API. This dynamic app enables users to like, bookmark, and
            add photos to the cart, providing an interactive and engaging photo
            browsing experience.
          </p>
          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/Pic-Some"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>

          <a
            target="_blank"
            href="https://the-pic-some.netlify.app/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
          </a>

          <div className="overflow"></div>
        </div>
        <div className="portfolio-image-box col ">
          <img
            className="portfolio-image"
            src={cloudify}
            alt="Cloud hosting..."
          />
          <p>
            Cloud hosting website, leveraging HTML, CSS, and JavaScript. The
            website showcases a seamless integration of these technologies,
            providing a user-friendly interface and an engaging user experience.
          </p>
          <a
            target="_blank"
            href="https://github.com/Veenakrishna2313/Cloudify"
            className="button btn btn-warning btn-sm "
          >
            Browse Code
          </a>

          <a
            target="_blank"
            href="https://hosting-on-cloud.netlify.app/"
            className="button btn btn-warning btn-sm "
          >
            See It Live
          </a>

          <div className="overflow"></div>
        </div>
        <div className="portfolio-image-box col">
          <img
            className="portfolio-image"
            src={instadev}
            alt="Photo sharing app for women developers..."
          />
          <p>
            Photo-sharing full stack web app similar to Instagram, managing UI
            design, user features, and SCRUM leadership, utilizing React, Redux,
            NodeJS, MongoDB, and Heroku, achieving robustness and agile
            delivery.
          </p>

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
          <img className="portfolio-image" src={tvshow} alt="TV show guide" />
          <p>
            A dynamic web app using Angular, TypeScript, and Node.js,
            integrating TVMaze APIs, offering users effortless TV show
            exploration via genre, cast, and schedule filters with an appealing
            Angular Material Design interface.
          </p>

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
          <p>
            A grocery list manager using Angular, styled with CSS, and deployed
            the application on GitHub Pages for easy access and management of
            shopping lists.
          </p>
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
          <img className="portfolio-image" src={tvshow} alt="TV shows app" />
          <p>
            A user-friendly web app using Angular, Angular Material Design, and
            NodeJS, enabling users to explore TV show details based on genres,
            cast, and schedules through integration with TVMaze.com API
          </p>
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

        <div className="portfolio-image-box col">
          <img
            className="portfolio-image"
            src={musicplayer}
            alt="Music Player"
          />
          <p>
            A dynamic music player app with captivating animations using HTML,
            CSS, and JavaScript, featuring synchronized pulse animations,
            play/pause controls, and responsive playback for enhanced user
            engagement across devices.
          </p>
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