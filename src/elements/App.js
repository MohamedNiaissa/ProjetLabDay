import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import CoreMenu from "./CoreMenu";
import FunctionalitiesInfo from "./FunctionalitiesInfo";
import SellForm from "./Forms/SellForm";
import GiveForm from "./Forms/GiveForm";
import ThrowForm from "./Forms/ThrowForm";
import ContactForm from "./Forms/ContactForm";


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
                            <Route path="/Jeter" element={<><CoreMenu /><ThrowForm /></>}/>
                            <Route path="/Contact" element={<ContactForm />}/>
                        </Switch>
                    </Router>
                </section>
            </>
        )
    }
}

export default App;