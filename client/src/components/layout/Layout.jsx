import Header from "./Header";
import Footer from "./Footer";
import Burger from "./Burger";


const Layout = props => (
<>
    <div className={props.bg ? `view ${props.bg}` : "view"} id="root-content">
        <Header />
            { props.children }
        <Footer />
    </div>
    <div className="burger" id="burger-side">
        <Burger />
    </div>
</>
)

export default Layout;