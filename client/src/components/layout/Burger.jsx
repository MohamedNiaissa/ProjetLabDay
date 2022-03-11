import BurgerNouser from './BurgerNoUser';
import BurgerLoggedIn from './BurgerLoggedIn';

const Burger = ({user, event}) => {
    return user ? <BurgerLoggedIn event={event}/> : <BurgerNouser />
}

export default Burger;