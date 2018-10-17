import React from "react";

const Menu = ({ id, name }) => (
    <div>
        <a className="dropdown-item" id={id}>{name}</a>
    </div>
)

export default Menu;