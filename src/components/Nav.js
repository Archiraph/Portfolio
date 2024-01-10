import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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

  return (
    <div id="navigation">
      <ul id="navbar">
        <NavLink to="/" className="navlink">
          <li>Accueil</li>
        </NavLink>
        <li
          className="navlink projects-li"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          Projets
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <NavLink to="/projet-1" className="navlink2">
                <li>Projet 1</li>
              </NavLink>
              <NavLink to="/projet-2" className="navlink2">
                <li>Projet 2</li>
              </NavLink>
              {/* Add more projects as needed */}
            </ul>
          )}
        </li>
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
