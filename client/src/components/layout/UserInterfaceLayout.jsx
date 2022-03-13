import { Header, Footer, BurgerUser, BurgerNoUser } from "../~items";
import { useState } from "react";

const UserInterfaceLayout = props => {
    const [render, setRender] = useState(null);

    const renderNavigation = (e, path) => {
        const validPath = {"/vendre":'', "/donner":'', "/jeter":'', "/home":''};
        path = new URL(e.target.closest("a").href).pathname;

        if(!(path in validPath)) path = null;
        setRender(prevState => prevState = path);
    }

    return (
        <>
            <div className="view" id="root-content">
                <Header render={render} renderNav={renderNavigation}/>
                    { props.children }
                <Footer renderNav={renderNavigation}/>
            </div>
            <div className="burger" id="burger-side">
                {props.user ? 
                    <BurgerUser event={props.event} renderNav={renderNavigation}/> 
                    : 
                    <BurgerNoUser renderNav={renderNavigation}/>
                }
            </div>
        </>
    )
}

export default UserInterfaceLayout;