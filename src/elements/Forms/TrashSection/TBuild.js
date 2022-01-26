import React from "react";

class TBuild extends React.Component {

    switchFormBlock() {
        if(this.props.setAtt.inputForm.name === "material") {
            return (
            <div id={this.props.setAtt.id} className={this.props.setAtt.divForm.className} style={{display: this.props.setAtt.divForm.display}}>
                <label>{this.props.setAtt.labelForm.text}</label>
                <select name={this.props.setAtt.inputForm.name} onChange={this.props.event}>
                    <option value="default" style={{display: "none"}} defaultValue>Choisissez un matériau</option>
                    <option value="bois">Bois</option>
                    <option value="metal">Métaux</option>
                    <option value="ceramique">Céramique</option>
                    <option value="verre">Verre</option>
                    <option value="plastique">Plastique</option>
                    <option value="textile">Textiles</option>
                    <option value="cuir">Cuir</option>
                    <option value="papier_carton">Papier / Carton</option> 
                    <option value="caoutchouc">Caoutchouc</option>
                    <option value="roche">Roche</option>
                </select>
            </div>
            )
        }else if(this.props.setAtt.inputForm.name === "map") {
            return (
            <div id={this.props.setAtt.id} className={this.props.setAtt.divForm.className} style={{display: this.props.setAtt.divForm.display}}>
                <fieldset id="fieldset" class="flex">
                    <legend className="Localisation">{this.props.setAtt.labelForm.text}</legend>
                    <div id="postal" className='postalCode'>
                        <label>Code postal :</label>
                        <input className={this.props.setAtt.inputForm.className} type={this.props.setAtt.inputForm.type} name={this.props.setAtt.inputForm.name}
                            minLength = "1" maxLength="5" onChange={this.props.event}></input>
                    </div>
                    <div id="com" className="commune">
                        <label>Commune :</label>
                        <select id="city" type={this.props.setAtt.inputForm.type} name={this.props.setAtt.inputForm.name} onChange={this.props.event}>
                            <option value="default" style={{display: "none"}} defaultValue>...</option>
                        </select>
                    </div>
                </fieldset>
            </div>
            )
        }else {
            return (
            <div id={this.props.setAtt.id} className={this.props.setAtt.divForm.className} style={{display: this.props.setAtt.divForm.display}}>
                <label>{this.props.setAtt.labelForm.text}</label>
                <input className={this.props.setAtt.inputForm.className} type={this.props.setAtt.inputForm.type} name={this.props.setAtt.inputForm.name}
                    minLength = "2" maxLength="40" onChange={this.props.event}></input>
            </div>
            )
        }
    }

    render() {
        return (this.switchFormBlock())
    }
}

export default TBuild;