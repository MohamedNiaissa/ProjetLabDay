import React, { useState } from "react";
import { Link } from "react-router-dom";
import DiscardLayout from "../../components/forms/DiscardLayout";
import Layout from "../../components/layout/Layout";
import { Formulaire } from "../../utils/functions/FormManagement";


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
        <Layout bg="sell-bg">
            <main className="forms" id="main-content">
                <div className="forms-box">
                    <div className="form-title">
                        <h2>Formulaire Jeter</h2>
                    </div>

                    <div className="form-wrapper">
                        <form className="form">
                            <DiscardLayout event={handleUserInput} checked={cboxState}/>

                            <div className="form-btn">
                            { 
                                form.verifyDiscardValidity(formState, cboxState) ?
                                <Link to={(cboxState ? "/jeter/decharge" : "/jeter/poubelles-ecologiques")} state={{product: form.fetchProduct(), city: form.fetchCity()}}>
                                    <button className="button button_anime">Chercher</button>
                                </Link>
                                :
                                <Link to="#"><button className="button button_anime_back" disabled>Chercher</button></Link>
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