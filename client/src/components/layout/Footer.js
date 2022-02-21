import React from "react";
import { Link } from "react-router-dom";


const Footer = () => (
    <footer className="footer">
        <div className="footer-waves">
            <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="layers">
                    <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use href="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
        <div className="footer-content">
            <Link id="fetchBug" to="/contact">
                <span className="contact">Contactez nous</span>
            </Link>
        </div>
    </footer>
)

export default Footer;