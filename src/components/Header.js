import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
export const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>Hi, I am Attyuttam Saha</h1>
        <Typed
          className="typed-text"
          strings={[
            "Software Engineer",
            "Web Developer",
            "ML/AI Enthusiast",
            "Avid Book Reader",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <Link
          smooth={true}
          to="contacts"
          offset={-87}
          className="btn-main-offer"
          href="#"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};
export default Header;
