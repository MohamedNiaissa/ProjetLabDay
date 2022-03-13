import { Link } from 'react-router-dom';
import { importImages, burgerOverride } from "../../../utils/functions/Functions";

const BurgerUser = ({event, renderNav}) => (
    <nav className="burger-content" id="burger-content">

        <div className="burger-content-account">
            <div className="account__pic"><img src={importImages("unknown.webp")} alt="user-pic"/></div>
            <div className="account__name"><span>{localStorage.getItem("user")}</span></div>
            <div className="account__goto">
                <Link to="/settings" className="auth-button col-origin" onMouseDown={burgerOverride} onMouseUp={renderNav}>Settings</Link>
            </div>
        </div>

        <ul className="burger-content-nav nav-bottom">
            <li><Link to="/home" onMouseDown={burgerOverride} onMouseUp={renderNav}>Home</Link></li>
            <li><Link to="/contact" onMouseDown={burgerOverride} onMouseUp={renderNav}>Contact</Link></li>
            <li><Link to="/home" onMouseDown={burgerOverride} onMouseUp={renderNav}>Liste</Link></li>
            <li><Link to="/home" name="logout" onClick={event} onMouseDown={burgerOverride} onMouseUp={renderNav}>Log out</Link></li>
        </ul>

    </nav>
)

export default BurgerUser;