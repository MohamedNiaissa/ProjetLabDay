import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DiscardLayout from "../../components/forms/DiscardLayout";
import Background from "../../components/layout/Background";
import Switch from "../../components/others/Switch";
import { Formulaire } from "../../utils/functions/FormManagement";


const form = new Formulaire("discard");

const Discard = () => {
    const [formState, setFormState] = useState({product: null, material: null, zip: null, city: null});
    const [cboxState, setCboxState] = useState(false);
    const [geoLState, setGeoLState] = useState(false);
    
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const nodes = e.currentTarget.parentNode.childNodes;

             if(name === "checkbox") setCboxState(valid => valid = !cboxState);
        else if(name === "location") setGeoLState(valid => valid = !geoLState);
        else if(name === "product" ) setFormState(valid => ({...valid, product: form.verifyProductName(value, nodes)}));
        else if(name === "material") setFormState(valid => ({...valid, material: form.verifyProductCondition(value)}));
        else if(name === "zip"     ) setFormState(valid => ({...valid, zip: form.verifyZipValidity(value, nodes)}));
        else if(name === "city"    ) setFormState(valid => ({...valid, city: form.verifyCityValidity(value)}));
    }

    useEffect(() => { 
        if(cboxState === false) {
            document.getElementById('geo').checked = false;
            setGeoLState(valid => valid = false);
        }
    }, [cboxState]);

    return (
        <>
            <main className="functionality" id="main-content">
                <div className="marg" />
                <div className="functionality-content">
                    <div className="functionality-content__title">
                        <h1>Formulaire Jeter</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet dolore sunt est maxime fugiat omnis ea commodi debitis, repellat illum libero tempore odio ex, molestias recusandae placeat ad et.</p>
                    </div>
                    <div className="functionality-content__form">
                        <div className="form-wrapper">
                            <form className="form">
                                <DiscardLayout event={handleUserInput} name={"checkbox"} checked={cboxState} locChecked={geoLState}/>

                                <div className="form-button">
                                { 
                                    form.verifyDiscardValidity(formState, cboxState, geoLState) ?
                                    <Link to={(cboxState ? "/jeter/decharge" : "/jeter/poubelles-ecologiques")} state={{product: form.fetchProduct(), city: form.fetchCity(), location: geoLState}}>
                                        <button className="button col-origin valid">Chercher</button>
                                    </Link>
                                    :
                                    <Link to="#"><button className="button col-disabled" disabled>Chercher</button></Link>
                                }
                                    <div className="geo-switch">
                                        <label>Activer la geolocalisation ? </label>
                                        {cboxState ? 
                                            <Switch event={handleUserInput} name="location" off="NON" on="OUI" nameID="geo" state={false} color="swi-origin"/>
                                        :
                                            <Switch event={null} name="location" off="NON" on="OUI" nameID="geo" state={true} color="swi-disabled"/>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Background color={"page-background purple"}/>
            <Background color={"page-image discard-bg"}/>
        </>
    )
}

export default Discard;