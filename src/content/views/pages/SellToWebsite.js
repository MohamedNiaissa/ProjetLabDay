import React from "react";
import { useLocation } from "react-router";
import Map from "../partials/Map";
import Layout from "../partials/Layout";


const SellToWebsite = () => {
    const location = useLocation();

    return (
        <Layout>
            <main className="map" id="main-content">
                <div className="map-field">
                    <div className="map-field-wrapper">
                        <Map state={{location}}/>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default SellToWebsite;