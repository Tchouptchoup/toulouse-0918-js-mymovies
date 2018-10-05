import React from "react";

const Affiche = ({image, title}) => (
    <img className="affiche-size mx-3" src={image} alt={title} />
);

export default Affiche;
