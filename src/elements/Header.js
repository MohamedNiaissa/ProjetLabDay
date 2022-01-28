import React from "react";
import ManageLinks from "./ManageLinks";

class Header extends React.Component {
    render() {
        return (
            <section id="NavBar">
                <div id="nav" style={{display:'flex'}}>
                    <img src='../NSLogoSVG.svg' alt="loogoo" class="logo" width="184px" height="56px"></img>
					{/* <input id="toggle" type="checkbox"></input> */}
                    <label class="burger" for="toggle">☰</label>
                    {/* <div class="nav">
                        <ul class="nav-wrapper">
                            <li>Aaaaa</li>
                            <li>Bbbbb</li>
                            <li>Ccccc</li>
                            <li>Ddddd</li>
                            <li>Eeeee</li>
                        </ul>
                    </div> */}
                </div>
            </section>
        )
    } 
}

export default Header;