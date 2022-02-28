import React from "react";


const SBuild = ({event}) => (
<>
    <div id="zeacnvv" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <input className="content-d" type="text" name="product" minLength = "1" maxLength="40" onChange={event} required/>
                <label className="label-animation" htmlFor="content-d"><strong>Nom de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="ttyuibz" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <select className="content-d" name="material" onChange={event} required>
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
                <label className="label-animation" htmlFor="content-data"><strong>Matériel de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="nbzajcr" className='form-field'>
        <div className="form-docker">
            <div className="form-container">
                <input className="content-d" type="text" name="zip" minLength = "1" maxLength="5" 
                        onChange={event} required/>
                <label className="label-animation" htmlFor="content-d"><strong>Code Postal :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="jzbfkjb" className="form-field">
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

export default SBuild;