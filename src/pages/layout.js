import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/nav.css";

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

export default Layout;
