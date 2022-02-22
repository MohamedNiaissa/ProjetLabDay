import React from "react";
import Layout from "../../components/layout/Layout";
import { importImages } from "../../utils/functions/Functions";
import { Link } from "react-router-dom";


const Home = () => (
    <Layout>
        <main className="home" id="main-content">
            <div className="intro-wrapper">
                <div className="intro-content">
                    <div className="intro-title">
                        <h1>Here's a title</h1>
                    </div>
                    <div className="intro-desc">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio amet praesentium, 
                            sequi explicabo non neque. Quos corrupti incidunt culpa, fugit eligendi perferendis 
                            assumenda eveniet repellat consequuntur, accusantium, rem aliquam nam. Lorem ipsum dolor sit, 
                            amet consectetur adipisicing elit. Recusandae perferendis doloremque voluptate natus, aut a molestias 
                            libero corrupti rerum quo harum vero, necessitatibus aliquid ullam maiores distinctio. Reiciendis, quam omnis?
                        </p>
                    </div>
                </div>

                <div className="intro-background">
                    <div className="intro-img paralax"/>
                    <div className="intro-wave paralax">
                        <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <defs>
                                <path id="wave" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                            </defs>
                            <g className="layers">
                                <use href="#wave" />
                                <use href="#wave" y="15"/>
                            </g>
                        </svg>
                    </div>
                    <div className="intro-wave flip">
                        <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <defs>
                                <path id="wave" d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
                            </defs>
                            <g className="layers">
                                <use href="#wave" />
                                <use href="#wave" y="15"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            
            
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
                        <img className="icon" src={importImages('sell.webp')} alt="icon"/>
                    </div>
                </Link>
                <div className="view-background" />
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
                        <img className="icon" src={importImages('give.webp')} alt="icon"/>
                    </div>
                </Link>
                <div className="view-background" />
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
                        <img className="icon" src={importImages('discard.webp')} alt="icon"/>
                    </div>
                </Link>
                <div className="view-background" />
            </div>
        </main>
    </Layout>
)

export default Home;