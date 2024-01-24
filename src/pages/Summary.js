import React from "react";
import Nav from "../components/Nav";
import { NavLink } from "react-router-dom";

const Summary = () => {
  return (
    <div id="summary">
      <header>
        <Nav />
      </header>
      <h1>Sommaire</h1>
      <div id="sumContent">
        <div id="SumSass">
          <h2>SASS</h2>
          <ul>
            <NavLink to="/projet-1" className="navlink">
              <li>Showcase Website</li>
            </NavLink>
            <NavLink to="/projet-2" className="navlink">
              <li>Restaurant</li>
            </NavLink>
          </ul>
        </div>

        <div id="SumJs">
          <h2>Javascript</h2>
          <ul>
            <NavLink to="/projet-3" className="navlink">
              <li>Bubble Generator</li>
            </NavLink>
            <NavLink to="/projet-4" className="navlink">
              <li>Mouse Effect</li>
            </NavLink>
            <NavLink to="/projet-5" className="navlink">
              <li>NavBar Scroll</li>
            </NavLink>
            <NavLink to="/projet-6" className="navlink">
              <li>Scroll Popup</li>
            </NavLink>
            <NavLink to="/projet-7" className="navlink">
              <li>Animated Sidebar</li>
            </NavLink>
            <NavLink to="/projet-8" className="navlink">
              <li>Animated Text</li>
            </NavLink>
            <NavLink to="/projet-9" className="navlink">
              <li>Password Generator</li>
            </NavLink>
            <NavLink to="/projet-10" className="navlink">
              <li>Form</li>
            </NavLink>
            <NavLink to="/projet-11" className="navlink">
              <li>Color Generator</li>
            </NavLink>
            <NavLink to="/projet-12" className="navlink">
              <li>To Do List</li>
            </NavLink>
            <NavLink to="/projet-13" className="navlink">
              <li>Timer</li>
            </NavLink>
            <NavLink to="/projet-14" className="navlink">
              <li>Date Calculator</li>
            </NavLink>
            <NavLink to="/projet-15" className="navlink">
              <li>Joke App</li>
            </NavLink>
            <NavLink to="/projet-16" className="navlink">
              <li>User List App</li>
            </NavLink>
            <NavLink to="/projet-17" className="navlink">
              <li>Cooking JS</li>
            </NavLink>
            <NavLink to="/projet-18" className="navlink">
              <li>Country JS</li>
            </NavLink>
            <NavLink to="/projet-19" className="navlink">
              <li>Yoga Routine</li>
            </NavLink>
            <NavLink to="/projet-20" className="navlink">
              <li>Quiz JS</li>
            </NavLink>
            <NavLink to="/projet-21" className="navlink">
              <li>Draw JS</li>
            </NavLink>
            <NavLink to="/projet-22" className="navlink">
              <li>Drag and Drop</li>
            </NavLink>
            <NavLink to="/projet-23" className="navlink">
              <li>Floppy Bird</li>
            </NavLink>
          </ul>
        </div>

        <div id="SumReact">
          <h2>React</h2>
          <ul>
            <NavLink to="/projet-24" className="navlink">
              <li>Flag App</li>
            </NavLink>
            <NavLink to="/projet-25" className="navlink">
              <li>Cooking App</li>
            </NavLink>
            <NavLink to="/projet-26" className="navlink">
              <li>Typescript Posts</li>
            </NavLink>
            <NavLink to="/projet-27" className="navlink">
              <li>Portfolio React</li>
            </NavLink>
            <NavLink to="/projet-28" className="navlink">
              <li>Crypto App</li>
            </NavLink>
          </ul>
        </div>

        <div id="SumRedux">
          <h2>Redux</h2>
          <ul>
            <NavLink to="/projet-29" className="navlink">
              <li>Posts React</li>
            </NavLink>
            <NavLink to="/projet-30" className="navlink">
              <li>NFT Gallery</li>
            </NavLink>
            <NavLink to="/projet-31" className="navlink">
              <li>Fullstack App</li>
            </NavLink>
          </ul>
        </div>
      </div>
      <p>
        Ces projets ont été réalisés durant ma formation "FromScratch". Un grand
        merci à Julien Azembourg.
      </p>
    </div>
  );
};

export default Summary;
