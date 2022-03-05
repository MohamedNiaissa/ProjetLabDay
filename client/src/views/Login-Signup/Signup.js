import React from "react";


const Signup = () => (
    <div className="signup">
        <div className="signup__title">
            <h2>Créer votre compte</h2>
        </div>
        <form className="signup__form">
            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="email" name="email" minLength = "1" maxLength="40" required/>
                        <label htmlFor="design-field">Adresse email :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="password" name="pass" minLength = "1" maxLength="40" required/>
                        <label htmlFor="design-field">Mot de passe :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="password" name="pass2" minLength = "1" maxLength="40" required/>
                        <label htmlFor="design-field">Verification du mot de passe :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <button className="auth-button col-origin" name="submit" value="Envoyer">Envoyer</button>
            </div>
        </form>
    </div>
)

export default Signup;