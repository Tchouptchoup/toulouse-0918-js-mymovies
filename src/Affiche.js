import React from "react";
import './Affiche.css';

const Affiche = ({ poster_path, title }) => (
    <img className="affiche-size mx-3" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`} alt={title} />
);

export default Affiche;
