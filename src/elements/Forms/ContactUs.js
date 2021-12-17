import React from "react";

class ContactUs extends React.Component {

    componentDidMount() {
        if(this.props.set.property === "email") {
            this.input.setCustomValidity("Empty Field.");

            this.input.addEventListener("input", function() {
                this.value.match(/^(?=.{6,30}@)[0-9a-zA-Z]+(?:\.[0-9a-z]+)*@[a-z0-9-]{2,}(?:\.[a-z]{2,})+$/) ? this.setCustomValidity("") : this.setCustomValidity("Invalid field.");
                if(this.validity.customError) console.log("Wrong character.")
                else console.log("Good")
            })
        }else if(this.props.set.property === "textArea") {
            this.input.setAttribute("class", "invalid")

            this.input.addEventListener("input", function() {
                console.log(this.style.className + ", " + this.className)
                !this.value.match(/[^a-zA-Z0-9"'`()\s\S]/) && (this.value.length > 10) ? this.className = "valid" : this.className = "invalid";
                if(this.className === "invalid") console.log("Wrong character.")
                else console.log("Good")
            })
        }
    }

    switchFormBlock() {
        if(this.props.set.property === "textArea") {
            return (
            <div id={this.props.set.id} className={this.props.set.className}>
                <label style={{display:this.props.set.display}}>{this.props.set.label}</label>
                <textarea maxLength={1000} ref={e => (this.input = e)}></textarea>
            </div>
            )
        }else if(this.props.set.property === "topic") {
            return (
            <div id={this.props.set.id} className={this.props.set.className}>
                <label style={{display:this.props.set.display}}>{this.props.set.label}</label>
                <select>
                        <option value="..." defaultValue>...</option>
                        <option value="amelioration">Proposition d'amélioration</option>
                        <option value="bug">Raport d'un bug</option>
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

export default ContactUs;