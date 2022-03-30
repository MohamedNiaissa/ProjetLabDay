import { useLocation } from "react-router-dom";
import { WebsiteCells } from "../../components/~items";
import getTab from "../../views/Sell/Sell.jsx";


const SellToWebsite = () => {

        const {material} = useLocation().state.product;
        console.log(material)
        return(
            <main className="website" id="main-content">
                <div className="marg" />
                <div className="website-list">
                    <WebsiteCells mat = {material} />
                </div>
            </main>
        )
}

export default SellToWebsite;