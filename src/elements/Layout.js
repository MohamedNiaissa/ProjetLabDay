import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Burger from "./Burger";

class Layout extends React.Component {
    render() {
        return (
            <>
            <Header />
            <Burger />
                { this.props.children }
            <Footer />
            </>

        )
    }
}

export default Layout;