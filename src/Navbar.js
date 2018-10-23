import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import mattDamon from "./images/mattDamon.png";

import Menus from "./Menus";
import MenusMobile from "./MenusMobile";
import BarreDeRecherche from './BarreDeRecherche';

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
                <a className="nav-link dropdown-toggle bouton-parcourir menu-parcourir" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  PARCOURIR
                </a>

                <div className="dropdown-menu menu-desktop" aria-labelledby="navbarDropdown">
                  <div>
                    <Menus id={this.props.id} name={this.props.name} />
                  </div>
                </div>
              </li>

              <div className="d-block d-lg-none d-xl-none">
                <Link to="/profil"><button className="btn bouton-profil mt-2" type="submit">MON PROFIL</button></Link>
              </div>

              <li className="nav-item parcourir d-block d-lg-none ">
                <button className="btn btn-block dropdown-toggle bouton-parcourir menu-parcourir mt-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  PARCOURIR
                </button>

                <div className="dropdown-menu mt-2 text-center" aria-labelledby="navbarDropdown" style={{ zIndex: '10', overflowX: 'auto', position: 'relative' }}>
                  <MenusMobile id={this.props.id} name={this.props.name} />
                </div>
              </li>


              <BarreDeRecherche action={this.props.receiveSearchResults} />

            </ul>
            <Link to="/profil"><img className="matt-damon d-none d-lg-block" src={mattDamon} alt="Smiley face" /></Link>
          </div>
        </nav >
      </div>
    )
  }
};

export default Navbar;