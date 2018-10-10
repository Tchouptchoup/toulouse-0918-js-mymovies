
import React from "react";
import Affiche from "./Affiche";

const Affiches = ({affiches}) => (
    <div>
        {affiches.map(affiche => (
            <Affiche key={affiche.id} affiche={affiche} />
        ))}
    </div>
);

export default Affiches;