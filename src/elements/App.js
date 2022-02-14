import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import FunctionalitiesInfo from "./FunctionalitiesInfo";
import SForm from "./Forms/SellSection/SForm";
import SSub from "./Forms/SellSection/SSub";
import GForm from "./Forms/GiveSection/GForm";
import GSub from "./Forms/GiveSection/GSub";
import TForm from "./Forms/TrashSection/TForm";
import TSubA from "./Forms/TrashSection/TSub_A";
import TSubB from "./Forms/TrashSection/TSub_B";
import CForm from "./Forms/ContactSection/CForm";
import CSub from "./Forms/ContactSection/CSub";


class App extends React.Component {
    componentDidMount() {
        this.props.hideLoader();
    }

    render() {
        return (
            <>
            <Router>
                <Switch>
                    <Route path="/home"                        element={<FunctionalitiesInfo />}/>
                    <Route path="/vendre"                      element={<SForm />}/>
                    <Route path="/donner"                      element={<GForm />}/>
                    <Route path="/jeter"                       element={<TForm />}/>
                    
                    <Route path="/vendre/resultats"            element={<SSub /> }/>
                    <Route path="/donner/resultats"            element={<GSub /> }/>
                    <Route path="/jeter/poubelles-ecologiques" element={<TSubA />}/>
                    <Route path="/jeter/decharge"              element={<TSubB />}/>
                    <Route path="/contact"                     element={<CForm />}/>
                    <Route path="/contact/redirect"            element={<CSub /> }/>
                </Switch>
            </Router>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </>
        )
    }
}

export default App;