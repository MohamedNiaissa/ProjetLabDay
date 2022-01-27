import React from "react";
import $ from 'jquery';
import GBuild from "./GBuild";
import image from "../../../img/test.jpg"
import ManageLinks from "../../ManageLinks";

class GForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            displayM : "",
           // bouton : "disable"
        }
    }

    verifyButtonState(){
    
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
                <section className="form_section">
                    <div className="form_template">
                        <div className="form_style">
                            <img className="form_picture" src={image} alt="pic"/>
                        </div>
                        <div className="form_container"> 
                            <form id="GForm" className="form">
                                <div className="GForm_Title">
                                        <h2>Formulaire Donner</h2>
                                </div>
                                <div className="GForm_Content">
                                    <GBuild {...this.props} event={this.handleSubmit} />
                                </div>
                                <div className="GForm_Button">
                                    <ManageLinks link={"/donner/resultats"} disabled={this.state.bouton}/>
                                </div>
                            </form> 
                        </div>
                    </div>
                    {this.state.displayM}
                </section>
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script src="script.js"></script>
            </>
        )
    } 
}

export default GForm;