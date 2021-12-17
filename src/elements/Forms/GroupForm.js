import React from "react";
import allCities from "../../Cities";

class GroupForm extends React.Component {

    componentDidMount() {
        if(this.props.set.property === "product") {
            this.input.setCustomValidity("Empty Field.");

            this.input.addEventListener("input", function() {
                !this.value.match(/[^a-zA-Z0-9]/) && (this.value.length > 2) ? this.setCustomValidity("") : this.setCustomValidity("Invalid field.");
                if(this.validity.customError) console.log("Wrong character.")
                else console.log("Good")
            })
        } else if(this.props.set.property === "location") {
            this.input.addEventListener("input", function() {

                let checkValidity = false;
                const index = allCities.findIndex(obj => obj.City === this.value);
                if(index !== -1) checkValidity = true;

                !this.value.match(/[^a-zA-Z]/) && checkValidity && (this.value.length > 1) ? this.setCustomValidity("") : this.setCustomValidity("Invalid field.");
                if(this.validity.customError) console.log("Wrong character.")
                else console.log("Good")
            })
        }else if(this.props.set.property === "question") {
            this.input.addEventListener("input", function() {
                const loc = document.getElementById("fpvzmxn");
                loc.childNodes.forEach(element => {
                    if(element.style.display === "none") {
                        if(element.nodeName === "INPUT") {
                            const index = allCities.findIndex(obj => obj.City === element.value);
                            if(index === -1) element.setCustomValidity("Invalid Field.")
                        }
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

    switchFormBlock() {
        if(this.props.set.property == "material") {
            return (
            <div id={this.props.set.id} className={this.props.set.className}>
                <label style={{display:this.props.set.display}}>{this.props.set.label}</label>
                <select>
                    <option value="..." defaultValue>...</option>
                    <option value="bois">Bois</option>
                    <option value="metal">Métal</option>
                    <option value="ceramique">Céramique</option>
                    <option value="verre">Verre</option>
                    <option value="plastique">Plastique</option>
                    <option value="textile">Textiles</option>
                    <option value="cuir">Cuir</option>
                    <option value="papier_carton">Papier ou Carton</option> 
                    <option value="caoutchouc">Caoutchouc</option>
                </select>
            </div>
            )
        }else {
            return (
            <div id={this.props.set.id} className={this.props.set.className}>
                <label style={{display:this.props.set.display}}>{this.props.set.label}</label>
                <input type={this.props.set.type} style={{display:this.props.set.display}} 
                        minLength = "2" maxLength="40" ref={e => (this.input = e)}></input>
            </div>
            )
        }
    }

    render() {
        return (this.switchFormBlock())
    }
}

export default GroupForm;