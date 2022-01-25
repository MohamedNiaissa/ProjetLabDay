import { nodeName } from "jquery";
import React from "react";

const NavBar = () => (
    <div id="nav" style={{display:'flex'}}>
        <img src='../NSLogoSVG.svg' alt="loogoo" class="logo" width="184px" height="56px"></img>
        <a href="/" class="burger">☰</a>
    </div>
)

export default NavBar;