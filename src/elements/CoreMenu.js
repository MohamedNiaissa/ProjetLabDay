import React from "react";
import { NavLink } from "react-router-dom";

class CoreMenu extends React.Component {

    checkCurrentPage(){
        if(window.location.pathname === "/Contact"){
            return "contact"
        }else if(window.location.pathname === "/Donner"){
            return "donner"
        }else if(window.location.pathname === "/Jeter"){
            return "jeter"
        }else if(window.location.pathname === "/Vendre"){
            return "vendre"
        }else{
            return "menu"
        }
    }

    render() {
        if(this.checkCurrentPage() === "menu" || this.checkCurrentPage() === "contact"){
        return (
        <div className="btn-group">
            <NavLink to="/Vendre" className=""><div class="btn">Vendre</div></NavLink>
            <NavLink to="/Donner" className=""><div class="btn">Donner</div></NavLink>
            <NavLink to="/Jeter" className=""><div class="btn">Jeter</div></NavLink>
        </div>
            )
        }
        if(this.checkCurrentPage() === "vendre"){
            return (
            <div className="btn-group">
                <NavLink to="/" className=""><div class="btn-actif">Vendre</div></NavLink>
                <NavLink to="/Donner" className=""><div class="btn">Donner</div></NavLink>
                <NavLink to="/Jeter" className=""><div class="btn">Jeter</div></NavLink>
            </div>
            )
        }
        if(this.checkCurrentPage() === "donner"){
            return (
            <div className="btn-group">
                <NavLink to="/Vendre" className=""><div class="btn">Vendre</div></NavLink>
                <NavLink to="/" className=""><div class="btn-actif">Donner</div></NavLink>
                <NavLink to="/Jeter" className=""><div class="btn">Jeter</div></NavLink>
            </div>
            )
        }
        if(this.checkCurrentPage() === "jeter"){
            return (
            <div className="btn-group">
                <NavLink to="/Vendre" className=""><div class="btn">Vendre</div></NavLink>
                <NavLink to="/Donner" className=""><div class="btn">Donner</div></NavLink>
                <NavLink to="/" className=""><div class="btn-actif">Jeter</div></NavLink>
            </div>
            )
        }
    }
}

export default CoreMenu;

{/* <NavLink to="/Contact" className="" class="btn">Contact</NavLink> */}