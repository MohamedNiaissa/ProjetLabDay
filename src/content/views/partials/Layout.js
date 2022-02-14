import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Burger from "./Burger";


const Layout = props => (
<>
    <div className="root-content" id="root-content">
        <Header />
            { props.children }
        <Footer />
    </div>
    <div className="burger-side" id="burger-side">
        <Burger />
    </div>
</>
)

export default Layout;