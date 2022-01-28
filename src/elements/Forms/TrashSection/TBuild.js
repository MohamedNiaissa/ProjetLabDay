import React from "react";

class TBuild extends React.Component {
    render() {
        return (
            <>
                <div id="xbanolm" className="form_checkbox">
                    <label>L'objet est-il volumineux ? (Optionel)</label>
                    <input className="input_checkbox" type="checkbox" name="checkbox" onChange={this.props.event}></input>
                </div>

                <div id="ezpfdbe" className="form_name">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="input_name" type="text" name="product" minLength = "1" maxLength="40" 
                                   onChange={this.props.event} required/>
                            <label className="name_label" htmlFor="input_name">Nom de l'objet :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="nfozxfm" className="form_material">
                <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select className="select_mat" name="material" onChange={this.props.event} required>
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
                            <label className="select1_label" htmlFor="select_mat">Matériel de l'objet :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="fpvzmxn" className="form_coord_zip" disabled>
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="input_zip" type="text" name="map" minLength = "1" maxLength="5" 
                                    onChange={this.props.event} required/>
                            <label className="zip_label" htmlFor="input_zip">Code Postal :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="ibizbef" className="form_coord_city" disabled>
                <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select id="city" className="select_city" name="map" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                            </select>
                            <label className="select2_label" htmlFor="select_city">Ville :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
}

export default TBuild;