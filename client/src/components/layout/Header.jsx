import { useEffect } from "react";
import { Link } from 'react-router-dom';
import MainNav from "./MainNav";
import Nut from "./Nut";
import {importImages, triggerBurgerMenu} from "../../utils/functions/Functions";


const Header = () => {
    useEffect(() => triggerBurgerMenu(), [])

    return (
        <header className="header" id="header" >
            <div className="header-logo">
                <Link to="/home">
                    <img className="logo" src={importImages("NextStep.webp")} alt="logo"/>
                </Link>
            </div>
            <nav className="header-nav">
                <MainNav/>
                <Nut />
            </nav>
        </header>
    )
}

export default Header;