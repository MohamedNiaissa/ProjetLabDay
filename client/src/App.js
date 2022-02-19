import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import { Home, Sell, SellToWebsite, Give, GiveToAsso, Discard, 
    DiscardToDump, DiscardToTrash, Contact, ContactRedirect, Error404 } from "./views";

const App = ({hideLoader}) => {
    useEffect(() => hideLoader(), [hideLoader]);

    return (
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
    )
}

export default App;