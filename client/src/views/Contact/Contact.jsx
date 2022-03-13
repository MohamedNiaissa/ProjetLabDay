import emailjs from 'emailjs-com';
import { useState } from "react";
import { Formulaire } from "../../utils/functions/FormManagement";
import { Background } from "../../components/~items";
import { FormLayout } from "../../components/~layout";

const form = new Formulaire("contact");

const Contact = () => {
    const [formState, setFormState] = useState({topic: null, email: null, texar: null});

    const fieldState = (name, $value, $nodes) => ({
        topic    : () => setFormState(valid => ({...valid, topic: form.verifyTopicValidity($value)})),
        email    : () => setFormState(valid => ({...valid, email: form.verifyEmailValidity($value, $nodes)})),
        textarea : () => setFormState(valid => ({...valid, texar: form.verifyMessageValidity($value)})),
    })[name]()

    const userInput = (e) => {
        try {
            const { name, value } = e.target, nodes = e.currentTarget.parentNode.childNodes;
            fieldState(name, value, nodes);
        }catch (error) {
            console.log("%c An internal error occured in the form, please do not change the html attributes.", "color:red;");
        }
    }

    const handleSubmit = () => {
        const serviceId = 'service_cjdkap6', templateId = 'template_2yn66qt';
        const {topic, msg, email} = form.fetchMessage();

        emailjs.init("user_AKLQ6hVQAACxiGu2duCFr");
        emailjs.send(serviceId, templateId, {topic: topic, user:'User_Name_Template', content: msg, reply_to: email})
        .then(res => console.log('Email successfully sent!'))
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err));
    }

    return (
        <>
            <main className="functionality" id="main-content">
                <div className="marg" />
                <div className="functionality-content">
                    <FormLayout name="contact" userInput={userInput} validity={form.verifyFormValidity(formState)}
                        email={handleSubmit} cbox={null}/>
                </div>
            </main>
            <Background color={"page-background purple"}/>
        </>
    )
}

export default Contact;