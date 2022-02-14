import React from "react";
import { useLocation } from "react-router";
import image from '../../../img/Trash-Template.png';
import Layout from "../../Layout";

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
        <Layout>
            <main className="trash" id="main-content">
                <div className="trash-wrapper">
                    <div className="trash-color">
                        <img className={T.class} src={image} alt='trash'></img>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default TSub_A;