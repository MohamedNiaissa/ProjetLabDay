import React from "react";
import CBuild from "./CBuild";
import ManageLinks from "../../ManageLinks";
import { NavLink } from "react-router-dom";

class CForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          verify: {topic: false, email: null, textArea: null, validity: null },
        }

        this.form = {
            email: null, topic: null, content: null, redirect: false,
        }
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {
        let validated = this.state.verify;

        switch(fieldName) {
            case "topic":
                validated.topic = (value !== "default") ? true : false;
                this.form.topic = value;
                break;
            case "email":
                validated.email = value.match(/^(?=.{6,30}@)[0-9a-zA-Z]+(?:\.[0-9a-z]+)*@[a-z0-9-]{2,}(?:\.[a-z]{2,})+$/) ? true : false;
                e.target.className = validated.email ? "validE" : "invalidE";
                this.form.email = value;
                break;
            case "textArea":
                validated.textArea = (!value.match(/[^a-zA-Z0-9"'`()\s\S]/) && value.length >= 10) ? true : false;
                e.target.className = validated.textArea ? "validTA" : "invalidTA";
                this.form.content = value;
                break;
            default: break;
        }

        validated.validity = this.state.verify.email && this.state.verify.topic && this.state.verify.textArea;
        this.setState(this.state.verify = validated);
        console.log(validated)
      }

    CF_settings = [
        {   
            id: "zfjfkzv",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Choissiez un topic :" },
            inputForm: { className: '', type: "text", name: "topic" },
        },{ 
            id: "plfbszd",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Votre email :" },
            inputForm: { className: '', type: "email", name: "email" },
        },{
            id: "ijconxa",
            divForm:   { className: "FormGroup", display: "flex" },
            labelForm: { text: "Que voulez vous nous dire ?" },
            inputForm: { className: '', type: "text", name: "textArea" },
        }
    ]

    render() {
        return (
            <form id="TrashForm" class="flex">
                { this.CF_settings.map((setAtt) => <CBuild {...this.props} setAtt={setAtt} key={setAtt.id} event={this.handleUserInput}/>) }
                <ManageLinks link={"/contact/redirect"} form={this.form} disabled={!this.state.verify.validity}/>
                <NavLink to="/home"><button>Retourner au menu</button></NavLink>
            </form>
        )
    } 
}

export default CForm;