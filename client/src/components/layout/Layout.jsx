import Header from "./Header";
import Footer from "./Footer";
import Burger from "./Burger";


const Layout = props => (
<>
    <div className="view" id="root-content">
        <Header />
            { props.children }
        <Footer />
    </div>
    <div className="burger" id="burger-side">
        <Burger user={props.user} event={props.event}/>
    </div>
</>
)

export default Layout;


// {props.bg ? `view ${props.bg}` : "view"}