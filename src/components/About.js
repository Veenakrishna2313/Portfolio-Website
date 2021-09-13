import React, { Component } from 'react';
import author from './assets/headshot.jpg'

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me </h1>
          <p>
            I'm Veena Krishna, a Full Stack Engineer based near Seattle, WA. I
            wake up excited to solve problems. I believe in the power of
            programming to change the world for the better by helping people
            achieve more. I enjoy building intuitive products that solve
            real-world needs. I am a computer science engineer with hands on
            experience in full stack web development in technologies such as
            NodeJS, Angular, React, Express and MongoDB. I have 5+ years of work
            experience in various roles with strong organizational skills,
            effective communication and interpersonal skills, I thrive on
            challenges whether it is learning a new skill / competency or
            solving a business problem. I am also currently a web developer at
            The Informed Voter Project. If I'm not coding, I am probably
            designing interiors, wood working or travelling.
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default About;