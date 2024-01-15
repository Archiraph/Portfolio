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
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);

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

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4);
  };

  const toggleDropdown5 = () => {
    setDropdownOpen5(!isDropdownOpen5);
  };

  return (
    <div id="navigation">
      <ul id="navbar">
        <NavLink to="/" className="navlink">
          <li>Accueil</li>
        </NavLink>
        <li
          className="navlink"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <NavLink
            to="/projet-1"
            className="navlink2"
            style={{ textDecoration: "none" }}
          >
            <li>Projets</li>
          </NavLink>
          {isDropdownOpen && (
            <ul id="dropdown">
              <li
                className="navlink2"
                onMouseEnter={toggleDropdown2}
                onMouseLeave={toggleDropdown2}
              >
                <NavLink to="/projet-1" className="navlink2">
                  <li>SASS</li>
                  {isDropdownOpen2 && (
                    <ul className="dropdown2">
                      <NavLink to="/projet-1" className="navlink3">
                        <li>Site vitrine</li>
                      </NavLink>
                      <NavLink to="/projet-2" className="navlink3">
                        <li>Restaurant</li>
                      </NavLink>
                    </ul>
                  )}
                </NavLink>
              </li>
              <li
                className="navlink2"
                onMouseEnter={toggleDropdown3}
                onMouseLeave={toggleDropdown3}
              >
                <NavLink to="/projet-3" className="navlink2">
                  <li>Javascript</li>
                  {isDropdownOpen3 && (
                    <ul className="dropdown2">
                      <NavLink to="/projet-3" className="navlink3">
                        <li>Générateur de bulles</li>
                      </NavLink>
                      <NavLink to="/projet-4" className="navlink3">
                        <li>Mouse Effect</li>
                      </NavLink>
                      <NavLink to="/projet-5" className="navlink3">
                        <li>NavBar Scroll</li>
                      </NavLink>
                      <NavLink to="/projet-6" className="navlink3">
                        <li>Scroll Popup</li>
                      </NavLink>
                      <NavLink to="/projet-7" className="navlink3">
                        <li>Sidebar animée</li>
                      </NavLink>
                      <NavLink to="/projet-8" className="navlink3">
                        <li>Texte animé</li>
                      </NavLink>
                      <NavLink to="/projet-9" className="navlink3">
                        <li>Générateur de MDP</li>
                      </NavLink>
                      <NavLink to="/projet-10" className="navlink3">
                        <li>Formulaire</li>
                      </NavLink>
                      <NavLink to="/projet-11" className="navlink3">
                        <li>Color Generator</li>
                      </NavLink>
                      <NavLink to="/projet-12" className="navlink3">
                        <li>To Do List</li>
                      </NavLink>
                      <NavLink to="/projet-13" className="navlink3">
                        <li>Compte à rebours</li>
                      </NavLink>
                      <NavLink to="/projet-14" className="navlink3">
                        <li>Calculateur de dates</li>
                      </NavLink>
                      <NavLink to="/projet-15" className="navlink3">
                        <li>Générateur de blagues</li>
                      </NavLink>
                      <NavLink to="/projet-16" className="navlink3">
                        <li>User List App</li>
                      </NavLink>
                      <NavLink to="/projet-17" className="navlink3">
                        <li>Site de recettes</li>
                      </NavLink>
                      <NavLink to="/projet-18" className="navlink3">
                        <li>Country App</li>
                      </NavLink>
                      <NavLink to="/projet-19" className="navlink3">
                        <li>Yoga Routine</li>
                      </NavLink>
                      <NavLink to="/projet-20" className="navlink3">
                        <li>Quiz JS</li>
                      </NavLink>
                      <NavLink to="/projet-21" className="navlink3">
                        <li>Draw JS</li>
                      </NavLink>
                      <NavLink to="/projet-22" className="navlink3">
                        <li>Drag and Drop</li>
                      </NavLink>
                      <NavLink to="/projet-23" className="navlink3">
                        <li>Floppy Bird</li>
                      </NavLink>
                    </ul>
                  )}
                </NavLink>
              </li>

              <li
                className="navlink2"
                onMouseEnter={toggleDropdown4}
                onMouseLeave={toggleDropdown4}
              >
                <NavLink to="/projet-24" className="navlink2">
                  <li>React</li>
                  {isDropdownOpen4 && (
                    <ul className="dropdown2">
                      <NavLink to="/projet-24" className="navlink3">
                        <li>Flag App</li>
                      </NavLink>
                      <NavLink to="/projet-25" className="navlink3">
                        <li>Cooking App</li>
                      </NavLink>
                      <NavLink to="/projet-26" className="navlink3">
                        <li>Typescript Posts</li>
                      </NavLink>
                      <NavLink to="/projet-27" className="navlink3">
                        <li>Portfolio React</li>
                      </NavLink>
                      <NavLink to="/projet-28" className="navlink3">
                        <li>Crypto Watch</li>
                      </NavLink>
                    </ul>
                  )}
                </NavLink>
              </li>

              <li
                className="navlink2"
                onMouseEnter={toggleDropdown5}
                onMouseLeave={toggleDropdown5}
              >
                <NavLink to="/projet-29" className="navlink2">
                  <li>Redux</li>
                  {isDropdownOpen5 && (
                    <ul className="dropdown2">
                      <NavLink to="/projet-29" className="navlink3">
                        <li>Posts React</li>
                      </NavLink>
                      <NavLink to="/projet-30" className="navlink3">
                        <li>NFT Gallery</li>
                      </NavLink>
                      <NavLink to="/projet-31" className="navlink3">
                        <li>Site Fullstack</li>
                      </NavLink>
                    </ul>
                  )}
                </NavLink>
              </li>
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
