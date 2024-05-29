import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/nav.css";

const Layout = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  }
  return (
    <>
    <Header />
    <nav id="main-nav">
        <div id="toggle" onClick ={toggleMenu}>
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
            <Link to="/nextgame">nextgame</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;