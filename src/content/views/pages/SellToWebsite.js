import React from "react";
// import { useLocation } from "react-router";
// import Map from "../partials/Map";
import Layout from "../partials/Layout";
import WebsiteCells from "../partials/WebsiteCells";


const SellToWebsite = () => (
    <Layout>
        <main className="website" id="main-content">
            <WebsiteCells />
        </main>
    </Layout>
)

export default SellToWebsite;