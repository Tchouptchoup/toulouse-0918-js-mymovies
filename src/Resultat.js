import React from "react";
import './Navbar.css'

const Resultat = props => (
    <div className="resultats-recherche">
        <img className="image-recherche" alt={props.title} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${props.poster_path}`} />
    </div>
)

export default Resultat;