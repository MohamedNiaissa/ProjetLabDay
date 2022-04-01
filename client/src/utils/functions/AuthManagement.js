import axios from 'axios';
import { setAuth } from "./Functions";
import { Notif } from './Popup';

export async function signup(e, body) {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/user/create", body)
    .then(res => { 
        e.target.reset(); 
        console.log(`%c ${res.data.message}`, "color: gold;");
        window.location.hash = "#LogIn";
    }).catch(function(error) { Notif("crimson", error.response.data.message) });
}

export async function login(e, body, navigate, refresh) {
    e.preventDefault();
    await axios.post("http://localhost:5001/api/user/open-session", body)
    .then(res => { 
        e.target.reset();
        setAuth(res.data); 
        navigate("/home", {replace: true});
        Notif("#d4c465", res.data.message);
        refresh();
    }).catch(function(error) { Notif("crimson", error.response.data.message) });
}

export function init(hash) {
    if(hash === "#signUp") {
        return {
            left: "0",
            right: "50%",
            radius: "10px 0 0 10px",
            title: "Vous avez un compte ?",
            text: "Log in"
        }
    } else {
        return {
            left: "50%",
            right: "0",
            radius: "0 10px 10px 0",
            title: "Vous n'avez pas de compte ?",
            text: "Sign up"
        }
    }
}