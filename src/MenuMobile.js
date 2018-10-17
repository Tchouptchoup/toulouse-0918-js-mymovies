import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const MenuMobile = ({ id, name }) => (
    <div>
        <Link to={`/categories/${name}`} id={id}>
                <button className="btn btn-block text-center">{name}</button>
        </Link>
    </div >

)

export default MenuMobile;