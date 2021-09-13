import React, { Component } from 'react'

const Experience = () => {
  return (
    <div className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>April 2021-Present</h3>
            <h6>
              Volunteer Web Application Developer|
              <i> The Informed Voter Project</i>
            </h6>
            <p>
              • Developing a web application to increase the voter registration,
              participation & voting in local elections to bring about systemic
              changes for voters in their own community.
            </p>
            <p>
              • Developing the front end using React, React Hooks, Routers.
              Election candidate’s data is retrieved from Google FireStore
              database.
            </p>
            <p>
              • Developed a Scrolly telling narrative using React-Scrollama,
              lightweight interface for scrollytelling in React which uses
              IntersectionObserver instead of scroll events.
            </p>
          </div>
        </div>
        {/* */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018 - Present</h3>
            <h6>
              Project Estimator / Assistant Project Manager |
              <i> Kinship Group</i>
            </h6>
            <p>
              • Lead project estimator for the PNW region, responsible for
              projects ranging from $50,000 to $1,000,000. Successfully
              completed multiple project bids by collaborating with
              cross-functional teams such as general contractors, architects,
              manufacturers, and logistics.
            </p>
            <p>
              • Increased the bidding accuracy by 35% by implementing business
              process improvements.
            </p>
            <p>
              • Increased MOM sales by 25% by organizing product training
              programs and improving documentation
            </p>
          </div>
        </div>
        {/* */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017-2018</h3>
            <h6>
              Program Operations Coordinator|
              <i> Somali Family Safety Task Force</i>
            </h6>
            <p>
              • Co-managed the ‘Run for Change’ program, a mentor-mentee program
              to empower Somali refugee immigrant youth.
            </p>
            <p>
              • Improved the effectiveness of the program by taking measurable
              action on feedback, resulting in a 93% overall satisfaction rating
              by mentors and youth in reaching their goals.
            </p>
          </div>
        </div>
        {/* */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <h6>
              Assistant Manager, Business Development|
              <i> SnapDeal.com </i>
            </h6>
            <p>
              • Developed unique customer acquisition and relationship
              strategies to grow new marketplace sellers leading to On-boarding
              350 new sellers that led to 10% increase YoY.
            </p>
          </div>
        </div>
        {/* */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <h6>
              Account Manager, Business Development |<i> Coca-Cola </i>
            </h6>
            <p>
              • Expanded into 8 new markets, contributing to $460K revenue
              increase.</p>
              <p> • Helped Coca-Cola achieve “First Mover advantage” by
              optimizing the sales and distribution plans to meet customer
              demand in the shortest time.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
 
export default Experience;