import React, { useState } from "react";
import { Link } from "react-router-dom";
import GiveLayout from "../../components/forms/GiveLayout";
import Layout from "../../components/layout/Layout";
import Background from "../../components/layout/Background";
import Switch from "../../components/others/Switch";
import { Formulaire } from "../../utils/functions/FormManagement";


const form = new Formulaire("give");

const Give = () => {
    const [formState, setFormState] = useState({product: null, state: null, zip: null, city: null});
    
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const nodes = e.currentTarget.parentNode.childNodes;

             if(name === "product") setFormState(valid => ({...valid, product: form.verifyProductName(value, nodes)}));
        else if(name === "state"  ) setFormState(valid => ({...valid, state: form.verifyProductCondition(value)}));
        else if(name === "zip"    ) setFormState(valid => ({...valid, zip: form.verifyZipValidity(value, nodes)}));
        else if(name === "city"   ) setFormState(valid => ({...valid, city: form.verifyCityValidity(value)}));
    }

    return (
        <>
            <Layout bg="give-bg">
                <main className="forms" id="main-content">
                    <div className="form-title">
                        <h1>Formulaire Donner</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet dolore sunt est maxime fugiat omnis ea commodi debitis, repellat illum libero tempore odio ex, molestias recusandae placeat ad et.</p>
                    </div>
                    <div className="forms-box">
                        <div className="form-wrapper">
                            <form className="form">
                                <GiveLayout event={handleUserInput}/>

                                <div className="form-btn">
                                { 
                                    form.verifyFormValidity(formState) ?
                                    <Link to="/donner/resultats" state={{product: form.fetchProduct(), city: form.fetchCity()}}>
                                        <button className="button valid"><span>Chercher</span></button>
                                    </Link>
                                    :
                                    <Link to="#"><button className="button" disabled><span>Chercher</span></button></Link>
                                }
                                    <div className="geo-switch">
                                        <label>Activer la geolocalisation ? </label>
                                        <Switch event={null} off="NON" on="OUI" nameID={"geo"}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </Layout>
            <Background color={"purple"}/>
        </>
    )
}

export default Give;