import React from "react";
import { useLocation } from "react-router";

const TSub_A = () => {
    const location = useLocation();

    return (
        <p>I'll do the bin order here<br />With {location.state.pName} and {location.state.pMat}</p>
    )
}

export default TSub_A;