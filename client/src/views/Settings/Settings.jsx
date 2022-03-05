import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { importImages } from "../../utils/functions/Functions";

const Settings = () => (
    <Layout>
        <main className="settings" id="main-content">
            <div className="marg" />
            
            <div className="settings-content">
                <section className="settings-user">
                    <div className="user-wrapper">

                        <div className="user-header">
                            <div className="user-picture">
                                <img className="u-pic" src={importImages("sell.webp")} />
                            </div>

                            <div className="user-pseudo">
                                <span className="username">Name</span>
                            </div>
                        </div>

                        <div className="user-choices">
                            <ul className="choices-wrapper">
                                <li><Link to="/settings">Something</Link></li>
                                <li><Link to="/settings">Something</Link></li>
                                <li><Link to="/settings">Something</Link></li>
                                <li><Link to="/settings">Something</Link></li>
                                <li className="choices-bottom"><Link to="/settings">Delete Account</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="settings-options">
                    <div className="options-wrapper">
                        <div className="marg" />
                        <div className="options">
                            <div className="options-title">
                                <h1>Some title</h1>
                            </div>

                            <div className="options-content">

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </Layout>
)

export default Settings;