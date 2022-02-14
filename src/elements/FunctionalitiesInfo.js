import React from "react";
import Layout from "./Layout";

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}


const functionalitiesInfo = () => {
    const imagesStatic = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

    return (
        <Layout>
            <main className="home" id="main-content">
                <div className="content-sell">
                    <div className="sell-icon-wrapper">
                        <img className="icon" src={imagesStatic['vendre.svg']} alt="icon"/>
                    </div>
                    <div className="sell-text-wrapper">
                        <p>
                            Entrez en contact facilement avec les acheteurs potentiels de votre région, et vendez votre objet en quelques clics.
                        </p>
                    </div>
                </div>
                <div className="content-give">
                <   div className="give-icon-wrapper">
                        <img className="icon" src={imagesStatic['donner.svg']} alt="icon"/>
                    </div>
                    <div className="give-text-wrapper">
                        <p>
                            Découvrez les associations et particuliers qui reprendront vos objets et leur redonneront vie.
                        </p>
                    </div>
                </div>
                <div className="content-throw">
                    <div className="throw-icon-wrapper">
                        <img className="icon" src={imagesStatic['jeter.svg']} alt="icon"/>
                    </div>
                    <div className="throw-text-wrapper">
                        <p>
                            Apprenez à trier vos déchets et encombrants dans les poubelles écologiques et déchetteries locales.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default functionalitiesInfo;