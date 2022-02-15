import React from "react";
import { Navigate } from "react-router-dom";

const ContactRedirect = () => (
    // const [redirect, setRedirection] = useState(false);
    
    // useEffect(() => {
    //     const timer = setTimeout(setRedirection(timerEnded => timerEnded = true, 5000));
    //     // clearTimeout(timer);
    // },  []);

    // if(!redirect) {
    //     return (
    //         <div className="msg_cont">
    //             <div className="ty-msg">
    //                 <p>
    //                     Merci de nous avoir envoyé un email.
    //                     <br/>
    //                     Vous allez être redirigé sur la page d'accueil dans 5 secondes.
    //                 </p>
    //             </div>
    //         </div>
    //     )
    // }else return (     )
    <Navigate to={"/home"}/>
)

export default ContactRedirect;