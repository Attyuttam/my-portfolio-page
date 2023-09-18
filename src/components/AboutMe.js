import React from "react";
import author from "../propic.png";
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
          <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hi, I am Attyuttam Saha. I am currently working as an associate software developer in Goldman Sachs.

            I am an adaptable back end developer with a strong track record in creating efficient, scalable web applications. 
			I am proficient in Java and Spring Boot, with a deep understanding of RESTful APIs and microservices architecture.
			
			In my day to day work, I also work with tools like ReactJS, React-Redux, Redux-Saga for front end development and Cucumber, Junit etc for testing and am also proficient in working with relational databases like Oracle and Sybase.
			
            I am also experienced in the Agile methodology of software development.

            I take special interest in design principles and patterns to strengthen my core concepts of microservice development. 
            
            In my free time, I like to play the guitar, read books, binge anime and watch food vlogs 😃
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
