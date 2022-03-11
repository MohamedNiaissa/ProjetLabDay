const Signup = ({submit, event}) => (
    <div className="signup">
        <div className="signup__title">
            <h2>Créer votre compte</h2>
        </div>
        <form className="signup__form" onSubmit={(e) => { e.preventDefault(); submit()}}>
            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="text" name="username" minLength = "1" maxLength="40" 
                            onChange={event} required/>
                        <label htmlFor="design-field">Pseudo :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="email" name="email" minLength = "1" maxLength="40" 
                            onChange={event} required/>
                        <label htmlFor="design-field">Adresse email :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="password" name="password" minLength = "1" maxLength="40" 
                            onChange={event} required/>
                        <label htmlFor="design-field">Mot de passe :</label>
                        <span className="simple-underline"></span>
                    </div>
                </div>
            </div>

            <div className="signup-field">
                <div className="second-design">
                    <div className="second-design-content">
                        <input className="design-field" type="password" name="passwordVerif" minLength = "1" maxLength="40" 
                            onChange={event}required/>
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