import React from "react";

const HomeIntro = ({title, text}) => (
    <div className="home-intro">
        <div className="intro">
            <div className="intro-title">
                <h1>{title}</h1>
            </div>
            <div className="intro-description">
                <p>{text}</p>
            </div>
            <div className="intro-button">
                <a className="auth-button col-origin" href="#pres" id="fade-in">Click me !</a>
            </div>
        </div>
    </div>
)

export default HomeIntro;