import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss"
import logo from "../images/logo.png"
import { Drawer } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [t,i18n] = useTranslation()
    
    const handleChange = () => {
        const selectedLanguage = document.getElementById("languageSelect").value;
        i18n.changeLanguage(selectedLanguage);
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <section>
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul className="nav-list" >
                        <li className="nav-item nav-logo">
                            <img src={logo} alt="Error" className="logo" />
                        </li>
                        <li className="nav-item ">
                            <NavLink exact to="/" activeClassName="active">{t('header.menu1')}</NavLink>
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
                        <select id="languageSelect" onChange={handleChange}>
                            <option value="eng">English</option>
                            <option value="uz">Uzbek </option>
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
