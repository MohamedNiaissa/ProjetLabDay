import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import AuthSwitch from "./AuthSwitch";
import Layout from "../../components/layout/Layout";
import { slide, init } from "../../utils/functions/AuthManagement";

const AuthLayout = () => {
    useEffect(() => slide(), []);

    return (
        <Layout>
            <main className="auth">
                <div className="auth-box">
                    <Login />
                    <AuthSwitch {...init(useLocation().hash)} />
                    <Signup />
                </div>
            </main>
        </Layout>
    )
}

export default AuthLayout;