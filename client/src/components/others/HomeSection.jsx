import { importImages } from "../../utils/functions/Functions";
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
                                <img src={importImages("nut2.webp")} alt="icon-func1"/>
                                <label>Hover me to flip !</label>
                            </div>
                            <div className="back">
                                <h4>Random title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed asperiores consequatur?</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("nut2.webp")} alt="icon-func2"/>
                                <label>Hover me to flip !</label>
                            </div>
                            <div className="back">
                                <h4>Random title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed asperiores consequatur?</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("nut2.webp")} alt="icon-func3"/>
                                <label>Hover me to flip !</label>
                            </div>
                            <div className="back">
                                <h4>Random title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed asperiores consequatur?</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("nut2.webp")} alt="icon-func4"/>
                                <label>Hover me to flip !</label>
                            </div>
                            <div className="back">
                                <h4>Random title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed asperiores consequatur?</p>
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