import React from "react";
import { Link } from 'react-router-dom';
import { importImages } from "../../utils/functions/Functions";


const Burger = () => (
    <nav className="burger-content" id="burger-content">

        <div className="user-wrapper">
            <div className="user-pic">
                <img className="picta" src={importImages("sell.webp")}/>
            </div>
            <div className="user-settings">
                <Link to="/home" className="button valid">Settings</Link>
            </div>
        </div>

        <ul className="links-wrapper">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/auth#logIn">Log In</Link></li>
            <li><Link to="/auth#signUp">Sign Up</Link></li>
            <li className="links-bottom"><Link to="/home">Log out</Link></li>
        </ul>

    </nav>
)

export default Burger;