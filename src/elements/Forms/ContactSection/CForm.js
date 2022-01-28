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
        const link = document.querySelector(".CForm_Button").firstChild;
        const btn = document.querySelector(".button");
        const span = document.createElement('span');
        const nodes = e.currentTarget.parentNode.childNodes;
        let validated = this.state.verify;

        switch(fieldName) {
            case "topic":
                validated.topic = (value !== "default") ? true : false;
                this.form.topic = value;
                break;
            case "email":
                validated.email = value.match(/^(?=.{6,30}@)[0-9a-zA-Z]+(?:\.[0-9a-z]+)*@[a-z0-9-]{2,}(?:\.[a-z]{2,})+$/) ? true : false;

                if(!validated.email) {
                    nodes[1].style.color = "crimson";
                    nodes[2].style.backgroundColor = "crimson";
                }else {
                    nodes[1].style.color = "#2962ff";
                    nodes[2].style.backgroundColor = "#2962ff";
                }

                this.form.email = value;
                break;
            case "textArea":
                validated.textArea = (/*!value.match(/[^a-zA-Z0-9"'`éèàâ()\s\S]/i) &&*/ value.length >= 10) ? true : false;
                e.target.className = validated.textArea ? "validTA" : "invalidTA";
                this.form.content = value;
                break;
            default: break;
        }

        validated.validity = this.state.verify.email && this.state.verify.topic && this.state.verify.textArea;
        console.log(validated)
        this.setState({
            ...this.state.verify,
            validity: validated.validity,
        });

        if(validated.validity) {
            btn.classList.remove("button--mimas");
            link.innerHTML = '';

            link.appendChild(btn);
            btn.appendChild(span);

            btn.classList.add('button_anime');
        }
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

    componentDidMount() {
        //bad fix
        document.getElementById('fetchBug').classList.remove('active');
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
                        <div className="CForm_Title">
                            <h2>Formulaire Contact</h2>
                        </div>
                        <div className="CForm_Content">
                            <CBuild {...this.props} event={this.handleUserInput}/>
                        </div>
                        <div className="CForm_Button">
                            <ManageLinks link={"/contact/redirect"} form={this.form} disabled={!this.state.verify.validity} event={this.handleSubmit}/>
                            <NavLink to="/home"><button className="button_return button_anime"><span>Retourner au menu</span></button></NavLink>
                        </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    } 
}

export default CForm;