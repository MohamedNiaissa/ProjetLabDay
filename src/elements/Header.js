import React from "react";
import ManageLinks from "./ManageLinks";

class Header extends React.Component {
    render() {
        return (
            <section id="NavBar">
                <div id="nav" style={{display:'flex'}}>
                    <img src='../NSLogoSVG.svg' alt="loogoo" class="logo" width="184px" height="56px"></img>
                    <ManageLinks link={"/home"}/>
                </div>
            </section>
        )
    } 
}

export default Header;