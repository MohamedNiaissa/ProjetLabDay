import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import CoreMenu from "./CoreMenu";
import FunctionalitiesInfo from "./FunctionalitiesInfo";
import SellForm from "./Forms/SellForm";
import GiveForm from "./Forms/GiveForm";
import ContactForm from "./Forms/ContactForm";

import TForm from "./TrashSection/TForm";
import TSub_A from "./TrashSection/TSub-A";
import TSub_B from "./TrashSection/TSub-B";
// import $ from 'jquery'
// import Givefonctionnality from './FormFonctionnalities/Givefonctionnality'

class App extends React.Component {
    render() {
        return (
            <>
                <section id="NavBar">
                    <NavBar />
                </section>
                <section id="Core">
                    <Router>
                        <Switch>
                            <Route path="/" element={<><CoreMenu /><FunctionalitiesInfo /></>}/>
                            <Route path="/Vendre" element={<><CoreMenu /><SellForm /></>}/>
                            <Route path="/Donner" element={<><CoreMenu /><GiveForm /></>}/>
                            <Route path="/Contact" element={<ContactForm />}/>

                            <Route path="/jeter" element={<><CoreMenu /><TForm /></>}/>
                            <Route path="/jeter/poubelles-ecologiques" element={<TSub_A />}/>
                            <Route path="/jeter/decharge" element={<TSub_B />}/>
                        </Switch>
                    </Router>
                </section>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="Givefonctionnality.js"></script>
            </>
        )
    }
}

export default App;