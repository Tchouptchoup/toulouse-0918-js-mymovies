import React from "react";

import "./Footer.css";

const Footer = () => (
<div>
  <footer>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <ul class="list-inline">
            <li class="socialNetworks">
              <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
              <a href="#"><i class="fa fa-github fa-2x"></i></a>
              <a href="#"><i class="fa fa-google-plus fa-2x"></i></a>
              <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
              <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <ul class="menu list-inline">
            <a href="#">Mon Profil</a>
            <br />
            <a href="#">Paramètres</a>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          <p>Fait avec ❤ par la team My Moovs.</p>
          <p>Copyright © 2018 Tous les droits sont réservés.</p>
        </div>
      </div>
    </div>
  </div>
</div>
);

export default Footer;