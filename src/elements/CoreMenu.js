import React from "react";
import { NavLink } from "react-router-dom";

const CoreMenu = () => (
    <div className="btn-group">
        <NavLink to="/Vendre" className="">Vendre</NavLink>
        <NavLink to="/Donner" className="">Donner</NavLink>
        <NavLink to="/Jeter" className="">Jeter</NavLink>
        <NavLink to="/Contact" className="">Contact</NavLink>
    </div>
)

export default CoreMenu;