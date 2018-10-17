import React from "react";
import { Link } from 'react-router-dom';

const Menu = ({ id, name }) => (
    <div>
        <Link to={`/categories/${name}`} className="dropdown-item" id={id}>{name}</Link>
    </div>
)

export default Menu;