import React from "react";


class GiveForm extends React.Component {
    render() {
        return (
        
            <form id="GiveForm">

                <div>
                    <label >Nom de l'objet</label>
                    <input type= {Text} minLength = "2" maxLength="40" required></input>
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
                    <input type= {Text} minLength = "2" maxLength="40" required></input>
                </div>


                <div>
                    <label >Commentaires</label>
                    <textarea maxLength={500}></textarea><br/>

                </div>  
                
                    <button type="button">Chercher</button>
            </form>

        )
    } 
}

export default GiveForm;