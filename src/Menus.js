
import React from "react";
import Menu from "./Menu";

import dataGenres from "./dataGenres"

const Menus = () => (
    <div>
        {dataGenres.map(genre => (
            <Menu id={genre.id} name={genre.name} />
        ))}
    </div>
);

export default Menus;