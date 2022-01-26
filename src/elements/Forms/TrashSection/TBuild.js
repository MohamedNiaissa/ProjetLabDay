import React from "react";

class TBuild extends React.Component {
    render() {
        return (
            <>
                <div id="ezpfdbe" className="form_name">
                    <input className="input_name" type="text" name="product" minLength = "2" maxLength="40" 
                        placeholder="Nom de l'objet" onChange={this.props.event}>
                    </input>
                </div>

                <div id="nfozxfm" className="form_material">
                    <select required name="material" onChange={this.props.event}>
                        <option value="" defaultValue hidden>Choisissez un matériel</option>
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
                </div>

                <div id="xbanolm" className="form_checkbox">
                    <label>Veuillez cocher cette case si l'objet est volumineux :</label>
                    <input className="input_checkbox" type="checkbox" name="checkbox" onChange={this.props.event}></input>
                </div>

                <div id="fpvzmxn" className="T_form_coord">
                    <div id="postal" className='coord_zip' class="flex">
                        <input className="input_zip" type="text" name="map" minLength = "1" maxLength="5" 
                                placeholder="Code postal :" onChange={this.props.event}>
                        </input>
                    </div>
                    <div id="com" className="coord_city" class="flex">
                        <select required id="city" name="map" onChange={this.props.event}>
                            <option value="" defaultValue hidden>Choisissez votre commune</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default TBuild;