import { useState } from "react"
import Logo from 'assets/logo/logo-kk-se.png';
import Hamburger from 'assets/icon/ic-hamburger.svg';
import "./Navbar.css"

const Navbar = ({ handleChange }) => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
                <img src={Logo} alt="" />
            </a>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                <img src={Hamburger} alt="" />
            </button>
            <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
                <ul className={`m-0 ${isNavExpanded ? 'd-flex align-items-center' : ''}`}>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-decoration-none text-white fw-bold">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a href="/civitas" className="nav-link text-decoration-none text-white fw-bold">Civitas</a>
                    </li>
                    <li className={`nav-item ${isNavExpanded ? 'd-none' : 'd-block'}`}>
                        <form action="" className="search-bar">
                            <input onChange={handleChange} type="search" name="search" pattern=".*\S.*" required />
                            <button className="search-btn" type="submit">
                                <span>Search</span>
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar