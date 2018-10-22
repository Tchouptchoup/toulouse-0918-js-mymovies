import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const MenuMobile = ({ id, name }) => (
    <div>
        <Link to={`/categories/${name}`} id={id} style={{ textDecoration: 'none' }}>
                <button className="btn btn-block text-center my-1 btn-mobile">{name}</button>
        </Link>
    </div >

)

export default MenuMobile;