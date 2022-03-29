import axios from 'axios';
import { setAuth } from "./Functions";

export function slide(e) {
    console.log(e.target);
    
        // document.getElementById("shift-cbx").addEventListener("click", () => {
        // const el = document.getElementById("switch").classList;
        // if(el.contains("right")) el.remove("right");
        // if(el.contains("left")) el.remove("left");
        
        // const animationDirection = window.location.hash === "#signUp" ? "right" : "left";
        // el.add(animationDirection);
        // setTimeout(() => {el.remove(animationDirection)}, 2500);
}

export async function signup(body) {
    await axios.post("http://localhost:5001/api/user/create", body).then(res => console.log(res.data))
    .catch(function(error) { console.error(error.response.data.message) } );
}

export async function login(body, navigate, refresh) {
    await axios.post("http://localhost:5001/api/user/open-session", body).then(res => { 
        setAuth(res.data); navigate("/home", {replace: true}); refresh();
    }).catch(error => {return error});
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