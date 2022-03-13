import axios from 'axios';
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { UserInterfaceLayout } from "./components/~layout";
import { isLogged, clearAuth, getToken } from './utils/functions/Functions';
import { get } from "./views";

const App = ({hideLoader}) => {
    const loading = useRef(true);
    const [user, setUser] = useState(isLogged);
    const refreshOnLogIn  = () => { setUser(prevState => prevState = true);  }

    const refreshOnLogOut = async () => { 
        await axios.post("http://localhost:5001/api/user/close-session", getToken()).then(res => {
            axios.post("http://localhost:5001/api/user/sanitize-session").then(resolve => { return resolve });
            clearAuth(); setUser(prevState => prevState = false);
            console.log(`%c ${res.data.message}`, "color: gold;");
        }).catch(function(error) { console.error(error.response.data.message) } ); 
    }
    
    useEffect(() => { 
        if(loading.current) {
            hideLoader();
            loading.current = false;
        }
    },[hideLoader]);

    console.log(user)

    return (
        <Router>
            <UserInterfaceLayout user={user} event={refreshOnLogOut}>
                <Switch>
                    {user ?
                        <Route path="/settings"                    element={<get.Settings/>         }/>
                        :
                        <Route path="/auth"                        element={<get.AuthLayout refresh={refreshOnLogIn}/> }/>
                    }
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
                    <Route path="*"                            element={<get.Error404 />        }/>
                </Switch>
            </UserInterfaceLayout>
        </Router>
    )
}

export default App;