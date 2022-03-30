import { Link } from "react-router-dom";
import { Sell, Give, Discard, Contact, Title, Switch } from "../~items";

const FormLayout = ({name, userInput, validity, email, state, cbox, valueMat}) => {
    const validButton    = text => <button className="button col-origin valid">{text}</button>
    const disabledButton = text => <button className="button col-disabled" disabled>{text}</button>
    const validSwitch    = ()   => <Switch id={"geo"} name={"location"} off="NON" on="OUI" disabled={false} theme="swi-origin"   event={userInput}/>
    const disabledSwitch = ()   => <Switch id={"geo"} name={"location"} off="NON" on="OUI" disabled={true}  theme="swi-disabled" event={null}/>

    const ResearchLink = ({link, state}) => {
        if(validity) return <Link to={link} state={state}>{validButton("Chercher")}</Link>
        else         return <Link to="#">{disabledButton("Chercher")}</Link>
    }

    const ContactLink = ({link, event}) => {
        if(validity) return <Link to={link} onClick={event}>{validButton("Envoyer")}</Link>
        else         return <Link to="#">{disabledButton("Envoyer")}</Link>
    }

    const LocationSwitch = switchState => (
        <div className="geo-switch">
            <label>Activer la geolocalisation ?</label>
            {switchState()}
        </div>
    )

    const RenderTitle = name => ({
        sell   : () => <Title name="Vendre"/>,
        give   : () => <Title name="Donner"/>,
        discard: () => <Title name="Jeter"/>,
        contact: () => <Title name="Contact"/>,
    })[name]()
    
    const RenderForm = form => ({
        sell   : () => <Sell    event={userInput}/>,
        give   : () => <Give    event={userInput} locChecked={state.location}/>,
        discard: () => <Discard event={userInput} locChecked={state.location} checked={cbox}/>,
        contact: () => <Contact event={userInput}/>,
    })[form]()

    const RenderBtn = form => ({
        sell   : () => <ResearchLink link="/vendre/resultats" state={state}/>,
        give   : () => <ResearchLink link="/donner/resultats" state={state}/>,
        discard: () => <ResearchLink link={cbox ? "/jeter/decharge" : "/jeter/poubelles-ecologiques"} state={state}/>,
        contact: () => <ContactLink  link="/contact/redirect/" event={email}/>,
    })[form]()

    const RenderSwitch = cbox => ({
        true : () => LocationSwitch(validSwitch),
        false: () => LocationSwitch(disabledSwitch),
        null : () => null,
    })[cbox]()

    return (
        <>
            {RenderTitle(name)}
            <div className="functionality-content__form">
                <div className="form-wrapper">
                    <form className="form">
                        {RenderForm(name)}
                        <div className="form-button">
                            {RenderBtn(name)}
                            {RenderSwitch(cbox)}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormLayout;