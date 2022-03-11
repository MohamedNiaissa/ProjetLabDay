import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AuthSwitch from "./AuthSwitch";
import Background from "../../components/layout/Background";
import { slide, init } from "../../utils/functions/AuthManagement";
import axios from 'axios';

const AuthLayout = ({event}) => {
    const [signUpData, setSignUpData] = useState({username: null, email: null, password: null, passwordVerif: null});
    const [loginData, setLogInData] = useState({username: null, password: null});
    const navigate = useNavigate();

    const handleSignUp = async () => {
        const {username, email, password, passwordVerif} = signUpData;
        const body = {username: `${username}`, email: `${email}`, password: `${password}`, passwordVerif: `${passwordVerif}`};

        await axios.post("http://localhost:5001/api/user/create", body)
        .then(res => console.log(res.data))
        .catch(function(error) { console.error(error.response.data.message) } );
    }

    const handleLogIn = async () => {
        const {username, password} = loginData;
        const body = {username: `${username}`, password: `${password}`};

        await axios.post("http://localhost:5001/api/user/open-session", body)
        .then(res => {
            if(res.status !== 201) return console.error(res.data.message);

            localStorage.setItem('user', res.data.user);
            document.cookie = `token=${res.data.set.token};max-age=604800;domain=localhost`;
            navigate("/home", {replace: true});
            event();
        })
        .catch(error => {return error});
    }

    const handleSignUpInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

             if(name === "username") setSignUpData(input => ({...input, username: value}));
        else if(name === "email") setSignUpData(input => ({...input, email: value}));
        else if(name === "password" ) setSignUpData(input => ({...input, password: value}));
        else if(name === "passwordVerif") setSignUpData(input => ({...input, passwordVerif: value}));
    }

    const handleLogInInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

             if(name === "username") setLogInData(input => ({...input, username: value}));
        else if(name === "password" ) setLogInData(input => ({...input, password: value}));
    }

    useEffect(() => slide(), []);

    return (
        <>
            <main className="auth">
                <div className="marg" />
                <div className="auth-content">
                    <Login submit={handleLogIn} event={handleLogInInput}/>
                    <AuthSwitch {...init(useLocation().hash)} />
                    <Signup submit={handleSignUp} event={handleSignUpInput}/>
                </div>
            </main>
            <Background color={"darkblue"}/>
        </>
    )
}

export default AuthLayout;