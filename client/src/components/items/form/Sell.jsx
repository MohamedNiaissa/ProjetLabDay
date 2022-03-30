const Sell = ({event}) => (
<>
    <div id="zeacnvv" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="product" minLength = "1" maxLength="40" 
                    onChange={event} autoComplete="off" required/>
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
                    <option value="plastique">Plastique</option>
                    <option value="textile">Textiles</option>
                    <option value="cuir">Cuir</option>
                    <option value="papier_carton">Papier ou Carton</option> 
                    <option value="caoutchouc">Caoutchouc</option>
                </select>
                <label htmlFor="design-field"><strong>Matériel de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>
</>
)

export default Sell;