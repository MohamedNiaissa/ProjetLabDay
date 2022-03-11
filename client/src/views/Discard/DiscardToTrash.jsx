import { useLocation } from "react-router";
import { importImages, getTrashColor } from "../../utils/functions/Functions";


const DiscardToTrash = () => (
    <main className="trash" id="main-content">
        <div className="trash-wrapper">
            <div className="trash-color">
                <img className={getTrashColor(useLocation().state.product)} src={importImages("trash.webp")} alt='trash'></img>
            </div>
        </div>
    </main>
)

export default DiscardToTrash;