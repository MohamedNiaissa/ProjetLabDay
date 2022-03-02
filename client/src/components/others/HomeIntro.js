import React from "react";

const HomeIntro = ({title, text}) => (
    <div className="intro-wrapper">

        <div className="intro-content">
            <div className="intro-title">
                <h1>{title}</h1>
            </div>
            <div className="intro-desc">
                <p>{text}</p>
            </div>
            <div className="intro-button">
                <a href="#pres" id="fade-in" className="button valid">Click me !</a>
            </div>
        </div>

        <div className="intro-background paralax">
            <div className="intro-img"/>
        </div>
    </div>
)

export default HomeIntro;