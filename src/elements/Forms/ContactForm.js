import React from "react";
import ContactFormBuild from "./ContactFormBuild";

class ContactForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          isEmailValid:    { regex: false },
          isTextAreaValid: { regex: false, length: false },
          isFormValid:     { topic: false, email: null, textArea: null, validity: null },
        }
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {

        let formValidity  = this.state.isFormValid;
        let emailRGX      = this.state.isEmailValid.regex;
        let textAreaRGX   = this.state.isTextAreaValid.regex;
        let textAreaLEN   = this.state.isTextAreaValid.length;

        switch(fieldName) {
            case "topic":
                formValidity.topic = (value !== "...") ? true : false;
                break;
            case "email":
                emailRGX = value.match(/^(?=.{6,30}@)[0-9a-zA-Z]+(?:\.[0-9a-z]+)*@[a-z0-9-]{2,}(?:\.[a-z]{2,})+$/);
                formValidity.email = emailRGX ? true : false;
                e.target.className = formValidity.email ? "validE" : "invalidE";
                break;
            case "textArea":
                textAreaRGX = !value.match(/[^a-zA-Z0-9"'`()\s\S]/);
                textAreaLEN = value.length >= 10;
                formValidity.textArea = (textAreaRGX && textAreaLEN) ? true : false;
                e.target.className    = formValidity.textArea ? "validTA" : "invalidTA";
                break;
            default: break;
        }

        formValidity.validity = this.state.isFormValid.email && this.state.isFormValid.topic && this.state.isFormValid.textArea;
        this.setState(this.state.isFormValid = formValidity);
        console.log(formValidity)
      }

    CF_settings = [
        {   
            id: "zfjfkzv",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Choissiez un topic :" },
            inputForm: { className: '', type: "text", name: "topic" },
        },{ 
            id: "plfbszd",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Votre email :" },
            inputForm: { className: '', type: "email", name: "email" },
        },{
            id: "ijconxa",
            divForm:   { className: "FormGroup", display: "inline" },
            labelForm: { text: "Que voulez vous nous dire ?" },
            inputForm: { className: '', type: "text", name: "textArea" },
        }
    ]

    render() {
        return (
            <form id="ThrowForm">
                { this.CF_settings.map((setAtt) => <ContactFormBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }

                <button type="button" ref={e => (this.btn = e)} disabled={!this.state.isFormValid.validity}>Envoyer</button>
            </form>
        )
    } 
}

export default ContactForm;