import React from "react";

const Navbar = () => (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">My-Moovs</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item parcourir">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Parcourir
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
      <input className="form-control mr-sm-2" type="search" placeholder="Clique pour rechercher un film !" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">GO !</button>
    </form>
  </div>
</nav>
);

export default Navbar;