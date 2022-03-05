import { importImages } from "../../utils/functions/Functions";

const Nut = () => (
    <div className="nav__nut">
        <div className="nav__nut-content">
            <input id="toggle-burger" type="checkbox" ></input>
            <label id="burger-anim" htmlFor="toggle-burger">
                <img src={importImages("nut.webp")} alt="burger"/>
            </label>
        </div>
    </div>
)

export default Nut;