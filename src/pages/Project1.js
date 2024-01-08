import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

const Project1 = () => {
  const animLeftTitle = {
    initial: {
      x: 0,
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
      x: -800,
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

      <div className="project-container" id="project1-pic">
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
          <h1>Site vitrine SASS</h1>
        </div>
        <motion.div
          variants={animLanguages}
          transition={transitionWithDelay}
          initial="initial"
          animate="visible"
        >
          <div className="project-languages">
            <h2>Langages</h2>
            <ul>
              <li>&#x2022; HTML</li>
              <li>&#x2022; CSS</li>
              <li>&#x2022; SCSS</li>
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
            <h2>Description</h2>
            <p>
              Premier projet en SASS d'un site vitrine one page.
              <br />
              <br />
              La nav n'est pas fonctionnelle et le site n'a pas de back car il a
              été réalisé uniquement dans le but de se familiariser avec le
              SASS.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project1;
