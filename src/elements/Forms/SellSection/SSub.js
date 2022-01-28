import React from "react";
import { useLocation } from "react-router";
import Getposition from "../../MapLoader/getPosition";

const SSub = () => {
    const location = useLocation();

    return (
        <div className="result_container">
            <fieldset className="map_field">
                <legend className="map_legend">Position : </legend>
                <div className="map_container">
                    <Getposition state={{location}}/>
                </div>
            </fieldset>
        </div>
    )
}

export default SSub;