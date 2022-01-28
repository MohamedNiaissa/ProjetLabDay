import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Header from "./Header";
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
import CoreMenu from "./CoreMenu";
import Footer from "./Footer";

class App extends React.Component {
    render() {
        return (
            <>
            <Router>
                <Header />
                <section id="Core" className="core_content">
                    <Switch>
                        <Route path="/home"                        element={<><CoreMenu /><FunctionalitiesInfo /></>}/>
                        <Route path="/vendre"                      element={<><CoreMenu /><SForm /></>              }/>
                        <Route path="/donner"                      element={<><CoreMenu /><GForm /></>              }/>
                        <Route path="/jeter"                       element={<><CoreMenu /><TForm /></>              }/>
                        
                        <Route path="/vendre/resultats"            element={<SSub /> }/>
                        <Route path="/donner/resultats"            element={<GSub /> }/>
                        <Route path="/jeter/poubelles-ecologiques" element={<TSubA />}/>
                        <Route path="/jeter/decharge"              element={<TSubB />}/>
                        <Route path="/contact"                     element={<CForm />}/>
                        <Route path="/contact/redirect"            element={<CSub /> }/>
                    </Switch>
                </section>
                <Footer />
            </Router>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </>
        )
    }
}

export default App;