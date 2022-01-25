import React from "react";
import { useLocation } from "react-router";

const TSub_B = () => {
    const location = useLocation();

    return (
        <p>
            I'll do the big object here
            <br/>
            With {location.state.pName} and {location.state.pMat}
            <br/>
            Then {location.state.cName} and {location.state.cZip}
        </p>
    )
}

export default TSub_B;