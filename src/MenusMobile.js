
import React from "react";
import MenuMobile from "./MenuMobile";

import dataGenres from "./dataGenres"

const MenusMobile = () => (
    <div>
        {dataGenres.map(genre => (
            <MenuMobile id={genre.id} name={genre.name} />
        ))}
    </div>
);

export default MenusMobile;