import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import MainNav from "./MainNav";
import {importImages, triggerBurgerMenu} from "../../utils/functions/Functions";


const Header = () => {
    useEffect(() => triggerBurgerMenu(), [])

    return (
        <header className="header" id="header" >
            <div className="logo-wrapper">
                <Link to="/home">
                    <img className="logo" src={importImages('NextStep.jpg')} alt="logo"/>
                </Link>
            </div>
            <nav className="menu-wrapper">
                <ul>
                    <MainNav/>
                    <li>
                        <div className="option-burger">
                            <input className="burger-action" id="toggle-burger" type="checkbox" ></input>
                            <label id="burger-anim" htmlFor="toggle-burger"><img className="burger" src={importImages('nut.png')} alt="burger"/></label>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;