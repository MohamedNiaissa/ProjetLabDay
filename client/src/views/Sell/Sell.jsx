import { useState } from "react";
import { Background } from "../../components/~items";
import { Formulaire } from "../../utils/functions/FormManagement";
import { FormLayout } from "../../components/~layout";


const form = new Formulaire("sell");

const Sell = () => {
    const [formState, setFormState] = useState({product: null, material: null});

    const fieldState = (name, $value, $nodes) => ({
        product  : () => setFormState(valid => ({...valid, product: form.verifyProductName($value, $nodes)})),
        material : () => setFormState(valid => ({...valid, material: form.verifyProductCondition($value)})),
    })[name]()

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
                <div className="marg"/>
                <div className="functionality-content">
                    <FormLayout name="sell" userInput={userInput} validity={form.verifyFormValidity(formState)}
                    state={{product: form.fetchProduct(), city: form.fetchCity()}} cbox={null} form={"sell"}/>
                </div>
            </main>
            <Background color={"page-image sell-bg"}/>
        </>
    )
}

export default Sell;