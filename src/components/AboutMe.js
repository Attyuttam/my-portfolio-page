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
            Hi, I am Attyuttam Saha. I am currently working as a software engineer in a prestigious firm and I am pretty happy with my job.

            I mostly specialise in backend development and microservices design using spring and springboot. Not only have i had the opportunity to work
            in the development of microservices from scratch but I also write tests for each of the microservices 
            and I have put myself into the habit of following Behavior Driven Development(BDD) using Cucumber for writing the tests.
            I have also had the opportunity to work following the Agile methodology of software development and have experienced the benefits it provides to the
            developer immensely. Not only on microservice development but I also work on the build pipeline using Jenkins.
            Apart from the DevOps and backend development flow, I also work on OracleSQL for the data grooming and have also worked on concepts like temporal tables.

            I take special interest in design principles and patterns to strengthen my core concepts of microservice development.
            I am basically a backend developer but I also work on front end for some projects and I use ReactJS to do that, I have experience with React-Redux and Saga
            along with a fair share of react bootstrap.

            I also have knowledge about Python, C++, Basics of Groovy, PyTorch and security concepts like Kerberos etc. Check out my skillset section for more details.
            In my free time, I like to play the guitar, read books, binge anime and watch food vlogs 😃
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
