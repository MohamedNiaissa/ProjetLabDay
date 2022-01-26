import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer_container"> 
            <div className="footer">
                <NavLink to="/contact"><div className="contact">Contact us</div></NavLink>
            </div>
        </section>
    )
}

export default Footer;