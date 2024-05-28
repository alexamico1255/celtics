import { Outlet, Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
  return (
    <>
    <Header />
      <nav>
        <ul>
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