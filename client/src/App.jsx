import axios from 'axios';
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import { UserInterfaceLayout } from "./components/~layout";
import { isLogged, clearAuth, getToken } from './utils/functions/Functions';
import { get } from "./views";
import { Notif } from './utils/functions/Popup';

const App = ({hideLoader}) => {
    const loading = useRef(true);
    const [user, setUser] = useState(isLogged);
    const [pic, setPic] = useState(null);

    const refreshOnNewPic = (image) => {
        setPic(prevVal => prevVal = image);
    }

    const refreshOnRefresh  = async () => {
        await axios.post("http://localhost:5001/api/user/fetch-pic", {token: getToken()})
        .then(res => { setPic(prevVal => prevVal = res.data[0].image); return res})
        .catch(function(error) { console.error(error.response.data.message) } );
    }

    const refreshOnLogIn  = async () => {
        await axios.post("http://localhost:5001/api/user/fetch-pic", {token: getToken()})
        .then(res => { setPic(prevVal => prevVal = res.data[0].image);})
        .catch(function(error) { console.error(error.response.data.message) } );

        setUser(prevState => prevState = true);
    }

    const refreshOnLogOut = async (del) => { 
        await axios.post("http://localhost:5001/api/user/close-session", {token : getToken()}).then(res => {
            axios.post("http://localhost:5001/api/user/sanitize-session").then(resolve => { return resolve });
            clearAuth();
            setPic(prevVal => prevVal = null);
            setUser(prevState => prevState = false);
            Notif("#d4c465", del === true ? "Votre compte a été supprimé, au plasir de vous revoir." : res.data.message);
        }).catch(function(error) { console.error(error.response.data.message) } ); 
    }
    
    useEffect(() => { 
        if(loading.current) {
            hideLoader();

            if(user) refreshOnRefresh();
            loading.current = false;
            if(user) refreshOnRefresh();
        }

    
    },[hideLoader]);

    return (
        <Router>
            <UserInterfaceLayout user={user} event={refreshOnLogOut} picture={pic}>
                <Switch>
                    {user ?
                        <>
                        <Route path="/settings"                    element={<get.Settings event={refreshOnLogOut} eventPic={refreshOnNewPic} picture={pic}/> }/>
                        <Route path="/ma-liste"                    element={<get.UserList/> }/>
                        </>
                        :
                        <Route path="/auth"                        element={<get.AuthLayout refresh={refreshOnLogIn}/> }/>
                    }
                    <Route path="/home"                        element={<get.Home />            }/>
                    <Route path="/vendre"                      element={<get.Sell />            }/>
                    <Route path="/vendre/resultats"            element={<get.SellToWebsite />   }/>
                    <Route path="/donner"                      element={<get.Give />            }/>
                    <Route path="/donner/resultats"            element={<get.GiveToAsso user={user}/> }/>
                    <Route path="/jeter"                       element={<get.Discard />         }/>
                    <Route path="/jeter/poubelles-ecologiques" element={<get.DiscardToTrash />  }/>
                    <Route path="/jeter/decharge"              element={<get.DiscardToDump user={user}/> }/>
                    <Route path="/contact"                     element={<get.Contact />         }/>
                    <Route path="*"                            element={<get.Error404 />        }/>
                </Switch>
            </UserInterfaceLayout>
        </Router>
    )
}

export default App;