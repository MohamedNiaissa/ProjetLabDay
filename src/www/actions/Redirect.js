import React from "react";
import { Link } from 'react-router-dom';


class Redirect extends React.Component {

    getLink() {
        const link = this.props.link;


        // const url = this.props.link


        if(link === "/home") {
            return (
                <Link to={this.props.link}><div className="burger">☰</div></Link>
            )
        }else if(link === "/vendre/resultats") {
            const url = {
                pathname: this.props.link,
                state: { 
                    pName: this.props.product.name, 
                    pMat: this.props.product.material,
                    cName: this.props.city.name, 
                    cZip: this.props.city.zip,
                    cLat: this.props.city.lat,
                    cLong: this.props.city.long,
                    form: "sell",
                }
            }
            return (
                <Link to={url.pathname} state={url.state}><button className="button button--mimas" disabled={this.props.disabled}><span>Chercher</span></button></Link>
            )
        }else if(link === "/jeter/poubelles-ecologiques" || link === "/jeter/decharge") {
            const url = {
                pathname: this.props.link,
                state: { 
                    pName: this.props.product.name, 
                    pMat: this.props.product.material,
                    cName: this.props.city.name, 
                    cZip: this.props.city.zip,
                    cLat: this.props.city.lat,
                    cLong: this.props.city.long,
                    form: "trash", 
                }
            }
            return (
                <Link to={url.pathname} state={url.state}><button className="button button--mimas" disabled={this.props.disabled}><span>Chercher</span></button></Link>
            )
        }else if(link === "/contact/redirect") {
            const url = {
                pathname: this.props.link,
                state: { 
                    email: this.props.form.email, 
                    topic: this.props.form.topic,
                    content: this.props.form.content, 
                }
            }
            return (
                <Link to={url.pathname} state={url.state}><button className="button button--mimas" disabled={this.props.disabled} onClick={this.props.event}><span>Envoyer</span></button></Link>
            )
        }else if(link === "/donner/resultats") {
            const url = {
                pathname: this.props.link,
                state: { 
                    pName: this.props.product.name, 
                    pMat: this.props.product.material,
                    cName: this.props.city.name, 
                    cZip: this.props.city.zip,
                    cLat: this.props.city.lat,
                    cLong: this.props.city.long,
                    form: "give", 
                }
            }
            return (
                <Link to={url.pathname} state={url.state}><button className="button button--mimas" disabled={this.props.disabled}><span>Chercher</span></button></Link>
            )
        }
    }

    render() {
        return (this.getLink())
    }
}

export default Redirect;