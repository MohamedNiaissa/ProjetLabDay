import React from "react";
import ContactUs from "./ContactUs";

let TF_settings = [
    {id:"ezpfdbe", className: "FormGroup", label: "Choissiez un topic :", type: "text", property:"topic", display:"visibility"},
    {id:"nfozxfm", className: "FormGroup", label: "Votre email :", type: "email", property:"email", display:"visibility"},
    {id:"fpvzmxn", className: "FormGroup", label: "Que voulez vous nous dire ?", type: "text", property:"textArea", display:"visibility"}
]

class ContactForm extends React.Component {

    componentDidMount() {
        this.btn.addEventListener("click", function() {
        const TF = document.getElementById("ContactForm");
            
            TF.childNodes.forEach(element => {
                element.childNodes.forEach(subElement => {
                    console.log(subElement)
                    if(subElement.nodeName === "INPUT") {
                        console.log(subElement.nodeName)
                        if(subElement.validity.customError) console.log("NOPE CAN'T DO")
                        else console.log("VALID")
                    }
                })
            })
        })
    }

    render() {
        console.log(TF_settings)
        return (
            <form id="ContactForm">
                { TF_settings.map((set) => <ContactUs {...this.props} set={set} key={set.id}/>) }

                <button type="button" ref={e => (this.btn = e)}>Envoyer</button>
            </form>
        )
    } 
}

export default ContactForm;