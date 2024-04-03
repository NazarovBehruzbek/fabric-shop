import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.scss"
import logo from "../images/logo.png"

function Header() {
    const location = useLocation();

    return (
        <section>
           <div className="nav">
    <div className="container">
        <ul className="nav-list" >
            <li className="nav-item">
                <img src={logo} alt="Error" className="logo" />
            </li>
            <li className="nav-item ">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/collection" activeClassName="active">Collection</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    </div>
</div>
        </section>
    );
}

export default Header;
