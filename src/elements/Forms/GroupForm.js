import React from "react";

class GroupForm extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div id={this.props.set.id}>
                <label hidden={this.props.set.visibility}>{this.props.set.label}</label>
                <input type={this.props.set.type} hidden={this.props.set.visibility}></input>
             
            </div>
        )
    }
}

export default GroupForm;