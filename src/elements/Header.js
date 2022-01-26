import React from "react";
import ManageLinks from "./ManageLinks";

class Header extends React.Component {
    render() {
        return (
            <section className="nav_container">
                <div id="nav" className="nav">
                    <img src='../NSLogoSVG.svg' alt="logo" className="app_logo" width="184px" height="56px"></img>
                    <ManageLinks link={"/home"}/>
                </div>
            </section>
        )
    } 
}

export default Header;