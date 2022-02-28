import React from "react";

const Switch = ({event, off, on, nameID}) => (
    <div className="switch">
        <input id={nameID} className="controller" type="checkbox" name="checkbox" onClick={event} />
        <label className="slider" htmlFor={nameID}>
            <div className="slider-box" data-off={off} data-on={on}>
                <span className="ball"></span>
            </div>
        </label>
    </div>
)

export default Switch;