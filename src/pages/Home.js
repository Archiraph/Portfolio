import React from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";

const Home = () => {
  const animTextLeft = {
    initial: {
      opacity: 0,
      x: -400,
      y: -100,
    },
    visible: {
      opacity: 1,
      x: "8vw",
      y: "28vh",
    },
  };

  const animTextRight = {
    initial: {
      opacity: 0,
      x: 800,
      y: 230,
    },
    visible: {
      opacity: 1,
      x: "30vw",
      y: "40vh",
    },
  };

  const animTitle = {
    initial: {
      opacity: 0,
      x: 280,
      y: -50,
    },
    visible: {
      opacity: 1,
      x: "16vw",
      y: "13vh",
    },
  };

  const animUnderTitle = {
    initial: {
      opacity: 0,
      x: 450,
      y: 180,
    },
    visible: {
      opacity: 1,
      x: "25vw",
      y: "22vh",
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 1],
    duration: 1,
  };

  const transition2 = {
    ease: [0.23, 0.9, 0.8, 1],
    duration: 2,
  };

  const transitionWithDelay = {
    ease: [0.03, 0.87, 0.73, 1],
    duration: 1,
    delay: 0.3,
  };

  const transitionWithDelay2 = {
    ease: [0.23, 0.9, 0.8, 1],
    duration: 1,
    delay: 0.5,
  };

  return (
    <div id="home">
      <header>
        <Nav />
      </header>
      <div id="content-home">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <motion.div
          variants={animTitle}
          transition={transition}
          initial="initial"
          animate="visible"
        >
          <h3>Bienvenue dans mon Portfolio</h3>
        </motion.div>
        <motion.div
          variants={animTextLeft}
          transition={transitionWithDelay}
          initial="initial"
          animate="visible"
        >
          <p id="first-text">
            Ayant débuté l’apprentissage du code il y a quatre ans par une
            formation de Web Developer à l'IFOSUP de Wavre, j’ai acquis de
            nombreuses compétences dans différents domaines : HTML/CSS, PHP,
            MySQL, Photoshop...
            <br />
            <br />
            Après m’être familiarisé avec ces langages de base, j’ai voulu me
            spécialiser dans un domaine précis afin de me démarquer.{" "}
          </p>
        </motion.div>
        <motion.div
          variants={animUnderTitle}
          transition={transition2}
          initial="initial"
          animate="visible"
        >
          <h2>Présentation</h2>
        </motion.div>

        <motion.div
          variants={animTextRight}
          transition={transitionWithDelay2}
          initial="initial"
          animate="visible"
        >
          <p id="second-text">
            J’ai donc, dans un premier temps, décidé de m’orienter « Front-end »
            et de m’intéresser particulièrement sur les langages les plus
            demandés du marché. J’ai, de ce fait, entrepris une nouvelle
            formation, en ligne cette fois, FromScratch. Par ce biais, j’ai pu
            developper mes connaissances à propos de Javascript, Redux, SASS,
            NodeJS ainsi que d'autres bibliothèques tournant autour du
            Javascript. <br />
            <br />
            Fort de ces quatre années de formation, je suis motivé et prêt à
            mettre mes connaissances au service des entreprises et sociétés.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
