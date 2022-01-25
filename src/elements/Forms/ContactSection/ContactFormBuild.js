import React from "react";

class ContactFormBuild extends React.Component {

    switchFormBlock() {
        if(this.props.setAtt.inputForm.name === "textArea") {
            return (
            <div id={this.props.setAtt.id} className={this.props.setAtt.divForm.className} style={{display: this.props.setAtt.divForm.display}}>
                <label>{this.props.setAtt.labelForm.text}</label>
                <textarea className={this.props.setAtt.inputForm.className} name={this.props.setAtt.inputForm.name}
                maxLength={1000} onChange={this.props.event}></textarea>
            </div>
            )
        }else if(this.props.setAtt.inputForm.name === "topic") {
            return (
            <div id={this.props.setAtt.id} className={this.props.setAtt.divForm.className} style={{display: this.props.setAtt.divForm.display}}>
                <label>{this.props.setAtt.labelForm.text}</label>
                <select name={this.props.setAtt.inputForm.name} onChange={this.props.event}>
                        <option value="..." style={{display: "none"}} defaultValue>...</option>
                        <option value="amelioration">Proposition d'amélioration</option>
                        <option value="bug">Raport d'un bug</option>
                </select>
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

export default ContactFormBuild;