import { useState, useEffect } from "react";
import { Formulaire } from "../../utils/functions/FormManagement";
import { Background } from "../../components/~items";
import { FormLayout } from "../../components/~layout";


const form = new Formulaire("discard");

const Discard = () => {
    const [formState, setFormState] = useState({product: null, material: null, zip: null, city: null});
    const [cboxState, setCboxState] = useState(false);
    const [geoLState, setGeoLState] = useState(false);

    const fieldState = (name, $value, $nodes) => ({
        checkbox: () => setCboxState(valid => valid = !cboxState),
        location: () => setGeoLState(valid => valid = !geoLState),
        product : () => setFormState(valid => ({...valid, product: form.verifyProductName($value, $nodes)})),
        material: () => setFormState(valid => ({...valid, material: form.verifyProductCondition($value)})),
        zip     : () => resolveZip($value, $nodes),
        city    : () => setFormState(valid => ({...valid, city: form.verifyCityValidity($value)})),
    })[name]()

    const resolveZip = (value, nodes) => {
        const zipPromise = new Promise ((res) => {
            res(form.verifyZipValidity(value, nodes))
        })

        zipPromise.then(res => setFormState(valid => ({...valid, zip: res})))
    }

    const userInput = (e) => {
        try {
            const { name, value } = e.target, nodes = e.currentTarget.parentNode.childNodes;
            fieldState(name, value, nodes);
        }catch (error) {
            console.log("%c An internal error occured in the form, please do not change the html attributes.", "color:red;");
        }
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
                    <FormLayout name="discard" userInput={userInput} validity={form.verifyFormMapValidity(formState, cboxState, geoLState, "discard")}
                        state={{product: form.fetchProduct(), city: form.fetchCity(), location: geoLState}} cbox={cboxState}/>
                </div>
            </main>
            <Background color={"page-image discard-bg"}/>
        </>
    )
}

export default Discard;