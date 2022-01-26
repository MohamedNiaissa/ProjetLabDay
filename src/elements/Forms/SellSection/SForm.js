import React from "react";
import SBuild from "./SBuild";
import cities from "../../../Cities";
import ManageLinks from "../../ManageLinks";
import image from "../../../img/test.jpg"

class SForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            verify: { product: null, material: false, location: null, form: null },
        }

        this.product = { name: null, material: null }
        this.city    = { name: null, zip: null, department: null, lat: null, long: null, found: false }
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {
        const com = document.getElementById("city")
        let validated = this.state.verify;

        switch(fieldName) {
            case "product":
                validated.product = (!value.match(/[^a-zéèêâà']/i) && value.length >= 2) ? true : false;
                e.target.className = (validated.product) ? "validP" : "invalidP";
                this.product.name = value;
                break;
            case "material":
                validated.material = (value !== "default") ? true : false;
                this.product.material = value;
                break;
            case "map":
                if(e.target.id !== "city") {
                    const arrayData = cities.filter(cityData => cityData.zip === value);
                    validated.location = (arrayData.length !== 0) ? true : false;
                    e.target.className = (validated.location) ? "validL" : "invalidL";
                    this.city.zip = value;

                    if(validated.location) {
                        validated.location = false;
                        this.city.found = true;
                        arrayData.forEach(cityData => {
                            const option = document.createElement('option');
                            option.innerHTML = cityData.name + ", " + cityData.department;
                            com.appendChild(option)
                        })
                    }else {
                        this.city.found = false;
                        const option = document.createElement('option');
                        com.innerHTML = '';
                        option.innerHTML = "...";
                        option.value = "default";
                        option.setAttribute("defaultValue","defaultValue");
                        option.style.display = "none";
                        com.appendChild(option);
                    }
                } else {
                    validated.location = (value !== "default" && this.city.found) ? true : false;

                    if(validated.location) {
                        const name_dep = value.split(", ");
                        const self = this;
                        self.city.name = name_dep[0];
                        self.city.department = name_dep[1];
                        
                        cities.find(function(city) {
                            if((city.name === self.city.name) && (city.zip === self.city.zip) && (city.department === self.city.department)) {
                                self.city.lat = city.lat;
                                self.city.long = city.long;
                            }
                            
                            return null;
                        })
                        console.log(this.city)
                    }
                }
                break;
            default: break;
        }
        validated.form = this.state.verify.product && this.state.verify.material && this.state.verify.location;
        this.setState(this.state.verify = validated);
        console.log(validated)
    }

    TF_settings = [
        {   
            id: "zeacnvv",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Nom de l'objet :" },
            inputForm: { className: '', type: "text", name: "product" },
        },{ 
            id: "ttyuibz",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Quelle est la matière principale de votre objet ?" },
            inputForm: { className: '', type: "text", name: "material" },
        },{
            id: "nbzajcr",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Localisation" },
            inputForm: { className: '', type: "text", name: "map" },
        },
    ]

    render() {
        return (
            <section className="form_section">
                <div className="form_template">
                    <div className="form_style">
                        <img className="form_picture" src={image}/>
                    </div>
                    <div className="form_container"> 
                        <form id="SForm" className="form">
                            { this.TF_settings.map((setAtt) => <SBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }
                            <ManageLinks link={"/vendre/resultats"} product={this.product} city={this.city} disabled={!this.state.verify.form}/>
                        </form>
                    </div>
                </div>
            </section>
        )
    } 
}

export default SForm;