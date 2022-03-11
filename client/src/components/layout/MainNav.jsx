import { Link } from "react-router-dom";
import { stateOnPage, burgerOverride } from "../../utils/functions/Functions";
import { useState, useEffect } from "react";


const MainNav = () => {
    const [attribute, setAttribute] = useState({sell: "/vendre", give: "/donner", discard: "/jeter"});
    const [loading, setloading] = useState(true);

    const handleNavigation = (e) => {
        let a = e.target;
        if(e.target.nodeName === "SPAN") a = e.target.parentNode;    
        const path = a.href.slice(22,);

             if(path === "/vendre") setAttribute(values => ({...values, sell: "/home",   give: "/donner", discard: "/jeter" }));
        else if(path === "/donner") setAttribute(values => ({...values, sell: "/vendre", give: "/home",   discard: "/jeter" }));
        else if(path === "/jeter")  setAttribute(values => ({...values, sell: "/vendre", give: "/donner", discard: "/home"  }));
        else if(path === "/home")   setAttribute(values => ({...values, sell: "/vendre", give: "/donner", discard: "/jeter" }));
    }

    const resetState = () => {
        const path = window.location.pathname;

             if(path === "/vendre") setAttribute(values => ({...values, sell: "/home",   give: "/donner", discard: "/jeter" }));
        else if(path === "/donner") setAttribute(values => ({...values, sell: "/vendre", give: "/home",   discard: "/jeter" }));
        else if(path === "/jeter")  setAttribute(values => ({...values, sell: "/vendre", give: "/donner", discard: "/home"  }));
        setloading(prevState => prevState = false);
    }

    useEffect(() => {if(loading) resetState() }, [loading]);

    return (
        <ul className="nav__content">
            <li>
                <Link className={stateOnPage(attribute.sell)} to={attribute.sell} onClick={handleNavigation} onMouseDown={burgerOverride}>
                    <span className="menu-item">Vendre</span>
                </Link>
            </li>
            <li>
                <Link className={stateOnPage(attribute.give)} to={attribute.give} onClick={handleNavigation} onMouseDown={burgerOverride}>
                    <span className="menu-item">Donner</span>
                </Link>
            </li>
            <li>
                <Link className={stateOnPage(attribute.discard)} to={attribute.discard} onClick={handleNavigation} onMouseDown={burgerOverride}>
                    <span className="menu-item">Jeter</span>
                </Link>
            </li>
        </ul>
    )
}

export default MainNav;
