import React from "react";
import CBuild from "./CBuild";
import ManageLinks from "../../ManageLinks";
import emailjs from 'emailjs-com';
import { NavLink } from "react-router-dom";
import image from "../../../img/test.jpg"

class CForm extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          verify: {topic: false, email: null, textArea: null, validity: null },
        }

        this.form = {
            email: null, topic: null, content: null, redirect: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit() {
        const serviceId = 'service_cjdkap6';
        const templateId = 'template_2yn66qt';
        emailjs.init("user_AKLQ6hVQAACxiGu2duCFr");
        emailjs.send(serviceId, templateId, {topic: this.form.topic, user:'User_Name_Template', content: this.form.content, reply_to: this.form.email})
        .then(res => {
            console.log('Email successfully sent!')
        }).catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    render() {
        return (
            <section className="form_section">
                <div className="form_template">
                    <div className="form_style">
                        <img className="form_picture" src={image} alt="pic"/>
                    </div>
                    <div className="form_container"> 
                        <form id="CForm" className="form">
                            <CBuild {...this.props} event={this.handleUserInput}/>
                            <ManageLinks link={"/contact/redirect"} form={this.form} disabled={!this.state.verify.validity} event={this.handleSubmit}/>
                            <NavLink to="/home"><button>Retourner au menu</button></NavLink>
                        </form>
                    </div>
                </div>
            </section>
        )
    } 
}

export default CForm;