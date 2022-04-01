const Give = ({event, locChecked}) => ( 
<>
    <div id="zfzefff" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="product" minLength = "1" maxLength="40" 
                        onChange={event} autoComplete="off" required/>
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
                    <option value="cassé/e">Cassé/e</option>
                    <option value="en mauvais état">Mauvaise état</option>
                    <option value="en moyen état">Moyen état</option>
                    <option value="en bon état">Bon état</option> 
                    <option value="en très bon état">Très bon état</option>
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
                        onChange={event} autoComplete="off" required/>
                <label htmlFor="design-field"><strong>Code Postal :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="zoenzc" className="form-field" disabled={locChecked ? true : false}>
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

export default Give;