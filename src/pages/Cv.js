import React from "react";
import Nav from "../components/Nav";

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
          <img src="static\media\cv.39ffd6a8c8bb9a914e0a.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cv;
