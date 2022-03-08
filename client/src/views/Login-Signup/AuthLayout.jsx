import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import AuthSwitch from "./AuthSwitch";
import Layout from "../../components/layout/Layout";
import Background from "../../components/layout/Background";
import { slide, init } from "../../utils/functions/AuthManagement";
import axios from 'axios';

const AuthLayout = () => {
    const [signUpData, setSignUpData] = useState({email: null, password: null, passwordVerif: null});
    const [loginData, setLogInData] = useState({email: null, password: null});

    const handleSignUp = async () => {
        const {email, password, passwordVerif} = signUpData;
        const body = {email: `${email}`, password: `${password}`, passwordVerif: `${passwordVerif}`};

        await axios.post("http://localhost:5001/api/user/create", body)
        .then(res => console.log(res.data))
        .catch(function(error) { console.error(error.response.data.message) } );

        //! Empty the useState;
    }

    const handleLogIn = async () => {
        const {email, password} = loginData;
        const body = {email: `${email}`, password: `${password}`};

        await axios.post("http://localhost:5001/api/user/log", body)
        .then(res => console.log(res.data))
        .catch(function(error) { console.error(error.response.data.message); });
    }

    const handleSignUpInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

             if(name === "email") setSignUpData(input => ({...input, email: value}));
        else if(name === "password" ) setSignUpData(input => ({...input, password: value}));
        else if(name === "passwordVerif") setSignUpData(input => ({...input, passwordVerif: value}));
    }

    const handleLogInInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

             if(name === "email") setLogInData(input => ({...input, email: value}));
        else if(name === "password" ) setLogInData(input => ({...input, password: value}));
    }

    useEffect(() => slide(), []);

    return (
        <>
            <Layout>
                <main className="auth">
                    <div className="marg" />
                    <div className="auth-content">
                        <Login submit={handleLogIn} event={handleLogInInput}/>
                        <AuthSwitch {...init(useLocation().hash)} />
                        <Signup submit={handleSignUp} event={handleSignUpInput}/>
                    </div>
                </main>
            </Layout>
            <Background color={"darkblue"}/>
        </>
    )
}

export default AuthLayout;