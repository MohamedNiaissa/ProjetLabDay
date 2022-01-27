import React from "react";
import Getposition from "../../MapLoader/getPosition";

const GSub = () => {
    return (
        <div className="result_container">
            <fieldset className="map_field">
                <legend className="map_legend">Position : </legend>
                <div className="map_container">
                    <Getposition/>
                </div>
            </fieldset>
        </div>
    )
}

export default GSub;