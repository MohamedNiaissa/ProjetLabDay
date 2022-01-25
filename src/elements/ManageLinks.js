import React from "react";
import { Link } from 'react-router-dom';

class ManageLinks extends React.Component {

    getLink() {
        const link = this.props.link;

        if(this.props.link === "/home") {
            return (
                <Link to={this.props.link}><button>Home</button></Link>
            )
        }else if(link.includes("jeter")) {
            const url = {
                pathname: this.props.link,
                state: { 
                    pName: this.props.product.name, 
                    pMat: this.props.product.material,
                    cName: this.props.city.name, 
                    cZip: this.props.city.zip 
                }
            }
            return (
                <Link to={url.pathname} state={url.state}><button disabled={this.props.disabled}>Chercher</button></Link>
            )
        }
    }

    render() {
        return (this.getLink())
    }
}

export default ManageLinks;