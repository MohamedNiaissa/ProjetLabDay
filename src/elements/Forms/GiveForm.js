import React from "react";
import $ from 'jquery';




class GiveForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Je clique")
    }

    
    componentDidMount(){

        $(document).ready(function(){
            const apiUrl = "https://geo.api.gouv.fr/communes?codePostal=";
            const format = '&format=json'; 
            let zipcode = $("#zipcode"); let city = ('#city'); let errorMessage=('#error-message');
            $(zipcode).on('blur', function(){   
                let code = $(this).val();  
                let url = apiUrl+code+format;
                fetch(url, {method: 'get'}).then(response => response.json()).then(results => {    
                    $(city).find('option').remove(); 
                    if(results.length){  
                        $.each(results,function(key,value){     
                            $(errorMessage).text('').hide();
                            console.log(value.nom)   
                            $(city).append('<option value ="' +value.nom+ '">' +value.nom + ' </option>')
                        })
                    }else{
                        if($(zipcode).val()){
                            console.log("Erreur dans la saisie de votre code postal");
                            $(errorMessage).text('Aucune commune avec ce code postal').show();  
                        }else{
                            $(errorMessage).text('').hide(); 
                        }
                    }
        
                }).catch(err => {  
                    console.log(err);
                    $(city).find('option').remove(); 
        
                })
        
            });
        
        })
        
    }
    render() {

        return (
            
            <>

            <h1 className="titreformdonner"> Formulaire Donner </h1>
            
            <div className="divgiveform">
                <form id="GiveForm" className="giveform" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="nomObjet">
                        <label>Nom de l'objet</label>
                        <input type= "text" minLength = "2" maxLength="40" required autoFocus></input>
                    </div>
                    
                    <p>
                        <label htmlFor="pays">Dans quel état est votre objet ?</label>
                        <select name="etat" id="etat" defaultValue={'DEFAULT'} required>
                            <option value="DEFAULT" disabled >Choisissez un état</option>
                            <option value="casse">Cassé</option>
                            <option value="mauvaisetat">Mauvaise état</option>
                            <option value="moyen">Moyen</option>
                            <option value="bon" >Bon état</option> 
                            <option value="tresbon">Très bon état</option>
                        </select>
                    </p>


                    <fieldset id="fieldset">
                        <legend className="Localisation">Localisation</legend>
                    
                        <div className="codepostal">
                            <label htmlFor="codepost">Code postal</label>
                            <input type="text" placeholder="code postal" required className="inputcodepostal" id = "zipcode" />
                            <div id = "error-message"></div>
                        </div>
                        

                        <div className="commune">
                            <label htmlFor="dep">Commune</label>
                            <select name="city" id="city" className="form-control">
                            </select>
                        </div>

                        

                    </fieldset>
                    
                    <div className="commentaire">
                        <label >Commentaires</label>
                        <textarea id="commentaireDonner" maxLength={500}></textarea> 
                    </div>  
                        <button type="submit" className="btnchercher">Chercher</button>
                </form>



            </div>
            
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="script.js"></script>

            
        </>
        )
    } 
}

export default GiveForm;