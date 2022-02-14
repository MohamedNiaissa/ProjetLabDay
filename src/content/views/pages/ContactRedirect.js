import React from "react";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";


const ContactRedirectComponent = props => {
    const location = useLocation()
    return <ContactRedirect location={location.state} {...props} />
}

class ContactRedirect extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
          redirect: false,
        }
    }

    componentDidMount(){
         this.timeoutHandle = setTimeout(() => {
            this.setState({...this.state, redirect: true})
        }, 5000);
    }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle);
    }

    render() {
        if(!this.state.redirect) {
            return (
                <>
                    <div className="msg_cont">
                        <div className="ty-msg">
                            <p>
                                Merci de nous avoir envoyé un email.
                                <br/>
                                Vous allez être redirigé sur la page d'accueil dans 5 secondes.
                            </p>
                        </div>
                    </div>
                </>
            );
        }else {
            return (
                <Navigate to={"/home"}/>
            )
        }
    }
}

export default ContactRedirectComponent;