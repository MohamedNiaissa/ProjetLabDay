import React from "react";
import CBuild from "../partials/form/ContactLayout";
import Redirect from "../../../www/actions/Redirect";
import emailjs from 'emailjs-com';
import Layout from "../partials/Layout";

function importAll(r) {
    let images = {};
    r.keys().map((item) => ( images[item.replace('./', '')] = r(item) ));
    return images;
}

class Contact extends React.Component {
    imagesStatic = importAll(require.context('../../img', false, /\.(png|jpe?g|svg)$/));

    constructor (props) {
        super(props);
        this.state = {
          verify: {topic: false, email: null, textArea: null, validity: null }
        }

        this.form = { email: null, topic: null, content: null, redirect: false }
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value, e);
    }

    validateField(fieldName, value, e) {
        const link = document.querySelector(".form-btn").firstChild;
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

    render() {
        return (
            <Layout>
                <main className="forms" id="main-content">
                    <div className="forms-box">
                        <div className="picture-wrapper">
                            <img className="picture" src={this.imagesStatic['test.jpg']} alt="pic"/>
                        </div>

                        <div className="form-wrapper">
                            <form className="form">
                                <div className="form-title">
                                    <h2>Formulaire Contact</h2>
                                </div>
                                <div className="form-fields">
                                    <CBuild {...this.props} event={this.handleUserInput}/>
                                </div>
                                <div className="form-btn">
                                    <Redirect link={"/contact/redirect"} form={this.form} disabled={!this.state.verify.validity} event={this.handleSubmit}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </Layout>
        )
    } 
}

export default Contact;