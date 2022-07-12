import React, { useState } from 'react';
import "./Navbar.css"
import Logo from 'assets/logo/logo-kk-se.png';

const Navbar = () => {
    const [active, setActive] = useState("nav-menu")
    const [toggleIcon, setToggleIcon] = useState("nav-toggler")
    const navToggle = () => {
        active === "nav-menu" ? setActive("nav-menu nav-active") : setActive("nav-menu")
        toggleIcon === "nav-toggler" ? setToggleIcon("nav-toggler toggle") : setToggleIcon("nav-toggler")
    }

    return (
        <nav className="nav position-sticky w-100">
            <a href="/" className="nav-brand border-0">
                <img src={Logo} alt="" />
            </a>
            <ul className={active}>
                <li className="nav-item">
                    <a href="/" className="nav-link text-decoration-none text-white fw-bold">About Us</a>
                </li>
                <li className="nav-item">
                    <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Civitas</a>
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar