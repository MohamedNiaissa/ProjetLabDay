import React from "react";

class GroupForm extends React.Component {

    componentDidMount() {
        if(this.props.set.type === "text") {
            if(this.input.style.display !== "none") this.input.setCustomValidity("Empty Field.");

            this.input.addEventListener("input", function() {
                !this.value.match(/[^a-zA-Z0-9]/) && (this.value.length > 2) ? this.setCustomValidity("") : this.setCustomValidity("Invalid field.");
                if(this.validity.customError) console.log("Wrong character.")
            })
        } else {
            this.input.addEventListener("input", function() {
                const loc = document.getElementById("fpvzmxn");
                loc.childNodes.forEach(element => {
                    if(element.style.display === "none") {
                        if(element.nodeName === "INPUT") element.setCustomValidity("Invalid Field.")
                        element.style.display = "inline";
                    }
                    else {
                        if(element.nodeName === "INPUT") element.setCustomValidity("");
                        element.style.display = "none";
                    }
                })
            })
        }
    }

    render() {
        return (
            <div id={this.props.set.id} className={this.props.set.className}>
                <label style={{display:this.props.set.display}}>{this.props.set.label}</label>
                <input type={this.props.set.type} style={{display:this.props.set.display}} 
                        minLength = "2" maxLength="40" ref={e => (this.input = e)}></input>
            </div>
        )
    }
}

export default GroupForm;