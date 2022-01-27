import React from "react";

class GBuild extends React.Component {

    verifyInput(e){
        let value = e.target.value
        console.log(value)

        // value == "lol" ? true : false

    }
 
    render() {
        return (
            <>
                <div id="zfzefff" className="form_name" onInput = { (e) => this.verifyInput(e) }>
                    <input className="input_name" type="text" name="product" minLength = "2" maxLength="40" 
                        placeholder="Nom de l'objet" onChange={this.props.event}>
                    </input>
                </div>

                <div id="fuusrtd" className="form_state">
                    <select className="select_state" name="state" onChange={this.props.event} required>
                        <option value="" defaultValue hidden>Choisissez un état</option>
                        <option value="casse">Cassé</option>
                        <option value="mauvaisetat">Mauvaise état</option>
                        <option value="moyen">Moyen</option>
                        <option value="bon" >Bon état</option> 
                        <option value="tresbon">Très bon état</option>
                    </select>
                </div>

                <div id="ijorger" className='form_coord_zip'>
                    <input id="zipcode" className="input_zip" type="text" name="map" minLength = "1" maxLength="5" 
                            placeholder="Code postal :" onChange={this.props.event}>
                    </input>
                </div>

                <div id="zoenzc" className="form_coord_city">
                    <select id="city" className="select_city" name="map" onChange={this.props.event} required>
                        <option value="" defaultValue hidden>Choisissez votre commune</option>
                    </select>
                </div>
                
                <div id="opajeio" className="form_content">
                    <textarea className="text_content" id="commentaireDonner" placeholder="Votre message :" maxLength={500}></textarea> 
                </div>
            </>
        )
    }
}

export default GBuild;