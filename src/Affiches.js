
import React from "react";
import Affiche from "./Affiche";

const Affiches = ({affiches}) => (
    <div>
        {affiches.map(affiche => (
            <Affiche key={affiche.id} poster_path={affiche.poster_path} title={affiche.title} />
        ))}
    </div>
);

export default Affiches;