
import React from "react";
import Menu from "./Menu";

import dataGenres from "./dataGenres"

const Menus = () => (
    <div className="d-flex flex-wrap">
        {dataGenres.map(genre => (
            <Menu id={genre.id} name={genre.name} />
        )
        )}
    </div>
);

export default Menus;