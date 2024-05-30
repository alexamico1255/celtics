import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/header.css';
import '../styles/nav.css';
import logo from "../images/logo.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    return (
        <header id="main-header">
                <img src={logo} id="logo" alt= "Logo" />
            <h1>Celtics Central</h1>
            <nav id="main-nav">
                <div id="toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" className={menuOpen ? "" : "hide-small"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/players">Players</Link>
                    </li>
                    <li>
                        <Link to="/nextgame">Next Game</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
