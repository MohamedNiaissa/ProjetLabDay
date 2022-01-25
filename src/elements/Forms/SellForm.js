import React from "react";
import SellFormBuild from "./SellFormBuild";
import cities from "../../Cities";

class SellForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          isProductValid:  { regex: false, length: false },
          isFormValid: { product: null, material: false, location: null, validity: null },
          city: '',
        }
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {

        let formValidity = this.state.isFormValid;
        let productRGX   = this.state.isProductValid.regex;
        let productLEN   = this.state.isProductValid.length;

        switch(fieldName) {
            case "product":
                productRGX   = !value.match(/[^a-z0-9]/i);
                productLEN   = value.length >= 2;
                formValidity.product = (productRGX && productLEN) ? true : false;
                e.target.className = (formValidity.product) ? "validP" : "invalidP";
                break;
            case "material":
                formValidity.material = (value !== "...") ? true : false;
                break;
            case "map":
                const zip = cities.filter(obj => obj.zip === value);
                formValidity.location = (zip.length !== 0) ? true : false;
                if(formValidity.location) {
                    const com = document.getElementById("city")
                    zip.forEach(city => {
                        const option = document.createElement('option');
                        option.innerHTML = city.name;
                        com.appendChild(option)
                    })
                }else {
                    const com = document.getElementById("city");
                    const option = document.createElement('option');
                    com.innerHTML = '';
                    option.innerHTML = '...';
                    option.setAttribute('defaultValue',"defaultValue");
                    option.style.display = "none";
                    com.appendChild(option);
                }
                e.target.className = (formValidity.location) ? "validL" : "invalidL";
                break;
            default: break;
        }

        formValidity.validity = this.state.isFormValid.product && this.state.isFormValid.material && this.state.isFormValid.location;
        this.setState(this.state.isFormValid = formValidity);
        console.log(formValidity)
      }

    TF_settings = [
        {   
            id: "zeacnvv",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Nom de l'objet :" },
            inputForm: { className: '', type: "text", name: "product" },
        },{ 
            id: "ttyuibz",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Quelle est la matière principale de votre objet ?" },
            inputForm: { className: '', type: "text", name: "material" },
        },{
            id: "nbzajcr",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Localisation :" },
            inputForm: { className: '', type: "text", name: "map" },
        },
    ]

    render() {
        return (
            <form id="TrashForm">
                { this.TF_settings.map((setAtt) => <SellFormBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }

                <button type="button" ref={e => (this.btn = e)} disabled={!this.state.isFormValid.validity}>Chercher</button>
            </form>
        )
    } 
}

export default SellForm;