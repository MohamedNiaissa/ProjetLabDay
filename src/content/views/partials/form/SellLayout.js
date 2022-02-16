import React from "react";


const SBuild = ({event}) => (
<>
    <div id="zeacnvv" className="form-field">
        <dl className="inputbox">
            <dd className="inputbox-content">
                <input className="content-data" type="text" name="product" minLength = "1" maxLength="40" 
                        onChange={event} required/>
                <label className="label-animation">Nom de l'objet :</label>
                <span className="underline-animation"></span>
            </dd>
        </dl>
    </div>

    <div id="ttyuibz" className="form-field">
        <dl className="inputbox">
            <dd className="inputbox-content">
                <select className="content-data" name="material" onChange={event} required>
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
                <label className="label-animation" htmlFor="content-data">Matériel de l'objet :</label>
                <span className="underline-animation"></span>
            </dd>
        </dl>
    </div>

    <div id="nbzajcr" className='form-field'>
        <dl className="inputbox">
            <dd className="inputbox-content">
                <input className="content-data" type="text" name="zip" minLength = "1" maxLength="5" 
                        onChange={event} required/>
                <label className="label-animation" htmlFor="content-data">Code Postal :</label>
                <span className="underline-animation"></span>
            </dd>
        </dl>
    </div>

    <div id="jzbfkjb" className="form-field">
        <dl className="inputbox">
            <dd className="inputbox-content">
                <select id="city" className="content-data" name="city" onChange={event} required>
                    <option value="" defaultValue hidden/>
                </select>
                <label className="label-animation" htmlFor="content-data">Ville :</label>
                <span className="underline-animation"></span>
            </dd>
        </dl>
    </div>
</>
)

export default SBuild;