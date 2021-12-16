import React from "react";
import $ from 'jquery';




class GiveForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Je clique")
    }

    render() {

        return (
            
            <>
            
            <form id="GiveForm" className="giveform" onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                    <label>Nom de l'objet</label>
                    <input type= "text" minLength = "2" maxLength="40" required autoFocus></input>
                </div>
                
                <p>
                    <label for="pays">Dans quel état est votre objet ?</label>
                    <select name="etat" id="etat" required>
                        <option value="casse">Cassé</option>
                        <option value="mauvaisetat">Mauvaise état</option>
                        <option value="moyen">Moyen</option>
                        <option value="bon" selected>Bon état</option> 
                        <option value="tresbon">Très bon état</option>
                    </select>
                </p>


                 <div>
                    <label >Localisation</label>
                    <input type= "text" minLength = "2" maxLength="40" required></input>


                <div className="codepostal">
                    <label for="codepost">Code postal</label>
                    <input type="text" placeholder="code postal" required className="inputcodepostal" id = "zipcode" />
                    <div id = "error-message"></div>
                </div>
                

                <div className="commune">
                    <label for="dep">Commune</label>
                    <select name="city" id="city" className="form-control">
                    </select>
                </div>

                
                </div>          

                <div>
                    <label >Commentaires</label>
                    <textarea maxLength={500}></textarea> 
                </div>  
                    <button type="submit" className="btnchercher">Chercher</button>
            </form>



            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="script.js"></script>

            
        </>
        )
    } 
}

export default GiveForm;