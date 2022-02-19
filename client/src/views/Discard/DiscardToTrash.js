import React from "react";
import { useLocation } from "react-router";
import Layout from "../../components/layout/Layout";
import { importImages, getTrashColor } from "../../utils/functions/Functions";


const DiscardToTrash = () => (
    <Layout>
        <main className="trash" id="main-content">
            <div className="trash-wrapper">
                <div className="trash-color">
                    <img className={getTrashColor(useLocation().state.product)} src={importImages("trash.png")} alt='trash'></img>
                </div>
            </div>
        </main>
    </Layout>
)

export default DiscardToTrash;