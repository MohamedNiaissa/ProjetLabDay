import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer_container"> 
            <div className="footer">
                <Link to="/contact"><div className="contact">Contact us</div></Link>
            </div>
        </section>
    )
}

export default Footer;