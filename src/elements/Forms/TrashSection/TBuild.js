import React from "react";

class TBuild extends React.Component {
    render() {
        return (
            <>
                <div id="xbanolm" className="form_checkbox">
                    <label>L'objet est volumineux ? (Optionel)</label>
                    <input className="input_checkbox" type="checkbox" name="checkbox" onChange={this.props.event}></input>
                </div>

                <div id="ezpfdbe" className="form_name">
                    <input className="input_name" type="text" name="product" minLength = "2" maxLength="40" 
                        placeholder="Nom de l'objet" onChange={this.props.event}>
                    </input>
                </div>

                <div id="nfozxfm" className="form_material">
                    <select className="select_mat" name="material" onChange={this.props.event} required>
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

                <div id="fpvzmxn" className="form_coord_zip" style={{display: "none"}}>
                    <input className="input_zip" type="text" name="map" minLength = "1" maxLength="5" 
                            placeholder="Code postal :" onChange={this.props.event}>
                    </input>
                </div>

                <div id="ibizbef" className="form_coord_city" style={{display: "none"}}>
                    <select id="city" className="select_city" name="map" onChange={this.props.event} required>
                        <option value="" defaultValue hidden>Choisissez votre commune</option>
                    </select>
                </div>
            </>
        )
    }
}

export default TBuild;