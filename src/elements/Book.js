import React from "react";
import { Link } from "react-router-dom";

const Book = () => {
    let linkToHome = false;

    function handleClickEvent(page) {
        const btnState = (page === window.location.pathname) ? "option active" : "option inactive";
        if(btnState !== "option inactive" && !linkToHome) {
            linkToHome = true;
        }

        return btnState;
    }

    function handleLinksPointer(path) {
        const btnPath = linkToHome ? "/home" : path
        if(btnPath !== path && linkToHome) {
            linkToHome = false;
        }
        return btnPath;
    }

    return (
        <>
            <li><Link className={handleClickEvent("/vendre")} to={handleLinksPointer("/vendre")}><span className="menu-item">Vendre</span></Link></li>
            <li><Link className={handleClickEvent("/donner")} to={handleLinksPointer("/donner")}><span className="menu-item">Donner</span></Link></li>
            <li><Link className={handleClickEvent("/jeter")} to={handleLinksPointer("/jeter")}><span className="menu-item">Jeter</span></Link></li>
        </>
    )
}


export default Book;