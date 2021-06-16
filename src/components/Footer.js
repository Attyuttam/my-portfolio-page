import React from "react";
import logo from "../logo_with_name_footer.png";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <img src={logo} alt="logo" className="footer-logo" />
            </div>
            <div style={{marginLeft:"6%"}}>
              <p style={{ color: "#ffffff" }}>
                keyboardinflames@gmail.com
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav" href="#">
                  Home
                </a>
                <br />
                <a className="footer-nav" href="#">
                  About
                </a>
                <br />
                <a className="footer-nav" href="#">
                  Skillsets
                </a>
              </div>
              <div className="col">
                <a className="footer-nav" href="#">
                  Experience
                </a>
                <br />
                <a className="footer-nav" href="#">
                  Portfolio
                </a>
                <br />
                <a className="footer-nav" href="#">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://attyuttam.github.io/my-portfolio-page/"}
                quote={"The coolest full stack developer ever!"}
                hashtag="#fullstackdeveloper"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://attyuttam.github.io/my-portfolio-page/"}
                quote={"The coolest full stack developer ever!"}
                hashtag="#fullstackdeveloper"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton
                url={"https://attyuttam.github.io/my-portfolio-page/"}
                quote={"The coolest full stack developer ever!"}
                hashtag="#fullstackdeveloper"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton
                url={"https://attyuttam.github.io/my-portfolio-page/"}
                quote={"The coolest full stack developer ever!"}
                hashtag="#fullstackdeveloper"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://attyuttam.github.io/my-portfolio-page/"}
                quote={"The coolest full stack developer ever!"}
                hashtag="#fullstackdeveloper"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyrights&copy;
              {new Date().getFullYear()}&nbsp;Attyuttam Saha | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
