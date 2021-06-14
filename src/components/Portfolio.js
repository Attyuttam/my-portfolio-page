import React from "react";
import algorithmicTradingImage from "../algo_trading.png";
import chatAppImage from "../chat_app.png";
import bankingApplicationImage from "../banking_application.png";
import calorieTrackerImage from "../calorie_tracker.png";
import facultyAssignerImage from "../android.png";
import gansImage from "../gans.png";
import classificationImage from "../classification.png";
import shooterImage from "../shooter.png";

//FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

//REACT POPUP BOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxShooter = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={shooterImage}
          alt="portfolio "
        />
        <p>
          This is a vanilla javascript project that uses neural network written
          in plain vanilla javascript to create the 90s shooter game where the
          ship is controlled by the neural network. I have also create a human
          playable version the link to which is availble below.
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Attyuttam/nn-rpg-shooter-game-javascript-vanilla",
              "_blank"
            )
          }
        >
          https://github.com/Attyuttam/nn-rpg-shooter-game-javascript-vanilla
        </a>
        <br/>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Attyuttam/rpg-shooter-game-javascript-vanilla",
              "_blank"
            )
          }
        >
          https://github.com/Attyuttam/rpg-shooter-game-javascript-vanilla (The
          human playable version)
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigShooter });
  };
  const popupboxConfigShooter = {
    titleBar: {
      enable: true,
      text: "RPG shooter game using vanilla javascript and neural network",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxClassification = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={classificationImage}
          alt="portfolio "
        />
        <p>
          This is a project that uses Neural Network to classify images from the
          CIFAR10 dataset. This project has been built with PyTorch and is in a
          juyter notebook.
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://jovian.ai/attyuttam/classifying-daily-objects-cnn",
              "_blank"
            )
          }
        >
          https://jovian.ai/attyuttam/classifying-daily-objects-cnn
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigClassification });
  };
  const popupboxConfigClassification = {
    titleBar: {
      enable: true,
      text: "Image Classification using Convolutional Neural Networks in PyTorch",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxGans = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={gansImage}
          alt="portfolio "
        />
        <p>
          This is a project that uses GANS to generate images of real people. As
          this is a starter project, the result looks good but this can be
          improvised. I have used PyTorch for this
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://jovian.ai/attyuttam/06b-real-faces-dcgan",
              "_blank"
            )
          }
        >
          https://jovian.ai/attyuttam/06b-real-faces-dcgan
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigGans });
  };
  const popupboxConfigGans = {
    titleBar: {
      enable: true,
      text: "Generate Real Faces using GANS",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxFacultyAssigner = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={facultyAssignerImage}
          alt="portfolio "
        />
        <p>
          This is an android app which uses the stable marriage algorithm to
          assign faculties the appropriate subject according to their
          preferences and weight in the department
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Attyuttam/FacultyAssignerApp",
              "_blank"
            )
          }
        >
          https://github.com/Attyuttam/FacultyAssignerApp
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigFacultyAssigner });
  };
  const popupboxConfigFacultyAssigner = {
    titleBar: {
      enable: true,
      text: "Faculty Assigner",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxAlgorithmicTrading = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={algorithmicTradingImage}
          alt="portfolio "
        />
        <p>
          This app has 3 components each of which uses a different strategy to
          buy shares considering that all shares are equal weight, its a very
          good project for people wanting to jump onto the basics of algorithmic
          trading
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Attyuttam/AlgorithmicTrading",
              "_blank"
            )
          }
        >
          https://github.com/Attyuttam/AlgorithmicTrading
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigAlgorithmicTrading });
  };
  const popupboxConfigAlgorithmicTrading = {
    titleBar: {
      enable: true,
      text: "Algorithmic Trading",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxBankingApplication = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={bankingApplicationImage}
          alt="project image"
        />
        <p>
          This app was created to learn react using flux instead of saga,
          although I have forgotten how to use flux but this project was fun
          where I also learn about integrating excel utilities
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Attyuttam/UBKGBankingApplication",
              "_blank"
            )
          }
        >
          https://github.com/Attyuttam/UBKGBankingApplication
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigBankingApplication });
  };
  const popupboxConfigBankingApplication = {
    titleBar: {
      enable: true,
      text: "Banking Application",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxChatApp = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={chatAppImage}
          alt="project image"
        />
        <p>
          This app uses socket.io primarily to create a simple chat application
          like whatsapp, messenger etc
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/Attyuttam/ChatApp", "_blank")
          }
        >
          https://github.com/Attyuttam/ChatApp
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigChatApp });
  };
  const popupboxConfigChatApp = {
    titleBar: {
      enable: true,
      text: "Chat App",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const openPopupboxCalorieTracker = () => {
    const content = (
      <div>
        <img
          className="portfolio-image-popupbox"
          src={calorieTrackerImage}
          alt="project image"
        />
        <p>
          This app uses the basics of react,redux,saga,bootstrap in the front
          end and springboot in the back end with a H2 database and lets the
          user login(which has been implemented using spring security) and add
          calories and also view others calories, this has a few issues and I
          need to fix them asap
        </p>
        <b>Github link</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/Attyuttam/calorie-tracker-app",
              "_blank"
            )
          }
        >
          https://github.com/Attyuttam/calorie-tracker-app
        </a>
      </div>
    );

    PopupboxManager.open({ content, config: popupboxConfigCalorieTracker });
  };
  const popupboxConfigCalorieTracker = {
    titleBar: {
      enable: true,
      text: "Calorie Tracker",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div
            className="portfolio-image-box"
            onClick={openPopupboxAlgorithmicTrading}
          >
            <img
              className="portfolio-image"
              src={algorithmicTradingImage}
              alt="portfolio"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div
            className="portfolio-image-box"
            onClick={openPopupboxBankingApplication}
          >
            <img
              className="portfolio-image"
              src={bankingApplicationImage}
              alt="portfolio"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxChatApp}>
            <img
              className="portfolio-image"
              src={chatAppImage}
              alt="portfolio "
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div
            className="portfolio-image-box"
            onClick={openPopupboxCalorieTracker}
          >
            <img
              className="portfolio-image"
              src={calorieTrackerImage}
              alt="portfolio "
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div
            className="portfolio-image-box"
            onClick={openPopupboxFacultyAssigner}
          >
            <img
              className="portfolio-image"
              src={facultyAssignerImage}
              alt="portfolio "
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxGans}>
            <img className="portfolio-image" src={gansImage} alt="portfolio " />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div
            className="portfolio-image-box"
            onClick={openPopupboxClassification}
          >
            <img
              className="portfolio-image"
              src={classificationImage}
              alt="portfolio "
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxShooter}>
            <img
              className="portfolio-image"
              src={shooterImage}
              alt="portfolio "
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        <div className="text-center" style={{ marginTop: "5rem" }}>
          <div>
            For more projects, please feel free to check out my repositories:{" "}
          </div>
          <a
            className="hyper-link text-center"
            href="https://github.com/Attyuttam?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/Attyuttam?tab=repositories
          </a>
          <br/>
          <a
            className="hyper-link text-center"
            href="https://jovian.ai/attyuttam/notebooks"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://jovian.ai/attyuttam/notebooks
          </a>
        </div>
      </div>

      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
