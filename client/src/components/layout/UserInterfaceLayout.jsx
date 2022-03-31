import { Header, Footer } from "../~items";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { burgerOverride } from "../../utils/functions/Functions";
import { BurgerNoUser, BurgerUser } from "../~items";

const UserInterfaceLayout = props => {
    const location = useLocation();

    const renderFooter = () => {
        const routes = ["/home", "/vendre", "/vendre/resultats", "/donner", "/donner/resultats", 
        "/jeter", "/jeter/poubelles-ecologiques", "/jeter/decharge", "/auth", "/ma-liste"];
        return routes.includes(location.pathname.toLowerCase());
    }

    useEffect(() => {
        document.querySelector(".header").classList.remove("scrolled");
        burgerOverride();
    }, [location]);

    return (
        <>
            <div className="view" id="root-content">
                <Header loc={location}/>
                    { props.children }
                {renderFooter() && <Footer/>}
            </div>
            <div className="burger" id="burger-side">
                {props.user ? 
                    <BurgerUser event={props.event} picture={props.picture}/> 
                    : 
                    <BurgerNoUser/>
                }
            </div>
        </>
    )
}

export default UserInterfaceLayout;