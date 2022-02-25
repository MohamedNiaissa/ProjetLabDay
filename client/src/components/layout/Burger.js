import React from "react";
import { Link } from 'react-router-dom';


const Burger = () => (
    <nav className="burger-content" id="burger-content">
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/auth#logIn">Log In</Link></li>
            <li><Link to="/auth#signUp">Sign Up</Link></li>
        </ul>
    </nav>
)

export default Burger;