import React from "react";
import ManageLinks from "./ManageLinks";

class Header extends React.Component {
    render() {
        return (
            <section id="NavBar">
                <div id="nav" style={{display:'flex'}}>
                    <a>Application Name</a>
                    <img src="../logo192.png" alt="" style={{width: "10%"}}></img>
                    <ManageLinks link={"/home"}/>
                </div>
            </section>
        )
    } 
}

export default Header;