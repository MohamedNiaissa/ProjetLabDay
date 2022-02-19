import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (
    <footer className="footer" id="footer"> 
        <div className="footer-content">
            <Link id="fetchBug" to="/contact">
                <span className="contact">Contactez nous</span>
            </Link>
        </div>
    </footer>
)

export default Footer;