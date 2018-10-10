import React from "react";
import './Navbar.css';
import mattDamon from "./images/mattDamon.png"

const Navbar = () => (
  <nav style={{zIndex: 2}} className="navbar navbar-expand-lg fixed-top">
    <a className="navbar-brand my-moovs" href="#">my moovs</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item parcourir">
          <a className="nav-link dropdown-toggle d-flex align-items-center menu-parcourir" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PARCOURIR
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Animation japonaise</a>
            <a className="dropdown-item" href="#">Cinéma français</a>
            <a className="dropdown-item" href="#">Comédie</a>
            <a className="dropdown-item" href="#">Documentaire</a>
            <a className="dropdown-item" href="#">Drame</a>
            <a className="dropdown-item" href="#">Films indépendants</a>
            <a className="dropdown-item" href="#">Films internationaux</a>
            <a className="dropdown-item" href="#">Horreur</a>
            <a className="dropdown-item" href="#">Jeunesse et famille</a>
            <a className="dropdown-item" href="#">Policier</a>
            <a className="dropdown-item" href="#">Primés</a>
            <a className="dropdown-item" href="#">Romance</a>
            <a className="dropdown-item" href="#">Science-fiction</a>
            <a className="dropdown-item" href="#">Séries et Télévision</a>
            <a className="dropdown-item" href="#">Thriller</a>
          </div>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2 form-" type="search" placeholder="Rechercher un film" aria-label="Search" />
        <button className="btn bouton-go mx-2" type="submit">GO !</button>
      </form>
      <div className="float-left">
        <img className="matt-damon" src={mattDamon} alt="Smiley face" />
      </div>
    </div>
  </nav >
);

export default Navbar;