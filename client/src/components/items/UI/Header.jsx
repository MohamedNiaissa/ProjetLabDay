import {importImages, triggerBurgerMenu} from "../../../utils/functions/Functions";
import { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import Navigation from "./Navigation";
import Nut from "./Nut";

const Header = ({loc}) => {
    const loading = useRef(true);
    const preventExtraRender = useRef(false);
    const [headerColor, setHeaderColor] = useState("header");
  
    const listenScrollEvent = () => {
        if(window.scrollY > 73 && !preventExtraRender.current) {
            preventExtraRender.current = true;
            setHeaderColor(prev => prev = "header scrolled");
        }
        else if (window.scrollY < 70 && preventExtraRender.current) {
            preventExtraRender.current = false;
            setHeaderColor(prev => prev = "header");
        }
    }
      
    useEffect(() => {
        if(loading.current) {
            triggerBurgerMenu();
            loading.current = false;
        }

        window.addEventListener('scroll', listenScrollEvent);
        return () => window.removeEventListener('scroll', listenScrollEvent);
    }, [loc]);

    return (
        <header className={headerColor} id="header">
            <div className="header-logo">
                <Link to="/home"><img className="logo" src={importImages("NextStep.webp")} alt="logo"/></Link>
            </div>
            <nav className="header-nav">
                <Navigation/>
                <Nut />
            </nav>
        </header>
    )
}

export default Header;