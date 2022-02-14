import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Burger from "./Burger";

class Layout extends React.Component {
    render() {
        return (
            <>
            <div className="root-content" id="root-content">
                <Header />
                    { this.props.children }
                <Footer />
            </div>
            <div className="burger-side" id="burger-side">
                <Burger />
            </div>
            </>

        )
    }
}

export default Layout;