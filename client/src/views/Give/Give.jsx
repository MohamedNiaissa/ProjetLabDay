import { useState } from "react";
import { Link } from "react-router-dom";
import GiveLayout from "../../components/forms/GiveLayout";
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
            <main className="functionality" id="main-content">
                <div className="marg" />
                <div className="functionality-content">
                    <div className="functionality-content__title">
                        <h1>Formulaire Donner</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet dolore sunt est maxime fugiat omnis ea commodi debitis, repellat illum libero tempore odio ex, molestias recusandae placeat ad et.</p>
                    </div>
                    <div className="functionality-content__form">
                        <div className="form-wrapper">
                            <form className="form">
                                <GiveLayout event={handleUserInput}/>

                                <div className="form-button">
                                { 
                                    form.verifyFormValidity(formState) ?
                                    <Link to="/donner/resultats" state={{product: form.fetchProduct(), city: form.fetchCity()}}>
                                        <button className="button col-origin valid"><span>Chercher</span></button>
                                    </Link>
                                    :
                                    <Link to="#"><button className="button col-disabled" disabled><span>Chercher</span></button></Link>
                                }
                                    <div className="geo-switch">
                                        <label>Activer la geolocalisation ? </label>
                                        <Switch event={null} off="NON" on="OUI" nameID={"geo"}/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Background color={"page-background purple"}/>
            <Background color={"page-image give-bg"}/>
        </>
    )
}

export default Give;