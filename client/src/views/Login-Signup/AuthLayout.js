import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import AuthSwitch from "./AuthSwitch";
import Layout from "../../components/layout/Layout";
import Background from "../../components/layout/Background";
import { slide, init } from "../../utils/functions/AuthManagement";

const AuthLayout = () => {
    useEffect(() => slide(), []);

    return (
        <>
            <Layout>
                <main className="auth">
                    <div className="marg" />
                    <div className="auth-content">
                        <Login />
                        <AuthSwitch {...init(useLocation().hash)} />
                        <Signup />
                    </div>
                </main>
            </Layout>
            <Background color={"darkblue"}/>
        </>
    )
}

export default AuthLayout;