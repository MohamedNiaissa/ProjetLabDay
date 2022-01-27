import React from "react";

class CBuild extends React.Component {
    render() {
        return (
            <>
                <div id="zfjfkzv" className="form_topic">
                    <select className="select_topic" name="topic" onChange={this.props.event} required>
                            <option value="" defaultValue hidden>Choisissez un sujet</option>
                            <option value="Proposition d'amélioration">Proposition d'amélioration</option>
                            <option value="Raport d'un bug">Raport d'un bug</option>
                    </select>
                </div>

                <div id="plfbszd" className="form_email">
                    <input className="input_email" type="email" name="email" minLength = "2" maxLength="40" 
                           placeholder="Saisissez votre email :" onChange={this.props.event}>
                    </input>
                </div>

                <div id="ijconxa" className="form_textarea">
                    <textarea className="textarea_content" type="text" name="textArea" placeholder="Votre message :"
                              maxLength={1000} onChange={this.props.event}>
                    </textarea>
                </div>
            </>
        )
    }
}

export default CBuild;