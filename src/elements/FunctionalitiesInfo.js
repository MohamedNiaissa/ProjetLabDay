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
                                Here's the text explaining the Sell functionality.
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
                                Here's the text explaining the Give functionality.
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
                                Here's the text explaining the Throw functionality.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default functionalitiesInfo;