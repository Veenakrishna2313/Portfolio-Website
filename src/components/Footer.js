import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope,faFile } from '@fortawesome/fontawesome-free-solid';
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Resume from "./assets/Veena Krishna Resume.pdf"


const Footer = () => {
  return (
    <div id="contact" className="footer container-fluid text-center">
      <h1 className="py-5 heading">Lets Connect! </h1>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="boxes">
            <div className="circles">
              <a
                href="https://github.com/Veenakrishna2313"
                title="Github"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  size="3x"
                  color="white"
                  icon={faGithub}
                />
              </a>
            </div>
            <div className="circles">
              <a
                href="https://www.linkedin.com/in/veenaks/"
                title="LinkedIn"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  size="3x"
                  color="white"
                  icon={faLinkedin}
                />
              </a>
            </div>
            <div className="circles">
              <a
                href="mailto:veenakrishna.s@gmail.com"
                title="Email"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="icon"
                  size="3x"
                  color="white"
                  icon={faEnvelope}
                />
              </a>
            </div>
            <div className="circles">
              <a href={Resume} title="Resume" target="_blank">
                <FontAwesomeIcon
                  className="icon"
                  size="3x"
                  color="white"
                  icon={faFile}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <p className="pt-3 text-center">Copyright&copy; {new Date().getFullYear()}&nbsp;Veena Krishna | All Rights Reserved</p>
    </div>
  );
}
 
export default Footer;