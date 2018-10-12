import React from "react";

import "./Footer.css";

const Footer = () => (
  <div>
    <footer>
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <ul className="list-inline">
            <li><a href="http://facebook.com"><i className="fa fa-facebook fa-2x"></i></a></li>
            <li><a href="http://github.com"><i className="fa fa-github fa-2x"></i></a></li>
            <li><a href="http://google+.com"><i className="fa fa-google-plus fa-2x"></i></a></li>
            <li><a href="http://twitter.com"><i className="fa fa-twitter fa-2x"></i></a></li>
            <li><a href="http://instagram.com"><i className="fa fa-instagram fa-2x"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    <div className="container">
      <div className="row text-center copyright">
        <div className="col-12">
          <p>Fait avec ❤ par la team <span className="my-moovs-footer">my moovs</span></p>
          <p>Copyright © 2018 Tous les droits sont réservés.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;