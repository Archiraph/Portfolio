import React from "react";
import { NavLink } from "react-router-dom";
import { faHouzz } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <div id="notFound">
      <h1>Erreur 404</h1>
      <NavLink to="/">
        <h3>
          <FontAwesomeIcon icon={faHouzz} />
          Retour à l'accueil
          <FontAwesomeIcon icon={faHouzz} />
        </h3>
      </NavLink>
    </div>
  );
};

export default NotFound;
