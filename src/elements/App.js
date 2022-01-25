import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route, NavLink } from "react-router-dom";

import Header from "./Header";
import FunctionalitiesInfo from "./FunctionalitiesInfo";
import SForm from "./Forms/SellSection/SForm";
import SSub from "./Forms/SellSection/SSub";
import GiveForm from "./Forms/GiveSection/GiveForm";
import TForm from "./Forms/TrashSection/TForm";
import TSub_A from "./Forms/TrashSection/TSub-A";
import TSub_B from "./Forms/TrashSection/TSub-B";
import ContactForm from "./Forms/ContactSection/ContactForm";

const CoreMenu = () => (
    <div className="btn-group">
        <NavLink to="/vendre" className="">Vendre</NavLink>
        <NavLink to="/Donner" className="">Donner</NavLink>
        <NavLink to="/jeter" className="">Jeter</NavLink>
        <NavLink to="/Contact" className="">Contact</NavLink>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <>
            <Router>
                <Header />
                <section id="Core">
                    <Switch>
                        <Route path="/home" element={<>{CoreMenu()}<FunctionalitiesInfo /></>}/>
                        <Route path="/vendre" element={<>{CoreMenu()}<SForm /></>}/>
                        <Route path="/vendre/resultats" element={<><SSub /></>}/>
                        <Route path="/Donner" element={<>{CoreMenu()}<GiveForm /></>}/>
                        <Route path="/jeter" element={<>{CoreMenu()}<TForm /></>}/>
                        <Route path="/jeter/poubelles-ecologiques" element={<TSub_A />}/>
                        <Route path="/jeter/decharge" element={<TSub_B />}/>
                        <Route path="/Contact" element={<ContactForm />}/>
                    </Switch>
                </section>
            </Router>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="Givefonctionnality.js"></script>
            </>
        )
    }
}

export default App;