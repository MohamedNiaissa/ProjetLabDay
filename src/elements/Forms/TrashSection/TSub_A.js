import React from "react";
import { useLocation } from "react-router";
import image from '../../../img/Trash-Template.png';
import ManageLinks from "../../ManageLinks";
import { Link } from "react-router-dom";

function getTrash(loc) {
    const material = loc.state.pMat;

    switch(true) {
        case ["bois"].includes(material):
            return { name: "Poubelle Verte", class: "T green" };
        case ["metal", "plastique", "caoutchouc", "papier_carton"].includes(material):
            return { name: "Poubelle Jaune", class: "T yellow" };
        case ["ceramique", "cuir", "textile"].includes(material):
            return { name: "Poubelle Bleue", class: "T blue" };
        default: 
            return { name: "Poubelle..?", class: "T" };
    }
}

const TSub_A = () => {
    let T = getTrash(useLocation());

    return (
        <fieldset id="trash">
            <legend className="legend">Poubelle Ecologique :</legend>
            <div className="trash-container">
                <div className="color-trash">
                    <p id="poubelle">{T.name}</p> 
                    <img className={T.class} src={image} alt=''></img>
                    <Link to="/home"><button>Retourner au menu</button></Link>
                </div>
            </div>
        </fieldset>
    )
}

export default TSub_A;