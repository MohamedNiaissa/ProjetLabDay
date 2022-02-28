import React from "react";


const ContactLayout = ({event}) => (
<>
    <div id="zfjfkzv" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <select className="content-d" name="topic" onChange={event} required>
                    <option value="" defaultValue hidden/>
                    <option value="Proposition d'amélioration">Proposition d'amélioration</option>
                    <option value="Raport d'un bug">Raport d'un bug</option>
                </select>
                <label className="label-animation" htmlFor="content-d"><strong>Liste de topics :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="plfbszd" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <input className="content-d" type="email" name="email" minLength = "1" maxLength="40" 
                        onChange={event} required/>
                <label className="label-animation" htmlFor="content-d"><strong>Adresse email :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="ijconxa" className="form-field">
        <div className="form-docker">
            <div className="form-container">
                <textarea className="content-d" type="text" name="textarea" placeholder="Description de votre requête :" 
                            minLength="1" maxLength={1000} onChange={event} required/>
            </div>
        </div>
    </div>
</>
)

export default ContactLayout;