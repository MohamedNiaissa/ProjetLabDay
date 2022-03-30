const Sell = ({event}) => (
<>
    <div id="zeacnvv" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="product" minLength = "1" maxLength="40" onChange={event} required/>
                <label htmlFor="design-field"><strong>Nom de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="ttyuibz" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <select className="design-field" name="material" onChange={event} required>
                    <option value="" defaultValue hidden/>
                    <option value="smartphone">Smartphone</option>
                    <option value="electronique">Électronique</option>
                    <option value="livre">livre</option>
                    <option value="vehicule">Véhicule</option>
                    <option value="immobilier">Immobilier</option>
                    <option value="jeux-video">Jeux-Video</option>
                    <option value="vetement">Vêtements</option>
                    <option value="esthetique">Ésthetique</option>
                    <option value="meuble">Meuble</option>
                    <option value="sport">Sport</option> 
                    <option value="bebe">Bébé</option>
                </select>
                <label htmlFor="design-field"><strong>Catégorie de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    {/* <div id="nbzajcr" className='form-field'>
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="zip" minLength = "1" maxLength="5" 
                        onChange={event} required/>
                <label htmlFor="design-field"><strong>Code Postal :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="jzbfkjb" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <select id="city" className="design-field" name="city" onChange={event} required>
                    <option value="" defaultValue hidden/>
                </select>
                <label htmlFor="design-field"><strong>Ville :</strong></label>
                <span></span>
            </div>
        </div>
    </div> */}
</>
)

export default Sell;