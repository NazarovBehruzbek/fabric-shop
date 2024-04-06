import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"
import logo from "../images/logo.png"
import { Drawer } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <section>
            <div className="nav">
                <div className="container">
                    <ul className="nav-list" >
                        <li className="nav-item nav-logo">
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
                        <select id="languageSelect">
                            <option value="uzbek">Uzbek </option>
                            <option value="english">English</option>
                        </select>
                        <div onClick={showDrawer} className="bars"><FontAwesomeIcon icon={faBars} /></div>
                    </ul>

                </div>
                <Drawer onClose={onClose} open={open}>
               <div className="sub-menu">
               <ul className="nav-list" >
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
                </Drawer>
            </div>
        </section>
    );
}

export default Header;
