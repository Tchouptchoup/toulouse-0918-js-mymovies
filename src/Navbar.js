import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mattDamon from "./images/mattDamon.png";

import Menus from "./Menus";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav style={{ zIndex: 2 }} className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand my-moovs">my moovs</Link>
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
                  <div>
                    <Menus />
                  </div>
                </div>
              </li>


              <li className="nav-item parcourir d-block d-lg-none ">
                <button className="btn btn-block dropdown-toggle  menu-parcourir mt-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  PARCOURIR
                </button>

                <div style={{ position: 'relative', overflowX: 'auto' }} className=" dropdown-menu mt-2 " aria-labelledby="navbarDropdown">
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
            <Link to="/profil"><img className="matt-damon d-none  d-lg-block" src={mattDamon} alt="Smiley face" /></Link>
          </div>
        </nav >
      </div>
    )
  }
};

export default Navbar;