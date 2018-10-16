import React from "react";
import './Navbar.css';
import mattDamon from "./images/mattDamon.png"

const Navbar = () => (
  <nav style={{ zIndex: 2 }} className="navbar navbar-expand-lg fixed-top ">
    <a className="navbar-brand my-moovs" href="#">my moovs</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">

      <ul className="navbar-nav mr-auto">


        <form className="form-inline d-block d-sm-none">
          <input className="form-control" type="search" placeholder="Rechercher un film" aria-label="Search" />
          <button className="btn bouton-go btn-block mt-2" type="submit">GO !</button>
        </form>


        <form className="form-inline d-none d-sm-block d-lg-none">
          <input style={{ width: '100%' }} className="form-control mr-sm-2" type="search" placeholder="Rechercher un film" aria-label="Search" />
          <button className="btn bouton-go btn-block mt-2" type="submit">GO !</button>
        </form>


        <li className="nav-item parcourir d-none d-lg-block">
          <a className="nav-link dropdown-toggle  menu-parcourir" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PARCOURIR
          </a>
            
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="row">
              <div className="col-6-md col-3-lg">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Aventure</a>
                <a className="dropdown-item" href="#">Animation</a>
                <a className="dropdown-item" href="#">Crime</a>
              </div>
              <div class="col-6-md col-3-lg">
                <a className="dropdown-item" href="#">Documentaire</a>
                <a className="dropdown-item" href="#">Drame</a>
                <a className="dropdown-item" href="#">Familiale</a>
                <a className="dropdown-item" href="#">Fantastique</a>
              </div>
              <div class="col-6-md col-3-lg">
                <a className="dropdown-item" href="#">Histoire</a>
                <a className="dropdown-item" href="#">Horreur</a>
                <a className="dropdown-item" href="#">Musique</a>
                <a className="dropdown-item" href="#">Thriller</a>
              </div>
              <div class="col-6-md col-3-lg">
                <a className="dropdown-item" href="#">Romance</a>
                <a className="dropdown-item" href="#">Science-fiction</a>
                <a className="dropdown-item" href="#">Téléfilm</a>
                <a className="dropdown-item" href="#">Guerre</a>
              </div>
            </div>
            </div>
        </li>


        <li  className="nav-item parcourir d-block d-lg-none ">
          <button className="btn btn-block dropdown-toggle  menu-parcourir mt-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            PARCOURIR
          </button>

          <div  style={{position:'relative',overflowX:'auto' }} className=" dropdown-menu mt-2 " aria-labelledby="navbarDropdown">
            <button className="btn btn-block" href="#">Action</button>
            <button className="btn btn-block" href="#">Aventure</button>
            <button className="btn btn-block" href="#">Animation</button>
            <button className="btn btn-block" href="#">Crime</button>
            <button className="btn btn-block" href="#">Documentaire</button>
            <button className="btn btn-block" href="#">Drame</button>
            <button className="btn btn-block" href="#">Familiale</button>
            <button className="btn btn-block" href="#">Fantastique</button>
            <button className="btn btn-block" href="#">Histoire</button>
            <button className="btn btn-block" href="#">Horreur</button>
            <button className="btn btn-block" href="#">Musique</button>
            <button className="btn btn-block" href="#">Thriller</button>
            <button className="btn btn-block" href="#">Romance</button>
            <button className="btn btn-block" href="#">Science-fiction</button>
            <button className="btn btn-block" href="#">Téléfilm</button>
            <button className="btn btn-block" href="#">Guerre</button>
          </div>
        </li>


        <form className="form-inline ml-3 d-none d-lg-block">
          <input style={{ width: '450px' }} className="form-control mr-sm-2" type="search" placeholder="Rechercher un film" aria-label="Search" />
          <button className="btn bouton-go mx-2" type="submit">GO !</button>
        </form>

      </ul>

      <img className="matt-damon d-none  d-lg-block" src={mattDamon} alt="Smiley face" />
    </div>
  </nav >
);

export default Navbar;