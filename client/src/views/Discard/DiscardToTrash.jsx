import { useLocation } from "react-router";
import { importImages, getTrashColor } from "../../utils/functions/Functions";


const DiscardToTrash = () => {
    const { product: { material } } = useLocation().state;
    const trash = getTrashColor(material);

    return (
        <main className="trash" id="main-content">
            <div className="marg" />
            <div className="trash-title">
                <h1>Lorem Ipsum Dolor</h1>
            </div>
            <div className="trash-content">
                <div className="trash-list">
                    <div className="trash-list-items" alt='trash_blue'>
                        <img className={trash.red} src={importImages("RedBin.svg")} />
                    </div>
                    <div className="trash-list-items" alt='trash_yellow'>
                        <img className={trash.yellow} src={importImages("YellowBin.svg")} />
                    </div>
                    <div className="trash-list-items" alt='trash_green'>
                        <img className={trash.green} src={importImages("GreenBin.svg")} />
                    </div>
                </div>
                <div className="trash-message">
                    <span>Pour un objet en {material}, la poubelle écologique nécessaire sera la {trash.selected}</span>
                </div>
            </div>
        </main>
    )
}

export default DiscardToTrash;