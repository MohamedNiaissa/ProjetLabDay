import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Login, SignUp, AuthSwitch, Background } from "../../components/~items";
import { init } from "../../utils/functions/AuthManagement";
import { login, signup } from "../../utils/functions/AuthManagement";

const AuthLayout = ({refresh}) => {
    const [signUpData, setSignUpData] = useState({username: null, email: null, password: null, passwordVerif: null});
    const [logInData, setLogInData] = useState({username: null, password: null});
    const navigate = useNavigate();

    const updateLogIn = (name, value) => ({
        username: () => setLogInData(input => ({...input, username: value})),
        password: () => setLogInData(input => ({...input, password: value})),
    })[name]()

    const updateSignUp = (name, value) => ({
        username     : () => setSignUpData(input => ({...input, username: value})),
        email        : () => setSignUpData(input => ({...input, email: value})),
        password     : () => setSignUpData(input => ({...input, password: value})),
        passwordVerif: () => setSignUpData(input => ({...input, passwordVerif: value})),
    })[name]()

    const userInput = (e) => {
        try {
            const { name, value } = e.target, form = e.target.closest("form").className;
            form === 'login__form' ? updateLogIn(name, value) : updateSignUp(name, value);
        }catch (error) {
            console.log("%c An internal error occured in the form, please do not change the html attributes.", "color:red;");
        }
    }

    const triggerShift = (e) => {
        window.location.hash = window.location.hash === "#signUp" ? "#logIn" : "#signUp"
    }

    return (
        <>
            <main className="auth">
                <div className="marg" />
                <div className="auth-content">
                    <Login submit={login} refresh={refresh} data={logInData} event={userInput} navigate={navigate}/>
                    <AuthSwitch data={init(useLocation().hash)} event={triggerShift}/>
                    <SignUp submit={signup} data={signUpData} event={userInput}/>
                </div>
            </main>
            <Background color={"darkblue"}/>
        </>
    )
}

export default AuthLayout;