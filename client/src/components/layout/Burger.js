import { Link } from 'react-router-dom';
import { importImages } from "../../utils/functions/Functions";


const Burger = () => (
    <nav className="burger-content" id="burger-content">

        <div className="burger-content-account">
            <div className="account__pic"><img src={importImages("sell.svg")} alt="user-pic"/></div>
            <div className="account__goto"><Link to="/settings" className="button valid">Settings</Link></div>
        </div>

        <ul className="burger-content-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/auth#logIn">Log In</Link></li>
            <li><Link to="/auth#signUp">Sign Up</Link></li>
            <li><Link to="/home">Log out</Link></li>
        </ul>

    </nav>
)

export default Burger;