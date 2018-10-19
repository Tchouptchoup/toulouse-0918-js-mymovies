import React from "react";
import './Navbar.css'
import { Col, Row } from 'reactstrap';

const Resultat = ({ id, name }) => (
    <div>
        <Row className="mt-2">
            <Col xs="12" sm="3" md="3">
                <img className="img-fluid p-1 w-100" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} alt={movie.title} />
            </Col>
            <Col xs="12" sm="9" md="6">
                <h4 style={{ color: `#bd0026` }}>{movie.title}</h4>
                <p className="mt-2 text-justify">{movie.overview}</p>
                <p>date de sortie : <span style={{ color: `#bd0026` }}>{movie.release_date.split('-').reverse().join('-')}</span></p>
                <div>{dataGenres.map(genre => (
                    <p>id={movie.genres} name={movie.name} </p>))}</div>
                <br />
            </Col>
            <Col xs="12" sm="12" md="3">
                {/* <RemoveMovie test={this.props.test} />
                <Button block className="p-1 btn-secondary">Partage</Button> */}
            </Col>
        </Row>
        <hr />
    </div>
)

export default Resultat;