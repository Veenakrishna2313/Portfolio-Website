import React, { Component } from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>April 2021-June 2022</h3>
            <h6>
              Volunteer Web Application Developer|
              <i> The Informed Voter Project</i>
            </h6>
            <p>
              • Developed web application to increase the voter registration,
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
            <p>
              • Developed the Mission, About and Seattle pages, which displays
              information about Candidates for the November and December recall
              elections.
            </p>
          </div>
        </div>
        {/* */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021 - Present</h3>
            <h6>
              Assistant Project Manager |<i> Kinship Group</i>
            </h6>
            <p>
              • Successfully managed and coordinated 15 door, frame, and
              hardware supply and installation projects ranging from
              $100,000-$500,000 by ensuring smooth workflow and effective
              communication between various stakeholders.
            </p>
            <p>
              • Assisted in negotiating contracts with suppliers, creating
              comprehensive project timelines, schedules, budgets with the
              project managers, which resulted in cost savings of 10% on project
              materials without compromising quality.
            </p>
            <p>
              • Writing, reviewing, and pricing out RFI’s, change orders and
              submittal changes which ensure accurate documentation, assessing
              the impact of changes and effective communication among project
              stakeholders, resulting in a 30% decrease in errors and
              streamlining project reporting processes.
            </p>
            <p>
              • Preparing sales and purchase orders, ensuring the availability
              of required products, and coordinating delivery schedules to meet
              project timelines.
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018 - 2021</h3>
            <h6>
              Project Estimator |<i> Contract Hardware</i>
            </h6>
            <p>
              • Successfully completed multiple projects ranging from $50,000 to
              $2,000,000 by managing schedules and collaborating with
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

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017 - 2018</h3>
            <h6>
              Business Coordinator |<i> Tangible IP, LLC</i>
            </h6>
            <p>
              • • Managed multi-million-dollar intellectual property portfolios,
              review an average of ~30 patents a month and evaluate their
              potential for brokerage.
            </p>
            <p>
              • Built a responsive website using WordPress and managed it by
              adding new features and themes.
            </p>
            <p>
              • Managed the company newsletters using MailChimp: the
              newsletters were read by over 13,500 professionals in the IP,
              business, and investment community, my efforts in optimizing the
              subscribers led to an increase of readership by 10%, 20% increase
              in traffic on the website.
            </p>
            <p>
              • Managed Capsule CRM added customization in CRM for increased
              transparency between brokers, technical experts, and Tangible IP.
            </p>
          </div>
        </div>

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
              increase.
            </p>
            <p>
              {" "}
              • Helped Coca-Cola achieve “First Mover advantage” by optimizing
              the sales and distribution plans to meet customer demand in the
              shortest time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Experience;