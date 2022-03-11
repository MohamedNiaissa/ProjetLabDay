import {useState } from "react";
import { Link } from "react-router-dom";
import ContactLayout from "../../components/forms/ContactLayout";
import emailjs from 'emailjs-com';
import Background from "../../components/layout/Background";
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
        <>
                <main className="functionality" id="main-content">
                    <div className="marg" />
                    <div className="functionality-content">
                        <div className="functionality-content__title">
                            <h1>Formulaire Contact</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet dolore sunt est maxime fugiat omnis ea commodi debitis, repellat illum libero tempore odio ex, molestias recusandae placeat ad et.</p>
                        </div>
                        <div className="functionality-content__form">
                            <div className="form-wrapper">
                                <form className="form">
                                    <ContactLayout event={handleUserInput}/>

                                    <div className="form-button">
                                    { 
                                        form.verifyFormValidity(formState) ?
                                        <Link to="/contact/redirect">
                                            <button className="button col-origin valid" onClick={handleSubmit}><span>Envoyer</span></button>
                                        </Link>
                                        :
                                        <Link to="#"><button className="button col-disabled" disabled><span>Envoyer</span></button></Link>
                                    }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            <Background color={"page-background purple"}/>
        </>
    )
}

export default Contact;