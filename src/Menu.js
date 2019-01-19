import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css'

const Menu = ({ id, name }) => (
    <div>
        <Link to={`/categories/${name}`} className="dropdown-item hov-menu-desktop" id={id}>{name}</Link>
    </div>
)

export default Menu;