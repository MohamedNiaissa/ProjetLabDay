import React from "react";


const GBuild = ({event}) => ( 
<>
    <div id="zfzefff" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <input className="content-d" type="text" name="product" minLength = "1" maxLength="40" 
                        onChange={event} required/>
                <label className="label-animation" htmlFor="content-d"><strong>Nom de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="fuusrtd" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <select className="content-d" name="state" onChange={event} required>
                    <option value="" defaultValue hidden/>
                    <option value="casse">Cassé</option>
                    <option value="mauvaisetat">Mauvaise état</option>
                    <option value="moyen">Moyen</option>
                    <option value="bon">Bon état</option> 
                    <option value="tresbon">Très bon état</option>
                </select>
                <label className="label-animation" htmlFor="content-d"><strong>Etat de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="ijorger" className='form-field'>
        <div className="form-docker">
            <div className="form-container">
                <input className="content-d" type="text" name="zip" minLength = "1" maxLength="5" 
                        onChange={event} required/>
                <label className="label-animation" htmlFor="content-d"><strong>Code Postal :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="zoenzc" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <select id="city" className="content-d" name="city" onChange={event} required>
                    <option value="" defaultValue hidden/>
                </select>
                <label className="label-animation" htmlFor="content-d"><strong>Ville :</strong></label>
                <span></span>
            </div>
        </div>
    </div>
</>
)

export default GBuild;