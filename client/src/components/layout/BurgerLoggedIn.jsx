import { Link } from 'react-router-dom';
import { importImages, burgerOverride } from "../../utils/functions/Functions";

const BurgerLoggedIn = ({event}) => (
    <nav className="burger-content" id="burger-content">

        <div className="burger-content-account">
            <div className="account__pic"><img src={importImages("unknown.webp")} alt="user-pic"/></div>
            <div className="account__name"><span>{localStorage.getItem("user")}</span></div>
            <div className="account__goto"><Link to="/settings" className="auth-button col-origin" onMouseDown={burgerOverride}>Settings</Link></div>
        </div>

        <ul className="burger-content-nav nav-bottom">
            <li><Link to="/home" onMouseDown={burgerOverride}>Home</Link></li>
            <li><Link to="/contact" onMouseDown={burgerOverride}>Contact</Link></li>
            <li><Link to="/home" onClick={event} name="logout" onMouseDown={burgerOverride}>Log out</Link></li>
        </ul>

    </nav>
)

export default BurgerLoggedIn;

// navigate("/home", {replace: true})