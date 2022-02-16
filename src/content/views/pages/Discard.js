import React, { useState } from "react";
import { Link } from "react-router-dom";
import DiscardLayout from "../partials/form/DiscardLayout";
import Layout from "../partials/Layout";
import { importImages } from "../../../www/actions/Functions";
import { Formulaire } from "../../../www/actions/FormManagement";


const form = new Formulaire("discard");

const Discard = () => {
    const [formState, setFormState] = useState({product: null, material: null, zip: null, city: null});
    const [cboxState, setCboxState] = useState(false);
    
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const nodes = e.currentTarget.parentNode.childNodes;

             if(name === "checkbox") setCboxState(valid => valid = !cboxState);
        else if(name === "product" ) setFormState(valid => ({...valid, product: form.verifyProductName(value, nodes)}));
        else if(name === "material") setFormState(valid => ({...valid, material: form.verifyProductCondition(value)}));
        else if(name === "zip"     ) setFormState(valid => ({...valid, zip: form.verifyZipValidity(value, nodes)}));
        else if(name === "city"    ) setFormState(valid => ({...valid, city: form.verifyCityValidity(value)}));
    }

    return (
        <Layout>
            <main className="forms" id="main-content">
                <div className="forms-box">
                    <div className="picture-wrapper">
                        <img className="picture" src={importImages("discard.jpg")} alt="pic"/>
                    </div>

                    <div className="form-wrapper">
                        <form className="form">
                            <div className="form-title">
                                <h2>Formulaire Jeter</h2>
                            </div>
                            <div className="form-fields">
                                <DiscardLayout event={handleUserInput} checked={cboxState}/>
                            </div>
                            <div className="form-btn">
                            { 
                                form.verifyDiscardValidity(formState, cboxState) ?
                                <Link to={(cboxState ? "/jeter/decharge" : "/jeter/poubelles-ecologiques")} state={{product: form.fetchProduct(), city: form.fetchCity()}}>
                                    <button className="button button_anime"><span>Chercher</span></button>
                                </Link>
                                :
                                <Link to="#"><button className="button button_anime_back" disabled><span>Chercher</span></button></Link>
                            }
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Discard;