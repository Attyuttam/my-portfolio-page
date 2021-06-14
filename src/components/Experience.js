import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience and career timeline</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2013-2016</h3>
            <p>
              Bachelors in Science with Major in Computer Science from Ramakrishna Mission Residential College, Narendrapur 
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016-2019</h3>
            <p>
              Masters in Computer Application from National Institute of Technology Warangal.
              Had also done my internship at JP Morgan Chase & Co. in 2018 for 2 months. 
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019-Present</h3>
            <p>
              Full Stack software engineer (Web developer) in JP Morgan Chase & Co.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
