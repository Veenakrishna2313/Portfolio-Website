import React, { Component } from "react";
import {Link} from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link smooth={true} to="home" className="navbar-brand" href="#">
            VK
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-50}
                  to="home"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  offset={-50}
                  to="about"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="skills"
                  offset={-40}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  className="nav-link"
                  href="#"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="portfolio"
                  className="nav-link"
                  href="#"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link smooth={true} to="contact" className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
