const Theme = () => (
    <div className="options">
        <div className="options-title">
            <h1>Paramètres d'affichage</h1>
        </div>

        <div className="options-content">
            <form className="option-block" autoComplete="off">
                <div className="options-content-email">
                    <div className="email-title">
                        <h3>Changer de theme</h3>
                    </div>
                    <div>
                        <option></option>
                    </div>
                </div>
                <div className="options-content-button">
                    <button className="button">Sauvegarder les modifications</button>
                </div>
            </form>
        </div>
    </div>
)

export default Theme;