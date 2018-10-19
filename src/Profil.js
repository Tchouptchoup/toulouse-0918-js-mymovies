import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import api_movies from "./api_movies";

import mattDamon from "./images/mattDamon.png";
import './Profil.css';

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
						<img className="img-fluid p-1" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />))}
				</div>
    		</Container>	
    	</div>
    );
  }
}

export default Profil;
