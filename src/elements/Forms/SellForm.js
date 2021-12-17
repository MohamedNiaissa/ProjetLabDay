import React from "react";
import GroupForm from "./GroupForm";

let TF_settings = [
<<<<<<< HEAD
    {id: "FormGroup1", label: "Nom de l'objet", type: "text", hidden:"false"},
    {id: "FormGroup2", label: "Matière de l'objet", type: "text", hidden:"false"},
    {id: "FormGroup3", label: "Est-ce que cet objet est volumineux ?", type: "checkbox", hidden:"false"},
    {id: "FormGroup4", label: "Location", type: "text", hidden:"true"}
=======
    {id:"ezpfdbe", className: "FormGroup", label: "Nom de l'objet", type: "text", property:"product", display:"visibility"},
    {id:"nfozxfm", className: "FormGroup", label: "Quelle est la matière principale de votre objet ?", type: "text", property:"material", display:"visibility"},
    {id:"fpvzmxn", className: "FormGroup", label: "Location", type: "text", property:"location", display:"visibility"},
>>>>>>> sell
]

class SellForm extends React.Component {

    componentDidMount() {
        this.btn.addEventListener("click", function() {
        const TF = document.getElementById("SellForm");
            
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
<<<<<<< HEAD
            <form id="ThrowForm">
                { TF_settings.map((set) => <GroupForm {...this.props} set={set} key={set.id}/>) }

                <button type="button">Chercher</button>
=======
            <form id="SellForm">
                { TF_settings.map((set) => <GroupForm {...this.props} set={set} key={set.id}/>) }

                <button type="button" ref={e => (this.btn = e)}>Chercher</button>
>>>>>>> sell
            </form>
        )
    }  
}

export default SellForm;