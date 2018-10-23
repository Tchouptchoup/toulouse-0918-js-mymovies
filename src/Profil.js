import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import mattDamon from "./images/mattDamon.png";
import './Profil.css';
import { Button } from 'reactstrap';
import dataGenres from "./dataGenres"
import Bar from './starRatings/StarsRatings';


const MOVIE_FILTERS = {
  'BY_TOSEE': movie => movie.toSee,
  'BY_LIKED': movie => movie.liked,
  'ALL': () => true
};

class Profil extends Component {
  constructor(props) {
    super(props);
    const list = JSON.parse(localStorage.getItem('test'))
    this.state = {
      list: list !== null ? list : [],
      filterKey : 'ALL'
    };
  }

  deleteMovie(id) {
    const list = [...this.state.list];
    const newList = list.filter(test => test.id !== id);
    this.setState({ list: newList });
    localStorage.setItem("test", JSON.stringify(newList));
  }
 /*  likedArray() {
    const list = [...this.state.list];
    const newList = list.filter(test => test.liked === true);
    this.setState({ list: newList });
  }
  toSeeArray() {
    const list = [...this.state.list];
    const newList = list.filter(test => test.toSee === true);
    this.setState({ list: newList });
  } */

  render() {
    const { list, filterKey } = this.state
    const filteredList = list.filter(MOVIE_FILTERS[filterKey]);
    return (
      <div className="bg-light">
        <Container>
          <Row>
            <Col sm="12" md="3">
              <img className="img_profil img-fluid img-thumbnail mt-4" src={mattDamon} alt="Photo de profil" />
            </Col>
            <Col sm="12" md="7">
              <h1 className="mt-5">Matt Damon</h1>
              <div className="rectangle"><div className="description">Je m'appelle Matt Damon, je suis acteur, scénariste et producteur. J'ai tourné dans de nombreux films tels que Il Faut Sauver le Soldat Ryan, Seul sur Mars ou encore La Grande Muraille.</div></div>
              <a href="#" className="btn btn-fb mt-2">Facebook</a>
            </Col>
          </Row>
          <br />
          <h2 className="mt-4">Ma liste de films</h2>
          <br />
          <Row>
            <Col xs="12" md="12">
            
                  <Button active={filterKey === 'ALL'} onClick={() => this.setState({filterKey: 'ALL'})} className="nav_movies bg-secondary">Tout</Button>
                  <Button active={filterKey === 'BY_LIKED'} onClick={() => this.setState({filterKey: 'BY_LIKED' })} className="nav_movies bg-secondary">J'aime !</Button>
                  <Button active={filterKey === 'BY_TOSEE'} onClick={() => this.setState({filterKey: 'BY_TOSEE' })} className="nav_movies bg-secondary">Films ajoutés à ma liste</Button>
            </Col>
          </Row>
          <br />
          <div className="affiches_size">
            {filteredList.map(movie => (
                <div>
                  <Row className="mt-2">
                    <Col xs="12" sm="3" md="3">
                      <img className="img-fluid p-1 w-100" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />
                    </Col>
                    <Col xs="12" sm="9" md="6">
                      <h4 style={{ color: `#bd0026` }}>{movie.title}</h4>
                      <p className="mt-2 text-justify">{movie.overview}</p>
                      <p>Date de sortie : <span style={{ color: `#bd0026` }}></span></p>
                      <p>Genre : <Button className="p-1 btn-secondary">Action</Button></p>
                      <br />
                    </Col>
                    <Col xs="12" sm="12" md="3">
                      <div>
                        <Button block className="mb-2 p-1 btn-primary"
                          onClick={() => this.deleteMovie(movie.id)}>Supprimer</Button>
                      </div>
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
