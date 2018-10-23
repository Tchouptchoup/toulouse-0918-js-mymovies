import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import mattDamon from "./images/mattDamon.png";
import './Profil.css';
import { Button } from 'reactstrap';

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
      filterKey : 'ALL', 
        };
  }

  deleteMovie(id) {
    const list = [...this.state.list];
    const newList = list.filter(test => test.id !== id);
    this.setState({ list: newList });
    localStorage.setItem("test", JSON.stringify(newList));
  }
 readMore () {
  this.setState({showAll:true})
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
        <Container className="phone-center">
          <Row>
            <Col sm="12" md="3">
              <img className="img_profil img-fluid img-thumbnail mt-4" src={mattDamon} alt="Photo de profil" />
            </Col>
            <Col sm="12" md="7">
              <h1 className="mt-5">John Doe</h1>
              <div className="rectangle"><div className="description">Je m'appelle John Doe, je suis développeur web, fan de cinéma, j'aime la randonnée et la cuisine !</div></div>
{/*               <a href="#" className="btn btn-fb mt-2">Facebook</a>
 */}            </Col>
          </Row>
          <br />
          <h2 className="mt-2">Ma liste de films</h2>
          <br />
          <Row>
            <Col xs="12" md="12">
                  <Button active={filterKey === 'ALL'} onClick={() => this.setState({filterKey: 'ALL'})} className="btn btn-test mr-2 mt-2">Tout</Button>
                  <Button active={filterKey === 'BY_LIKED'} onClick={() => this.setState({filterKey: 'BY_LIKED' })} className="btn btn-test mr-2 mt-2">J'aime !</Button>
                  <Button active={filterKey === 'BY_TOSEE'} onClick={() => this.setState({filterKey: 'BY_TOSEE' })} className="btn btn-test mt-2">Films ajoutés à ma liste</Button>
            </Col>
          </Row>
          <br />
          <div className="affiches_size">
            {filteredList.map(movie => (
                <div>
                  <Row className="mt-2">
                    <Col xs="6" sm="2" md="2">
                      <img className="img-fluid p-1 w-100" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />
                    </Col>
                    <Col xs="12" sm="9" md="6">
                      <h4 style={{ color: `#bd0026` }}>{movie.title}</h4>
                      

                      <p className="mt-2 text-justify">{movie.overview.substr(0, 280)}... <button style={{ color: `#bd0026` }}> ... lire la suite</button></p>
                      <p>Date de sortie : <span style={{ color: `#bd0026` }}>{movie.release_date.split('-').reverse().join('-')}</span></p>
                      <p>Genre : <span style={{ color: `#bd0026` }}> Action</span></p>
                      <br />
                    </Col>
                    <Col xs="12" sm="12" md="3">
                      <div>
                        <Button block className="mb-2 p-1 btn-primary"
                          onClick={() => this.deleteMovie(movie.id)}>Supprimer</Button>
                      </div>
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
