import React from "react";
import ThrowFormBuild from "./ThrowFormBuild";
import allCities from "../../Cities";

class ThrowForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          isProductValid:  { regex: false, length: false },
          isFormValid: { product: null, material: false, location: true, validity: null },
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
            case "checkbox":
                const loc = document.getElementById("fpvzmxn");
                if(loc.style.display === "none") {
                    loc.style.display = "flex";
                    console.log(this.state.location)
                    const index = allCities.findIndex(obj => obj.City === this.state.city);
                    formValidity.location = (index !== -1) ? true : false;
                } else  {
                    loc.style.display = "none";
                    formValidity.location = true;
                }
                break;
            case "map":
                const index = allCities.findIndex(obj => obj.City === value);
                formValidity.location = (index !== -1) ? true : false;
                this.state.city = value;
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
            id: "ezpfdbe",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Nom de l'objet :" },
            inputForm: { className: '', type: "text", name: "product" },
        },{ 
            id: "nfozxfm",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Quelle est la matière principale de votre objet ?" },
            inputForm: { className: '', type: "text", name: "material" },
        },{
            id: "xbanolm",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Veuillez cocher cette case si l'objet est volumineux :" },
            inputForm: { type: "checkbox", name: "checkbox" },
        },{
            id: "fpvzmxn",
            divForm:   { className: "FormGroup", display: "none" },
            labelForm: { text: "Localisation :" },
            inputForm: { className: '', type: "text", name: "map" },
        },
    ]

    render() {
        return (
            <form id="ThrowForm" class="flex">
                { this.TF_settings.map((setAtt) => <ThrowFormBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }

                <button type="button" ref={e => (this.btn = e)} disabled={!this.state.isFormValid.validity}>Chercher</button>
            </form>
        )
    } 
}

export default ThrowForm;