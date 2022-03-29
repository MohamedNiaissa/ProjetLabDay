import { importImages } from "../../../utils/functions/Functions"
import { Link } from "react-router-dom"

const UserUI = ({event, del}) => (
    <section className="settings-user">
        <div className="user-wrapper">

            <div className="user-header">
                <div className="user-picture">
                    <label htmlFor="user_pic">
                        <img className="u-pic" src={importImages("unknown.webp")} alt="user" />
                    </label>
                    <input id="user_pic" type="file" accept="image/*" />
                </div>

                <div className="user-pseudo">
                    <span className="username">{localStorage.getItem("user")}</span>
                </div>
            </div>

            <div className="user-choices">
                <ul className="choices-wrapper">
                    <li><Link to="/settings#account" onClick={event}>Compte</Link></li>
                    <li><Link to="/settings#affichage" onClick={event}>Affichage</Link></li>
                    <li className="choices-bottom"><Link to="/home" onClick={del}>Supprimer le compte</Link></li>
                </ul>
            </div>
        </div>
    </section>
)

export default UserUI