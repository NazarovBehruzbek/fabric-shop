import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import logo from "../images/logo.png";
import { Drawer } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [t, i18n] = useTranslation();
    const navigate = useNavigate();
    const selectedLanguage = localStorage.getItem('i18nextLng') || 'eng';
    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('i18nextLng', selectedLanguage);
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

    const onLogo = () => {
        navigate('/');
    };

    return (
        <section>
            <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <ul className="nav-list" >
                        <li className="nav-item nav-logo" onClick={onLogo}>
                            <img src={logo} alt="Error" className="logo" />
                        </li>
                        <li className="nav-item ">
                            <NavLink exact to="/" activeClassName="active">{t('header.menu1')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active">{t('header.menu2')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/collection" activeClassName="active">{t('header.menu3')}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active">{t('header.menu4')}</NavLink>
                        </li>
                        <select id="languageSelect" onChange={handleChange} value={selectedLanguage}>
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
                                <NavLink exact to="/" activeClassName="active">{t('header.menu1')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="active">{t('header.menu2')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/collection" activeClassName="active">{t('header.menu3')}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" activeClassName="active">{t('header.menu4')}</NavLink>
                            </li>

                        </ul>
                    </div>
                </Drawer>
            </div>
        </section>
    );
}

export default Header;
