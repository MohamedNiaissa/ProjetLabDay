import React, {useEffect} from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { get } from "./views";


const App = ({hideLoader}) => {
    useEffect(() => hideLoader(), [hideLoader]);

    return (
        <Router>
            <Switch>
                <Route path="/home"                        element={<get.Home />            }/>
                <Route path="/vendre"                      element={<get.Sell />            }/>
                <Route path="/vendre/resultats"            element={<get.SellToWebsite />   }/>
                <Route path="/donner"                      element={<get.Give />            }/>
                <Route path="/donner/resultats"            element={<get.GiveToAsso />      }/>
                <Route path="/jeter"                       element={<get.Discard />         }/>
                <Route path="/jeter/poubelles-ecologiques" element={<get.DiscardToTrash />  }/>
                <Route path="/jeter/decharge"              element={<get.DiscardToDump />   }/>
                <Route path="/contact"                     element={<get.Contact />         }/>
                <Route path="/contact/redirect"            element={<get.ContactRedirect /> }/>
                <Route path="/auth"                        element={<get.AuthLayout />      }/>
                <Route path="/settings"                    element={<get.Settings/>         }/>
                <Route path="*"                            element={<get.Error404 />        }/>
            </Switch>
        </Router>
    )
}

export default App;