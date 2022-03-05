const GBuild = ({event}) => ( 
<>
    <div id="zfzefff" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="product" minLength = "1" maxLength="40" 
                        onChange={event} required/>
                <label htmlFor="design-field"><strong>Nom de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="fuusrtd" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <select className="design-field" name="state" onChange={event} required>
                    <option value="" defaultValue hidden/>
                    <option value="casse">Cassé</option>
                    <option value="mauvaisetat">Mauvaise état</option>
                    <option value="moyen">Moyen</option>
                    <option value="bon">Bon état</option> 
                    <option value="tresbon">Très bon état</option>
                </select>
                <label htmlFor="design-field"><strong>Etat de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="ijorger" className='form-field'>
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="zip" minLength = "1" maxLength="5" 
                        onChange={event} required/>
                <label htmlFor="design-field"><strong>Code Postal :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="zoenzc" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <select id="city" className="design-field" name="city" onChange={event} required>
                    <option value="" defaultValue hidden/>
                </select>
                <label htmlFor="design-field"><strong>Ville :</strong></label>
                <span></span>
            </div>
        </div>
    </div>
</>
)

export default GBuild;