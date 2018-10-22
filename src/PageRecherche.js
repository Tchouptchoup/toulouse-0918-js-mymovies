import React from "react";
import Resultat from './Resultat';

const PageRecherche = ({ dataRecherche }) => (
    <div>
        <h3>Recherche : résultats</h3>
        <div className="text-center">
            {dataRecherche.map(recherche => (
                <Resultat key={recherche.id} poster_path={recherche.poster_path} title={recherche.title} />))}
        </div>
    </div>
)

export default PageRecherche;