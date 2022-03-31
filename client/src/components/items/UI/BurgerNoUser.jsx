import { Link } from 'react-router-dom';
import { burgerOverride } from '../../../utils/functions/Functions';

const BurgerNoUser = () => (
    <nav className="burger-content" id="burger-content">

        <ul className="burger-content-nav">
            <li><Link to="/home" onMouseDown={burgerOverride}>Home</Link></li>
            <li><Link to="/contact" onMouseDown={burgerOverride}>Contact</Link></li>
            <li><Link to="/auth#logIn" onMouseDown={burgerOverride}>Log In</Link></li>
            <li><Link to="/auth#signUp" onMouseDown={burgerOverride}>Sign Up</Link></li>
        </ul>

    </nav>
)

export default BurgerNoUser;