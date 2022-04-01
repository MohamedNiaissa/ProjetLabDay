import { importImages } from "../../../utils/functions/Functions";
import { Link } from "react-router-dom";

const HomeSection = ({link, img, title, text}) => (
    <section className="service">
        <div className="marg"></div>

        <div className="service__svg-description">
            <div className="svg">
                <h1>{title}</h1>
                <img src={importImages(img)} alt="func"></img>
            </div>
            <div className="description">
                <p>{text}</p>
            </div>
        </div>

        <div className="service__list">
            <div className="service__list-content">
                <div className="card-wrapper">

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("identification.png")} alt="icon-func1"/>
                                <label>Survoler moi pour retourner !</label>
                            </div>
                            <div className="back">
                                <h4>Nom de l'objet</h4>
                                <p> Renseignez le nom de l'objet que vous n'utilisez plus</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("paquet-casse.png")} alt="icon-func2"/>
                                <label>Survoler moi pour retourner !</label>
                            </div>
                            <div className="back">
                                <h4>État de l'objet</h4>
                                <p>Renseignez l'état de l'objet que vous n'utilisez plus</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("zip-code.png")} alt="icon-func3"/>
                                <label>Survoler moi pour retourner !</label>
                            </div>
                            <div className="back">
                                <h4>Code Postal</h4>
                                <p>Renseignez votre code postal pour que l'on puisse vous proposez les services à proximité de vous</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("cityscape.png")} alt="icon-func4"/>
                                <label> Survoler moi pour retourner !</label>                                
                            </div>
                            <div className="back">
                                <h4>Ville</h4>
                                <p>Sélectionnez la ville qui correspond pour une meilleur précision dans votre localisation</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="goto">
                    <Link to={link} className="auth-button col-origin">En savoir plus {'=>'}</Link>
                </div>
            </div>
        </div>
    </section>
)

export default HomeSection;