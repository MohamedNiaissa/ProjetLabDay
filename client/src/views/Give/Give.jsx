import { useState } from "react";
import { Background } from "../../components/~items";
import { Formulaire } from "../../utils/functions/FormManagement";
import { FormLayout } from "../../components/~layout";


const form = new Formulaire("give");

const Give = () => {
    const [formState, setFormState] = useState({product: null, state: null, zip: null, city: null});
    const [geoLState, setGeoLState] = useState(false);

    const fieldState = (name, $value, $nodes) => ({
        location: () => setGeoLState(valid => valid = !geoLState),
        product : () => setFormState(valid => ({...valid, product: form.verifyProductName($value, $nodes)})),
        state   : () => setFormState(valid => ({...valid, state: form.verifyProductCondition($value)})),
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

    return (
        <>
            <main className="functionality" id="main-content">
                <div className="marg" />
                <div className="functionality-content">
                    <FormLayout name="give" userInput={userInput} validity={form.verifyFormMapValidity(formState, false, geoLState, "give")}
                        state={{product: form.fetchProduct(), city: form.fetchCity(), location: geoLState}} cbox={true}/>
                </div>
            </main>
            <Background color={"page-image give-bg"}/>
        </>
    )
}

export default Give;