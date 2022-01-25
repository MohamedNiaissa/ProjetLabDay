import React from "react";
import TBuild from "./TBuild";
import cities from "../../Cities";
import ManageLinks from "../ManageLinks";

class TForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            cboxChecked: false,
            verify: { product: null, material: false, location: true, form: null },
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
        const loc = document.getElementById("fpvzmxn");
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
            case "checkbox":
                this.state.cboxChecked = !this.state.cboxChecked;
                if(this.state.cboxChecked) {
                    loc.style.display = "inline";
                    const index = cities.findIndex(cityData => cityData.zip === this.city.zip);
                    validated.location = (index !== -1) ? true : false;
                }else {
                    loc.style.display = "none";
                    validated.location = true;
                }
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
                        console.log(self)
                        cities.find(function(city) {
                            if((city.name === self.city.name) && (city.zip === self.city.zip) && (city.department === self.city.department)) {
                                self.city.lat = city.lat;
                                self.city.long = city.long;
                                console.log("found")
                            }
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
            id: "ezpfdbe",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Nom de l'objet :" },
            inputForm: { className: '', type: "text", name: "product" },
        },{ 
            id: "nfozxfm",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Quelle est la matière principale de votre objet ?" },
            inputForm: { className: '', type: "text", name: "material" },
        },{
            id: "xbanolm",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Veuillez cocher cette case si l'objet est volumineux :" },
            inputForm: { type: "checkbox", name: "checkbox" },
        },{
            id: "fpvzmxn",
            divForm:   { className: "FormGroup", display: "none" },
            labelForm: { text: "Localisation :" },
            inputForm: { className: '', type: "text", name: "map" },
        }
    ]
    
    handleResearch = () => {
        if(this.state.cboxChecked) {
            return '/jeter/decharge'
        }else {
            return "/jeter/poubelles-ecologiques"
        }
    }

    render() {
        return (
            <form id="TForm">
                { this.TF_settings.map((setAtt) => <TBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }
                <ManageLinks link={this.handleResearch()} product={this.product} city={this.city} disabled={!this.state.verify.form}/>
            </form>
        )
    } 
}
export default TForm;

