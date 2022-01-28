import React from "react";

class CBuild extends React.Component {
    render() {
        return (
            <>
                <div id="zfjfkzv" className="form_topic">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <select className="select_topic" name="topic" onChange={this.props.event} required>
                                <option value="" defaultValue hidden/>
                                <option value="Proposition d'amélioration">Proposition d'amélioration</option>
                                <option value="Raport d'un bug">Raport d'un bug</option>
                            </select>
                            <label className="topic_label" htmlFor="select_topic">Liste de topics :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="plfbszd" className="form_email">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <input className="input_email" type="email" name="email" minLength = "1" maxLength="40" 
                                    onChange={this.props.event} required/>
                            <label className="email_label" htmlFor="input_email">Adresse email :</label>
                            <span className="underline"></span>
                        </dd>
                    </dl>
                </div>

                <div id="ijconxa" className="form_textarea">
                    <dl className="inputbox">
                        <dd className="inputbox-content">
                            <textarea className="text_content"  type="text" name="textArea" placeholder="Description de votre requête :" 
                                      minLength="1" maxLength={1000} onChange={this.props.event} required/>
                            {/* <label className="content_label" htmlFor="text_content">Description du produit :</label>
                            <span className="underline"></span> */}
                        </dd>
                    </dl>
                </div>
            </>
        )
    }
}

export default CBuild;