
import $ from 'jquery';
import React from "react";

class Jquery extends React.Component{
    componentDidMount(){

        $(document).ready(function(){
            alert('ggg')
            const apiUrl = "https://geo.api.gouv.fr/communes?codePostal=";
            const format = '&format=json'; //on récupère les données en format JSON
        
            let zipcode = $("#zipcode"); let city = ('#city'); let errorMessage=('#error-message');
        
        
        
            $(zipcode).on('blur', function(){   
                let code = $(this).val();  
               // console.log(code);
                let url = apiUrl+code+format;
                //console.log(url)
        
                fetch(url, {method: 'get'}).then(response => response.json()).then(results => {    
                    // console.log(results);
        
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
    
    

}

export default Jquery