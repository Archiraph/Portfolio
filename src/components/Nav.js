import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const linkedIn = () => {
    const linkedInUrl =
      "https://www.linkedin.com/in/raphael-mortiers-95a201267/";
    window.open(linkedInUrl, "_blank");
  };

  const github = () => {
    const githubUrl = "https://github.com/Archiraph";
    window.open(githubUrl, "_blank");
  };

  const twitter = () => {
    const twitterUrl = "https://twitter.com/Raph6428";
    window.open(twitterUrl, "_blank");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div id="navigation">
      <ul id="navbar">
        <NavLink to="/" className="navlink">
          <li>Accueil</li>
        </NavLink>
        <motion.li
          onHoverStart={toggleDropdown}
          onHoverEnd={toggleDropdown}
          className="navlink"
        >
          <li>Projets</li>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul
                id="dropdown"
                initial={{ opacity: 0, y: "4vh" }}
                animate={{ opacity: 1, y: "9vh" }}
                exit={{ opacity: 0, y: "9vh" }}
                transition={{ duration: 0.5 }}
              >
                <NavLink to="/projet-1" className="navlink2">
                  <li>Projet 1</li>
                </NavLink>
                <NavLink to="/projet-2" className="navlink2">
                  <li>Projet 2</li>
                </NavLink>
                {/* Add more projects as needed */}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.li>
        <NavLink to="/cv" className="navlink">
          <li>CV</li>
        </NavLink>
        <NavLink to="/contact" className="navlink">
          <li>Contact</li>
        </NavLink>
      </ul>
      <div id="logo-container"></div>
      <ul id="reseauxNav">
        <li>
          <FontAwesomeIcon icon={faLinkedin} onClick={linkedIn} />
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} onClick={github} />
        </li>
        <li>
          <FontAwesomeIcon icon={faTwitter} onClick={twitter} />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
