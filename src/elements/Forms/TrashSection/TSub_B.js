import React from "react";
import { useLocation } from "react-router";
import Getposition from "../../MapLoader/getPosition";
import Layout from "../../Layout";

const TSub_B = () => {
    const location = useLocation();

    return (
        <Layout>
            <main className="map" id="main-content">
                <div className="map-field">
                    <div className="map-field-wrapper">
                        <Getposition state={{location}}/>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default TSub_B;