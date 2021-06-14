import React from "react";
import logo from "../logo_with_name.png";

//REACT SCROLL IMPORTS
import {Link} from "react-scroll";

//REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true} to="home" offset={-87} className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="navbar-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{borderColor:"#fff" }}
        >
         <FontAwesomeIcon icon={faBars} style={{ color:"#fff"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" offset={-87} className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="about" offset={-87} className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="skillsets" offset={-87} className="nav-link" href="#">
                Skillset
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="experience" offset={-87} className="nav-link" href="#">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="portfolio" offset={-87} className="nav-link" href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="contacts" offset={-87} className="nav-link" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
