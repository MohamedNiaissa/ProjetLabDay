import React from "react";
import { useLocation } from "react-router";
import Map from "../../components/others/Map";
import Layout from "../../components/layout/Layout";


const GiveToAsso = () => (
    <Layout>
        <main className="map" id="main-content">
            <div className="map-field">
                <div className="map-field-wrapper">
                    <Map location={useLocation().state.city}/>
                </div>
            </div>
        </main>
    </Layout>
)

export default GiveToAsso;