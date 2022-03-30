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
                    <option value="bois">Bois</option>
                    <option value="metal">Métal</option>
                    <option value="ceramique">Céramique</option>
                    <option value="verre">Verre</option>
                    <option value="plastique">Véhicule</option>
                    <option value="textile">Vêtements</option>
                    <option value="cuir">Meuble</option>
                    <option value="papier_carton">Sport</option> 
                    <option value="bebe">Bébé</option>
                </select>
                <label htmlFor="design-field"><strong>Matériel de l'objet :</strong></label>
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