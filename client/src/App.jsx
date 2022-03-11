import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import axios from 'axios';
import { get } from "./views";

const App = ({hideLoader}) => {
    const [user, setUser] = useState(false);
    const refreshOnLogIn  = () => { setUser(prevState => prevState = true);  }
    const refreshOnLogOut = async () => { 
        const body = document.cookie;
        const cold = {token: body.slice(6,)}

        await axios.post("http://localhost:5001/api/user/close-session", cold)
        .then(res => {
            if(res.status !== 201) return console.error(res.data.message);
            
            axios.post("http://localhost:5001/api/user/sanitize-session").then(resolve => { return resolve });
            setUser(prevState => prevState = false);
            localStorage.clear();
            document.cookie.replace(/(?<=^|;).+?(?=|;|$)/g, document.cookie=`token=null;max-age=0;path=/;domain=localhost`);
            console.log(res.data.message);

        }).catch(function(error) { console.error(error.response.data.message) } ); 
    }
    const isUserLoggedIn  = () => { if(localStorage.getItem("user")) setUser(value => value = true);}
    
    useEffect(() => { hideLoader(); isUserLoggedIn(); }, [hideLoader, setUser]);

    console.log(user)

    return (
        <Router>
            <Layout user={user} event={refreshOnLogOut}>
                <Switch>
                    {user ?
                        <Route path="/settings"                    element={<get.Settings/>         }/>
                        :
                        <Route path="/auth"                        element={<get.AuthLayout event={refreshOnLogIn}/> }/>
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
            </Layout>
        </Router>
    )
}

export default App;