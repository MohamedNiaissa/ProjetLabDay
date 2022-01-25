import React from "react";
import { NavLink } from "react-router-dom";

const CoreMenu = () => (
    <div className="btn-group">
        <NavLink to="/Vendre" className="option"><div class="btn">Vendre</div></NavLink>
        <NavLink to="/Donner" className="option"><div class="btn">Donner</div></NavLink>
        <NavLink to="/Jeter" className="option"><div class="btn">Jeter</div></NavLink>
        {/* <NavLink to="/Contact" className="" class="btn">Contact</NavLink> */}
    </div>
)

export default CoreMenu;

// Code purement visuel ici