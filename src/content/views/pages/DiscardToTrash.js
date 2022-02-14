import React from "react";
import { useLocation } from "react-router";
import Layout from "../partials/Layout";


function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

function getTrashColor(loc) {
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

const DiscardToTrash = () => {
    let T = getTrashColor(useLocation());
    const imagesStatic = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

    return (
        <Layout>
            <main className="trash" id="main-content">
                <div className="trash-wrapper">
                    <div className="trash-color">
                        <img className={T.class} src={imagesStatic["trash.png"]} alt='trash'></img>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default DiscardToTrash;