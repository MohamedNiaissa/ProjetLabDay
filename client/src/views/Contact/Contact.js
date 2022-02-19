import React, {useState } from "react";
import { Link } from "react-router-dom";
import ContactLayout from "../../components/forms/ContactLayout";
import emailjs from 'emailjs-com';
import Layout from "../../components/layout/Layout";
import { importImages } from "../../utils/functions/Functions";
import { Formulaire } from "../../utils/functions/FormManagement";


const form = new Formulaire("contact");

const Contact = () => {
    const [formState, setFormState] = useState({topic: null, email: null, texar: null});
    
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const nodes = e.currentTarget.parentNode.childNodes;

             if(name === "topic"   ) setFormState(valid => ({...valid, topic: form.verifyTopicValidity(value)}));
        else if(name === "email"   ) setFormState(valid => ({...valid, email: form.verifyEmailValidity(value, nodes)}));
        else if(name === "textarea") setFormState(valid => ({...valid, texar: form.verifyMessageValidity(value)}));
    }

    const handleSubmit = () => {
        const serviceId = 'service_cjdkap6';
        const templateId = 'template_2yn66qt';
        const contact = form.fetchMessage();
        emailjs.init("user_AKLQ6hVQAACxiGu2duCFr");
        emailjs.send(serviceId, templateId, {topic: contact.$topic, user:'User_Name_Template', content: contact.$msg, reply_to: contact.$email})
        .then(res => { console.log('Email successfully sent!')})
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
    }

    return (
        <Layout>
            <main className="forms" id="main-content">
                <div className="forms-box">
                    <div className="picture-wrapper">
                        <img className="picture" src={importImages("test.jpg")} alt="pic"/>
                    </div>

                    <div className="form-wrapper">
                        <form className="form">
                            <div className="form-title">
                                <h2>Formulaire Contact</h2>
                            </div>
                            <div className="form-fields">
                                <ContactLayout event={handleUserInput}/>
                            </div>
                            <div className="form-btn">
                            { 
                                form.verifyFormValidity(formState) ?
                                <Link to="/contact/redirect">
                                    <button className="button button_anime" onClick={handleSubmit}><span>Envoyer</span></button>
                                </Link>
                                :
                                <Link to="#"><button className="button button_anime_back" disabled><span>Envoyer</span></button></Link>
                            }
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Contact;