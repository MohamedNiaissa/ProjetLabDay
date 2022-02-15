import React from "react";
import { useLocation } from "react-router";
import Layout from "../partials/Layout";
import { importImages, getTrashColor } from "../../../www/actions/Functions";


const DiscardToTrash = () => (
    <Layout>
        <main className="trash" id="main-content">
            <div className="trash-wrapper">
                <div className="trash-color">
                    <img className={getTrashColor(useLocation().state.pMat)} src={importImages("trash.png")} alt='trash'></img>
                </div>
            </div>
        </main>
    </Layout>
)

export default DiscardToTrash;