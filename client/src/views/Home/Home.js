import React from "react";
import Layout from "../../components/layout/Layout";
import { importImages } from "../../utils/functions/Functions";
import { Link } from "react-router-dom";


const Home = () => (
    <Layout>
        <main className="home" id="main-content">
            <div className="view">
                <div className="content">
                    <h2 className="title">Vendre</h2>
                    <div className="desc">
                        <div className="container">
                            <div className="main">
                                Entrez en contact facilement avec les acheteurs potentiels de votre région, et vendez votre objet en quelques clics.
                            </div>
                            <div className="second"></div>
                            <div className="third"></div>
                        </div>
                        <div className="page">
                            <span className="page-number">01</span>
                        </div>
                    </div>
                </div>
                <Link className="body" to="/vendre">
                    <div className="image-wrapper">
                        <img className="icon" src={importImages('sell.jpg')} alt="icon"/>
                    </div>
                </Link>
            </div>

            <div className="view">
                <div className="content">
                    <h2 className="title">Donner</h2>
                    <div className="desc">
                        <div className="container">
                            <div className="main">
                                Découvrez les associations et particuliers qui reprendront vos objets et leur redonneront vie.
                                </div>
                            <div className="second"></div>
                            <div className="third"></div>
                        </div>
                        <div className="page">
                            <span className="page-number">02</span>
                        </div>
                    </div>
                </div>
                <Link className="body" to="/donner">
                    <div className="image-wrapper">
                        <img className="icon" src={importImages('give.jpg')} alt="icon"/>
                    </div>
                </Link>
            </div>

            <div className="view">
                <div className="content">
                    <h2 className="title">Jeter</h2>
                    <div className="desc">
                        <div className="container">
                            <div className="main">
                                Apprenez à trier vos déchets et encombrants dans les poubelles écologiques et déchetteries locales.
                            </div>
                            <div className="second"></div>
                            <div className="third"></div>
                        </div>
                        <div className="page">
                            <span className="page-number">03</span>
                        </div>
                    </div>
                </div>
                <Link className="body" to="/jeter">
                    <div className="image-wrapper">
                        <img className="icon" src={importImages('discard.jpg')} alt="icon"/>
                    </div>
                </Link>
            </div>
        </main>
    </Layout>
)

export default Home;