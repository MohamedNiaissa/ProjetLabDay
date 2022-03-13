import { stateOnPage, burgerOverride } from "../../../utils/functions/Functions";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Navigation = ({render, renderNav}) => {
    const [attribute, setAttribute] = useState({sell: "/vendre", give: "/donner", discard: "/jeter"});
    const loading = useRef(true);

    const resetState = (page) => {
        page === '/vendre' ? setAttribute(values => ({...values, sell: "/home",   give: "/donner", discard: "/jeter"})) :
        page === '/donner' ? setAttribute(values => ({...values, sell: "/vendre", give: "/home",   discard: "/jeter"})) :
        page === '/jeter'  ? setAttribute(values => ({...values, sell: "/vendre", give: "/donner", discard: "/home" })) :
        setAttribute(values => ({...values, sell: "/vendre", give: "/donner", discard: "/jeter" }))
    }

    useEffect(() => {
        if(loading.current) { resetState(window.location.pathname); loading.current = false; }
        else resetState(render);
    },[render]);

    return (
        <ul className="nav__content">
            <li>
                <Link className={stateOnPage(attribute.sell)} to={attribute.sell} onClick={renderNav} onMouseDown={burgerOverride}>
                    <span className="menu-item">Vendre</span>
                </Link>
            </li>
            <li>
                <Link className={stateOnPage(attribute.give)} to={attribute.give} onClick={renderNav} onMouseDown={burgerOverride}>
                    <span className="menu-item">Donner</span>
                </Link>
            </li>
            <li>
                <Link className={stateOnPage(attribute.discard)} to={attribute.discard} onClick={renderNav} onMouseDown={burgerOverride}>
                    <span className="menu-item">Jeter</span>
                </Link>
            </li>
        </ul>
    )
}

export default Navigation;