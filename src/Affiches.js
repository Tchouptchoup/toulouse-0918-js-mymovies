
import React from "react";
import Affiche from "./Affiche";

const Affiches = ({affiches}) => (
    <div>
        {affiches.map(affiche => (
            <Affiche key={affiche.id} image={affiche.image} title={affiche.title} />
        ))}
    </div>
);

export default Affiches;