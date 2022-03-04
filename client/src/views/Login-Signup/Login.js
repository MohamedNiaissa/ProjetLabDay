import React from "react";


const Login = () => (
    <div className="login-wrapper">
        <div className="login-title">
            <h2 >Connectez vous</h2>
        </div>
        <form className="login">
            <div className="login-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="email" name="email" minLength = "1" maxLength="40" required/>
                        <label htmlFor="design-field">Adresse email :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="login-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="password" name="pass" minLength = "1" maxLength="40" required/>
                        <label htmlFor="design-field">Mot de passe :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="login-field">
                <button className="design-field" name="submit" value="Envoyer">Envoyer</button>
            </div>
        </form>
    </div>
)

export default Login;