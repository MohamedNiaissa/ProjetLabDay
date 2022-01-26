import React from "react";

class GBuild extends React.Component {
    render() {
        return (
            <>
                <div id="zfzefff" className="form_name">
                    <input className="input_name" type="text" name="product" minLength = "2" maxLength="40" 
                        placeholder="Nom de l'objet" onChange={this.props.event}>
                    </input>
                </div>

                <div id="fuusrtd" className="form_state">
                    <select required name="state" onChange={this.props.event}>
                        <option value="" defaultValue hidden>Choisissez un état</option>
                        <option value="casse">Cassé</option>
                        <option value="mauvaisetat">Mauvaise état</option>
                        <option value="moyen">Moyen</option>
                        <option value="bon" >Bon état</option> 
                        <option value="tresbon">Très bon état</option>
                    </select>
                </div>

                <div id="ijorger" className="form_coord">
                    <div id="postal" className='coord_zip'>
                        <input id="zipcode" className="input_zip" type="text" name="map" minLength = "1" maxLength="5" 
                                placeholder="Code postal :" onChange={this.props.event}>
                        </input>
                    </div>
                    <div id="com" className="coord_city">
                        <select required id="city" name="map" onChange={this.props.event}>
                            <option value="" defaultValue hidden>Choisissez votre commune</option>
                        </select>
                    </div>
                </div>
                
                <div id="opajeio" className="form_content">
                    <textarea id="commentaireDonner" placeholder="Votre message :" maxLength={500}></textarea> 
                </div>
            </>
        )
    }
}

export default GBuild;