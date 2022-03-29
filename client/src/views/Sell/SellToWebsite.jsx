import { useLocation } from "react-router-dom";
import { WebsiteCells } from "../../components/~items";

const SellToWebsite = () => {

    const { material } = useLocation().state.product;
    console.log(material);

    return (
        <main className="website" id="main-content">
            <WebsiteCells mat={material}/>
        </main>
    )
}

export default SellToWebsite;