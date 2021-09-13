import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faCode,
  faDatabase,
  faCloud,
  faEllipsisH,
} from "@fortawesome/fontawesome-free-solid";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="Skills">
      <h1 className="py-5"> Skills </h1>
      <div className="container">
        <div className="row">
          <div className="col=md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} />
              </div>

              <h3>Front End</h3>
            </div>
          </div>
          {/* */}
          <div className="col=md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCode} />
              </div>

              <h3>Back End</h3>
            </div>
          </div>
          {/* */}
          <div className="col=md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDatabase} />
              </div>

              <h3>Data Bases </h3>
            </div>
          </div>
          {/* */}
          <div className="col=md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </div>

              <h3>Source Control & Platforms</h3>
            </div>
          </div>
          {/* */}
          <div className="col=md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCloud} />
              </div>

              <h3>Deployment, Testing & Debugging</h3>
            </div>
          </div>
          {/* */}
          <div className="col=md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faEllipsisH} />
              </div>

              <h3>Other</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
