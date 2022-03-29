const Credentials = ({upEmail, upPwd}) => (
    <div className="options">
        <div className="options-title">
            <h1>Paramètres de compte</h1>
        </div>

        <div className="options-content">
            <form className="option-block" autoComplete="off">
                <div className="email-title">
                    <h3>Changer d'email :</h3>
                </div>
                <div className="email-fields">
                    <div className="email-field">
                        <label htmlFor="new-email">Email :</label>
                        <input id="new-email" name="email" type="email" />
                    </div>
                    <div className="email-field">
                        <label htmlFor="current-password-one">Mot de passe :</label>
                        <input id="current-password-one" name="password" type="password"/>
                    </div>
                </div >

                <div className="options-content-button">
                    <button className="button col-white" onClick={upEmail}>Sauvegarder les modifications</button>
                </div>
            </form>

            <form className="option-block" autoComplete="off">
                <div className="password-title">
                    <h3>Changer de mot de passe :</h3>
                </div>
                <div className="password-fields">
                    <div className="password-field">
                        <label htmlFor="current-password-two">Ancien mot de passe :</label>
                        <input id="current-password-two" name="oldpassword" type="password"></input>
                    </div>
                    <div className="password-field">
                        <label htmlFor="new-password">Nouveau mot de passe :</label>
                        <input id="new-password" name="newpassword" type="password"></input>
                    </div>
                    <div className="password-field">
                        <label htmlFor="new-password-verif">Vérification :</label>
                        <input id="new-password-verif" name="verifpassword" type="password"></input>
                    </div>
                </div>

                <div className="options-content-button">
                    <button className="button col-white" onClick={upPwd}>Sauvegarder les modifications</button>
                </div>
            </form>
        </div>
    </div>
)

export default Credentials;