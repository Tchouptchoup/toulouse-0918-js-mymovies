import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import mattDamon from "./images/mattDamon.png";
import './Profil.css';
import RemoveMovie from './Modal/removeButtonList';
import { Button } from 'reactstrap';

class Profil extends Component {
  constructor(props) {
    super(props);
    const list = JSON.parse(localStorage.getItem('test'))
    this.state = {
      list: list !== null ? list : []
    };
  }
  render() {
    const { list } = this.state

    return (
      <div>
        <Container>
          <Row>
            <Col sm="12" md="6">
              <img className="img_profil img-fluid mt-4" src={mattDamon} alt="Photo de profil" />
            </Col>
            <Col sm="12" md="6">
              <h1 className="mt-5">Matt Damon</h1>
              <div className="rectangle"><div className="description">Je m'appelle Matt Damon, je suis acteur, scénariste et producteur. J'ai tourné dans de nombreux films tels que Il Faut Sauver le Soldat Ryan, Seul sur Mars ou encore La Grande Muraille.</div></div>
            </Col>
          </Row>
          <br />
          <h2 className="mt-4">Ma liste de films</h2>
          <br />
          <Row>
            <Col xs="12" md="12">
              <Nav tabs>
                <NavItem>
                  <NavLink className="nav_movies" href="#" active>Tout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav_movies" href="#">Mes films favoris</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav_movies" href="#">Les films que je dois voir</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          <br />
          <div className="affiches_size">
            {list.filter(movie => movie !== null)
              .map(movie => (
                <div>
                  <Row className="mt-2">
                    <Col xs="12" sm="3" md="3">
                      <img className="img-fluid p-1 w-100" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />
                    </Col>
                    <Col xs="12" sm="9" md="6">
                      <h4 style={{ color: `#bd0026` }}>{movie.title}</h4>
                      <p className="mt-2 text-justify">{movie.overview}</p>
                      <p>date de sortie : <span style={{ color: `#bd0026` }}>{movie.release_date.split('-').reverse().join('-')}</span></p>
                      <p>{movie.genres}</p>
                      <br />
                    </Col>
                    <Col xs="12" sm="12" md="3">
                    <RemoveMovie />
                    <Button block className="p-1 btn-secondary">Partage</Button>
                    </Col>
                  </Row>
                  <hr />
                </div>
              ))}
          </div>
        </Container>
      </div>
    );
  }
}
export default Profil;
