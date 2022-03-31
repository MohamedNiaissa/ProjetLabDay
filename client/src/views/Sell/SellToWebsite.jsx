import { useLocation } from "react-router-dom";
import { WebsiteCells } from "../../components/~items";


const SellToWebsite = () => {
    const {material} = useLocation().state.product;

    return(
        <main className="website" id="main-content">
            <div className="marg" />
            <div className="website-list">
                <WebsiteCells mat = {material}/>
            </div>
        </main>
    )
}

export default SellToWebsite;