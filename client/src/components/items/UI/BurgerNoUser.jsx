import { Link } from 'react-router-dom';
import { burgerOverride } from '../../../utils/functions/Functions';

const BurgerNoUser = ({renderNav}) => (
    <nav className="burger-content" id="burger-content">

        <ul className="burger-content-nav">
            <li><Link to="/home" onMouseDown={burgerOverride} onClick={renderNav}>Home</Link></li>
            <li><Link to="/contact" onMouseDown={burgerOverride} onClick={renderNav}>Contact</Link></li>
            <li><Link to="/auth#logIn" onMouseDown={burgerOverride} onClick={renderNav}>Log In</Link></li>
            <li><Link to="/auth#signUp" onMouseDown={burgerOverride} onClick={renderNav}>Sign Up</Link></li>
        </ul>

    </nav>
)

export default BurgerNoUser;