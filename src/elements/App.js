import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import CoreMenu from "./CoreMenu";
import FunctionalitiesInfo from "./FunctionalitiesInfo";
import SellForm from "./Forms/SellForm";
import GiveForm from "./Forms/GiveForm";
import ThrowForm from "./Forms/ThrowForm";
import $ from 'jquery'
import Givefonctionnality from './FormFonctionnalities/Givefonctionnality'
import Jquery from "./FormFonctionnalities/Givefonctionnality";
class App extends React.Component {
    
    componentDidMount(){

        $(document).ready(function(){
          //  alert('ggg')
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

    
    
    render() {

        return (


            <>
            
                <section id="NavBar">
                    <NavBar />
                </section>
                <section id="Core">
                    <Router>
                        <Switch>
                            <Route path="/" element={<><CoreMenu /><FunctionalitiesInfo /></>}/>
                            <Route path="/Vendre" element={<><CoreMenu /><SellForm /></>}/>
                            <Route path="/Donner" element={<><CoreMenu /><GiveForm /></>}/>
                            <Route path="/Jeter" element={<><CoreMenu /><ThrowForm /></>}/>
                        </Switch>
                    </Router>

                    
                </section>

            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="Givefonctionnality.js"></script>
            </>
        )
    }
}

export default App;