import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Project30 = () => {
  const projectClick = () => {
    const project = document.getElementsByClassName("project-container")[0];
    const project2 = document.getElementsByClassName("hoverProject")[0];

    if (project && project.classList.contains("project-container")) {
      project.classList.replace("project-container", "hoverProject");
    } else if (project2 && project2.classList.contains("hoverProject")) {
      project2.classList.replace("hoverProject", "project-container");
    }
  };

  const animLeftTitle = {
    initial: {
      x: -4,
      y: 0,
    },
    visible: {
      x: -200,
      y: 0,
    },
  };

  const animRightTitle = {
    initial: {
      x: 200,
      y: 0,
    },
    visible: {
      x: 400,
      y: 0,
    },
  };

  const animLanguages = {
    initial: {
      opacity: 0,
      x: 800,
      y: 0,
      rotate: 40,
    },
    visible: {
      opacity: 1,
      x: "26vw",
      y: "14vh",
      rotate: 0,
    },
  };

  const animDescription = {
    initial: {
      opacity: 0,
      x: -500,
      y: 0,
      rotate: -40,
    },
    visible: {
      opacity: 1,
      x: "-14vw",
      y: "16vh",
      rotate: 0,
    },
  };

  const transition = {
    ease: [0.93, 0.87, 0.73, 1],
    duration: 1.5,
  };

  const transitionWithDelay = {
    ease: [0.23, 0.87, 0.73, 1],
    duration: 1.5,
    delay: 0.4,
  };

  const transitionWithDelay2 = {
    ease: [0.23, 0.87, 0.73, 1],
    duration: 1.5,
    delay: 0.7,
  };

  return (
    <div className="project">
      <header>
        <Nav />
      </header>

      <NavLink to="../projet-29" className="navlink">
        <div className="leftArrow">&#10094;</div>
      </NavLink>

      <NavLink to="../projet-31" className="navlink">
        <div className="rightArrow">&#10095;</div>
      </NavLink>

      <div
        className="project-container"
        id="project30-pic"
        onClick={projectClick}
      >
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="project-title">
          <motion.div
            variants={animLeftTitle}
            transition={transition}
            initial="initial"
            animate="visible"
          >
            <div className="title-cache"></div>
          </motion.div>
          <motion.div
            variants={animRightTitle}
            transition={transition}
            initial="initial"
            animate="visible"
          >
            <div className="title-cache"></div>
          </motion.div>
          <h1>NFT Gallery</h1>
        </div>
        <motion.div
          variants={animLanguages}
          transition={transitionWithDelay}
          initial="initial"
          animate="visible"
        >
          <div className="project-languages">
            <ul>
              <li>&#x2022; HTML</li>
              <li>&#x2022; SCSS</li>
              <li>&#x2022; React</li>
              <li>&#x2022; Redux</li>
            </ul>
          </div>
        </motion.div>
        <motion.div
          variants={animDescription}
          transition={transitionWithDelay2}
          initial="initial"
          animate="visible"
        >
          <div className="project-description">
            <p>
              Site permettant de partager, modifier ou supprimer des photos.
            </p>
          </div>
        </motion.div>
        <NavLink
          to="https://github.com/Archiraph/redux-toolkit"
          className="navlink"
          target="_blank"
        >
          <div id="code-box">
            <h2>Code</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 640 512"
            >
              <path
                fill="#ffffff"
                d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
              />
            </svg>
          </div>
        </NavLink>
        <NavLink
          to="http://127.0.0.1:5500/"
          className="navlink"
          target="_blank"
        >
          <div id="site-box">
            <h2>Voir le site</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="18"
              width="18"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
              />
            </svg>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Project30;
