import { Navigate } from "react-router-dom";

const ContactRedirect = () => (
    //! This file will be removed soon, instead of redirecting we're gonna create a window pop up sliding from the right/left.
    <>
        {/* <Navigate to={"/home"}/> */}
        <div className="popup">
            <span> Merci d'avoir pris le temps de nous partager votre requête </span>
        </div>
       
    </>
)

export default ContactRedirect;