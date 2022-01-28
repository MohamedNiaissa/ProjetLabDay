import React from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
}


const functionalitiesInfo = () => {
    const imagesStatic = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

    return (
        <section className="home_section">
            <div className="form_infos" >
                <ul>
                    <li className="infos_case">
                        <div className="infos_icon_container">
                            <img className="infos_icon" src={imagesStatic['vendre.svg']} alt="icon"/>
                        </div>
                        <div className="infos_text_container">
                            <p>
                                Entrez en contact facilement avec les acheteurs potentiels de votre région, et vendez votre objet en quelques clics.
                            </p>
                        </div>
                    </li>
                    <hr className="solid"/>
                    <li className="infos_case">
                        <div className="infos_icon_container">
                            <img className="infos_icon" src={imagesStatic['donner.svg']} alt="icon"/>
                        </div>
                        <div className="infos_text_container">
                            <p>
                                Découvrez les associations et particuliers qui reprendront vos objets et leur redonneront vie.
                            </p>
                        </div>
                    </li>
                    <hr className="solid"/>
                    <li className="infos_case">
                        <div className="infos_icon_container">
                            <img className="infos_icon" src={imagesStatic['jeter.svg']} alt="icon"/>
                        </div>
                        <div className="infos_text_container">
                            <p>
                                Apprenez à trier vos déchets et encombrants dans les poubelles écologiques et déchetteries locales.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default functionalitiesInfo;