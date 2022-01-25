import React from "react";
import { Link } from 'react-router-dom';

class ManageLinks extends React.Component {

    getLink() {
        if(this.props.link === "/home") {
            return (
                <Link to={this.props.link}><button>Home</button></Link>
            )
        }else if(this.props.link === "/jeter/poubelles-ecologiques") {
            return (
                <Link to={this.props.link}><button disabled={this.props.disabled}>Chercher</button></Link>
            )
        }else if (this.props.link === "/jeter/decharge") {
            return (
                <Link to={this.props.link}><button disabled={this.props.disabled}>Chercher</button></Link>
            )
        }
    }

    render() {
        return (this.getLink())
    }
}

export default ManageLinks;