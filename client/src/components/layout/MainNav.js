import React from "react";
import { Link } from "react-router-dom";
import { stateOnPage } from "../../utils/functions/Functions";


const MainNav = () => (
<>
    <li><Link className={stateOnPage("bg", "/vendre")} to={stateOnPage("link", "/vendre")}><span className="menu-item">Vendre</span></Link></li>
    <li><Link className={stateOnPage("bg", "/donner")} to={stateOnPage("link","/donner")}><span className="menu-item">Donner</span></Link></li>
    <li><Link className={stateOnPage("bg", "/jeter")}  to={stateOnPage("link","/jeter")}><span className="menu-item">Jeter</span></Link></li>
</>
)

export default MainNav;