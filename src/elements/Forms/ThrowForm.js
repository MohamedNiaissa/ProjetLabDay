import React from "react";
import GroupForm from "./GroupForm";

let TF_settings = [
    {id:"ezpfdbe", className: "FormGroup", label: "Nom de l'objet :", type: "text", property:"product", display:"visibility"},
    {id:"nfozxfm", className: "FormGroup", label: "Quelle est la matière principale de votre objet ?", type: "text", property:"material", display:"visibility"},
    {id:"xbanolm", className: "FormGroup", label: "Est-ce que cet objet est volumineux ?", type: "checkbox", property:"question", display:"visibility"},
    {id:"fpvzmxn", className: "FormGroup", label: "Localisation :", type: "text", property:"location", display:"none"},
]

class ThrowForm extends React.Component {

    componentDidMount() {
        this.btn.addEventListener("click", function() {
        const TF = document.getElementById("ThrowForm");
            
            TF.childNodes.forEach(element => {
                element.childNodes.forEach(subElement => {
                    if(subElement.nodeName === "INPUT" && subElement.type === "text") {
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
            <form id="ThrowForm">
                { TF_settings.map((set) => <GroupForm {...this.props} set={set} key={set.id}/>) }

                <button type="button" ref={e => (this.btn = e)}>Chercher</button>
            </form>
        )
    } 
}

export default ThrowForm;