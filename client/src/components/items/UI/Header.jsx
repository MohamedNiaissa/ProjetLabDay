import {importImages, triggerBurgerMenu} from "../../../utils/functions/Functions";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";
import Nut from "./Nut";

const Header = ({render, renderNav}) => {
    useEffect(() => triggerBurgerMenu(), [])

    return (
        <header className="header" id="header" >
            <div className="header-logo">
                <Link to="/home"><img className="logo" src={importImages("NextStep.webp")} alt="logo"/></Link>
            </div>
            <nav className="header-nav">
                <Navigation render={render} renderNav={renderNav}/>
                <Nut />
            </nav>
        </header>
    )
}

export default Header;