import React from "react";
import GroupForm from "./GroupForm";

let TF_settings = [
    {id: "FormGroup1", label: "Nom de l'objet", type: "text", hidden:"false"},
    {id: "FormGroup2", label: "Matière de l'objet", type: "text", hidden:"false"},
    {id: "FormGroup3", label: "Est-ce que cet objet est volumineux ?", type: "checkbox", hidden:"false"},
    {id: "FormGroup4", label: "Location", type: "text", hidden:"true"}
]

class ThrowForm extends React.Component {
    render() {
        console.log(TF_settings)
        return (
            <form id="ThrowForm">
                { TF_settings.map((set) => <GroupForm {...this.props} set={set} key={set.id}/>) }

                <button type="button">Chercher</button>
            </form>
        )
    } 
}

export default ThrowForm;