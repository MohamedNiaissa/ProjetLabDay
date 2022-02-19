import React from "react";
import { Navigate } from "react-router-dom";

const ContactRedirect = () => (
    //! This file will be removed soon, instead of redirecting we're gonna create a window pop up sliding from the right/left.
    <Navigate to={"/home"}/>
)

export default ContactRedirect;