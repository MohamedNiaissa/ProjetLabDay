import React from "react";

const AuthSwitch = ({left, right, radius, title, href, text}) => (
    <div id="switch" className="auth-switch" style={{left: left, right: right, borderRadius: radius}}>
        <div className="switch-title">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor est unde porro.</p>
        </div>
        <div className="switch-btn">
            <a id="slider" href={href}><strong>{text}</strong></a>
        </div>
    </div>
)

export default AuthSwitch;