import React from "react";
import { useLocation } from "react-router";
import Map from "../partials/Map";
import Layout from "../partials/Layout";


const GiveToAsso = () => (
    <Layout>
        <main className="map" id="main-content">
            <div className="map-field">
                <div className="map-field-wrapper">
                    <Map location={useLocation().state}/>
                </div>
            </div>
        </main>
    </Layout>
)

export default GiveToAsso;