import React from "react";


const Signup = () => (
    <div className="signup-wrapper">
        <div className="signup-title">
            <h2>Créer votre compte</h2>
        </div>
        <form className="signup">
            <div className="signup-field">
                <div className="inputbox">
                    <div className="inputbox-content">
                        <input className="content-data" type="email" name="email" minLength = "1" maxLength="40" required/>
                        <label className="label-animation" htmlFor="content-data">Adresse email :</label>
                        <span className="underline-animation"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="inputbox">
                    <div className="inputbox-content">
                        <input className="content-data" type="password" name="pass" minLength = "1" maxLength="40" required/>
                        <label className="label-animation" htmlFor="content-data">Mot de passe :</label>
                        <span className="underline-animation"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="inputbox">
                    <div className="inputbox-content">
                        <input className="content-data" type="password" name="pass2" minLength = "1" maxLength="40" required/>
                        <label className="label-animation" htmlFor="content-data">Verification du mot de passe :</label>
                        <span className="underline-animation"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <button className="content-data" name="submit" value="Envoyer">Envoyer</button>
            </div>
        </form>
    </div>
)

export default Signup;