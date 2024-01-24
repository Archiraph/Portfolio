import React from "react";
import Nav from "../components/Nav";
import cv from "../assets/img/cv.png";

const Cv = () => {
  return (
    <div id="cv-global">
      <div id="cv-container">
        <header>
          <Nav />
        </header>
        <div id="Cv">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </div>
        <div className="image">
          <img alt="" src={cv} />
        </div>
      </div>
    </div>
  );
};

export default Cv;
