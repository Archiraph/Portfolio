import React, { useState } from "react";
import Nav from "../components/Nav";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowCopyNotification(true);

        setTimeout(() => {
          setShowCopyNotification(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Erreur lors de la copie du texte :", err);
      });
  };

  const animTextLeft = {
    initial: {
      opacity: 0,
      x: -30,
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

  const animFooter = {
    initial: {
      x: -1500,
      y: "25vh",
    },
    visible: {
      x: "0vw",
      y: "25vh",
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
            développer mes connaissances à propos de Javascript, Redux, SASS,
            NodeJS ainsi que d'autres bibliothèques tournant autour du
            Javascript. <br />
            <br />
            Fort de ces quatre années de formation, je suis motivé et prêt à
            mettre mes connaissances au service des entreprises et sociétés.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={animFooter}
        transition={transition}
        initial="initial"
        animate="visible"
      >
        <footer>
          {showCopyNotification && (
            <span style={{ marginLeft: "5px", color: "green" }}>Copié !</span>
          )}
          <li onClick={() => copyToClipboard("raphael.mortiers@hotmail.com")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </svg>
            raphael.mortiers@hotmail.com
          </li>
          <li onClick={() => copyToClipboard("0471869359")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            0471 86 93 59
          </li>
          <NavLink
            to="https://raphaelmortiers.com"
            target="_blank"
            className="navLi"
          >
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
                />
              </svg>
              Site Web
            </li>
          </NavLink>
          <NavLink
            to="https://github.com/Archiraph/Portfolio"
            target="_blank"
            className="navLi"
          >
            <li>
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
              Code du site
            </li>
          </NavLink>
          <NavLink to="/contact" className="navLi">
            <li>Contact</li>
          </NavLink>
        </footer>
      </motion.div>
    </div>
  );
};

export default Home;
