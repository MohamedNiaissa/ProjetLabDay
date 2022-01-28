import React from "react";
import { Link } from "react-router-dom";

class CoreMenu extends React.Component {

    constructor (props) {
        super(props);
        this.state = { linkToHome: false }
        this.handleClickEvent = this.handleClickEvent.bind(this)
        this.handleLinksPointer = this.handleLinksPointer.bind(this)
    }

    handleClickEvent(page) {
        const btnState = (page === window.location.pathname) ? "btn active" : "btn inactive";
        if(btnState !== "btn inactive" && !this.state.linkToHome) {
            this.state.linkToHome = true;
        }

        return btnState;
    }

    handleLinksPointer(path) {
        const btnPath = this.state.linkToHome ? "/home" : path
        if(btnPath !== path && this.state.linkToHome) {
            this.state.linkToHome = false;
        }
        return btnPath;
    }

    render() {
        return (
            <section className="form_menu">
                <div className="btn_group">
                    <div className="btn_container">
                        <Link className={this.handleClickEvent("/vendre")} to={this.handleLinksPointer("/vendre")}>Vendre</Link></div>
                    <div className="btn_container">
                        <Link className={this.handleClickEvent("/donner")} to={this.handleLinksPointer("/donner")}>Donner</Link></div>
                    <div className="btn_container">
                        <Link className={this.handleClickEvent("/jeter")} to={this.handleLinksPointer("/jeter")}>Jeter</Link></div>
                </div>
            </section>
        )
    }
}

export default CoreMenu;