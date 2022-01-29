import React from "react";

class GBuild extends React.Component { 
    render() {
        return (
            <>
                <div id="zfzefff" className="form_name">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="input_name" type="text" name="product" minLength = "1" maxLength="40" 
                                   onChange={this.props.event} required/>
                            <label className="name_label" htmlFor="input_name">Nom de l'objet :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="fuusrtd" className="form_state">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select className="select_state" name="state" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                                <option value="casse">Cassé</option>
                                <option value="mauvaisetat">Mauvaise état</option>
                                <option value="moyen">Moyen</option>
                                <option value="bon" >Bon état</option> 
                                <option value="tresbon">Très bon état</option>
                            </select>
                            <label className="select1_label" htmlFor="select_mat">Etat de l'objet :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="ijorger" className='form_coord_zip'>
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="input_zip" type="text" name="map" minLength = "1" maxLength="5" 
                                    onChange={this.props.event} required/>
                            <label className="zip_label" htmlFor="input_zip">Code Postal :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="zoenzc" className="form_coord_city">
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
                
                <div id="opajeio" className="form_content">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <textarea className="text_content" name="textArea" placeholder="Description du produit :" minLength="1" maxLength={500}/>
                            {/* <label className="content_label" htmlFor="text_content">Description du produit :</label>
                            <span className="underline"></span> */}
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
}

export default GBuild;