import React from "react";
import { importImages } from "../../utils/functions/Functions";
import { Link } from "react-router-dom";

const HomeSection = ({link, img, title, text}) => (
    <section className="main-view">
        <div className="marg"></div>

        <div className="part1">
            <div className="svg">
                <h1>{title}</h1>
                <img src={importImages(img)}></img>
            </div>
            <div className="wrapper-txt">
                <p>{text}</p>
            </div>
        </div>

        <div className="part2">
            <div className="tuile-wrapper">
                <div className="tuiloe">

                    <div className="card">
                        <div className="card-content">
                            <div className="front">
                                <img src={importImages("nut2.webp")} />
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
                                <img src={importImages("nut2.webp")} />
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
                                <img src={importImages("nut2.webp")} />
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
                                <img src={importImages("nut2.webp")} />
                                <label>Hover me to flip !</label>
                            </div>
                            <div className="back">
                                <h4>Random title</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores sed asperiores consequatur?</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="buttonoe">
                    <Link to={link} className="button valid">En savoir plus {'=>'}</Link>
                </div>
            </div>
        </div>
    </section>
)

export default HomeSection;