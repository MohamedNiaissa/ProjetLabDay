import React from "react";


const Login = () => (
    <div className="login-wrapper">
        <div className="login-title">
            <h2 >Connectez vous</h2>
        </div>
        <form className="login">
            <div className="login-field">
                <div className="inputbox">
                    <div className="inputbox-content">
                        <input className="content-data" type="email" name="email" minLength = "1" maxLength="40" required/>
                        <label className="label-animation" htmlFor="content-data">Adresse email :</label>
                        <span className="underline-animation"></span>
                    </div>
                </div>
            </div>

            <div className="login-field">
                <div className="inputbox">
                    <div className="inputbox-content">
                        <input className="content-data" type="password" name="pass" minLength = "1" maxLength="40" required/>
                        <label className="label-animation" htmlFor="content-data">Mot de passe :</label>
                        <span className="underline-animation"></span>
                    </div>
                </div>
            </div>

            <div className="login-field">
                <button className="content-data" name="submit" value="Envoyer">Envoyer</button>
            </div>
        </form>
    </div>
)

export default Login;