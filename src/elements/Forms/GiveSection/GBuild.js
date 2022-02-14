import React from "react";

class GBuild extends React.Component { 
    render() {
        return (
            <>
                <div id="zfzefff" className="form-field">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="content-data" type="text" name="product" minLength = "1" maxLength="40" 
                                   onChange={this.props.event} required/>
                            <label className="label-animation" htmlFor="content-data">Nom de l'objet :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>

                <div id="fuusrtd" className="form-field">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select className="content-data" name="state" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                                <option value="casse">Cassé</option>
                                <option value="mauvaisetat">Mauvaise état</option>
                                <option value="moyen">Moyen</option>
                                <option value="bon" >Bon état</option> 
                                <option value="tresbon">Très bon état</option>
                            </select>
                            <label className="label-animation" htmlFor="content-data">Etat de l'objet :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>

                <div id="ijorger" className='form-field'>
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="content-data" type="text" name="map" minLength = "1" maxLength="5" 
                                    onChange={this.props.event} required/>
                            <label className="label-animation" htmlFor="content-data">Code Postal :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>

                <div id="zoenzc" className="form-field">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select id="city" className="content-data" name="map" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                            </select>
                            <label className="label-animation" htmlFor="content-data">Ville :</label>
                            <span className="underline-animation"></span>
                        </dd>
                    </dl>
                </div>
                
                <div id="opajeio" className="form-field">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <textarea className="label-animation" name="textArea" placeholder="Description du produit :" minLength="1" maxLength={500}/>
                            {/* <label className="content_label" htmlFor="text_content">Description du produit :</label>
                            <span className="underline-animation"></span> */}
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
}

export default GBuild;