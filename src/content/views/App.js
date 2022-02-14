import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
//-
import Sell from "./pages/Sell";
import SellToWebsite from "./pages/SellToWebsite";
//-
import Give from "./pages/Give";
import GiveToAsso from "./pages/GiveToAsso";
//-
import Discard from "./pages/Discard";
import DiscardToTrash from "./pages/DiscardToTrash";
import DiscardToDump from "./pages/DiscardToDump";
//-
import Contact from "./pages/Contact";
import ContactRedirect from "./pages/ContactRedirect";
//-
import Error404 from "./pages/Error404";


class App extends React.Component {
    componentDidMount() {
        this.props.hideLoader();
    }

    render() {
        return (
            <>
            <Router>
                <Switch>
                    <Route path="/home"                        element={<Home />            }/>
                    <Route path="/vendre"                      element={<Sell />            }/>
                    <Route path="/vendre/resultats"            element={<SellToWebsite />   }/>
                    <Route path="/donner"                      element={<Give />            }/>
                    <Route path="/donner/resultats"            element={<GiveToAsso />      }/>
                    <Route path="/jeter"                       element={<Discard />         }/>
                    <Route path="/jeter/poubelles-ecologiques" element={<DiscardToTrash />  }/>
                    <Route path="/jeter/decharge"              element={<DiscardToDump />   }/>
                    <Route path="/contact"                     element={<Contact />         }/>
                    <Route path="/contact/redirect"            element={<ContactRedirect /> }/>
                    <Route path="*"                            element={<Error404 />        }/>
                </Switch>
            </Router>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            </>
        )
    }
}

export default App;