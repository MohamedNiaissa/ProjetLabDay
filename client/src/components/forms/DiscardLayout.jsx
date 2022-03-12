import Switch from "../others/Switch";

const DiscardLayout = ({event, name, checked, locChecked}) => (
<>
    <div id="ezpfdbe" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="product" minLength = "1" maxLength="40" 
                        onChange={event} required/>
                <label htmlFor="design-field"><strong>Nom de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="nfozxfm" className="form-field">
        <div className="first-design">
            <div className="first-design-content">
                <select className="design-field" name="material" onChange={event} required>
                    <option value="" defaultValue hidden/>
                    <option value="bois">Bois</option>
                    <option value="metal">Métal</option>
                    <option value="ceramique">Céramique</option>
                    <option value="verre">Verre</option>
                    <option value="plastique">Plastique</option>
                    <option value="textile">Textiles</option>
                    <option value="cuir">Cuir</option>
                    <option value="papier_carton">Papier ou Carton</option> 
                    <option value="caoutchouc">Caoutchouc</option>
                </select>
                <label htmlFor="design-field"><strong>Matériel de l'objet :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="xbanolm" className="form-field" style={{flexDirection: "row"}}>
        <label style={{color: "white"}}>Encombrant ?</label>
        <Switch event={event} name={name} off="NON" on="OUI" nameID={"controller"} state={false} color="swi-origin"/>
    </div>

    <div id="fpvzmxn" className="form-field" disabled={checked ? false : true}>
        <div className="first-design">
            <div className="first-design-content">
                <input className="design-field" type="text" name="zip" minLength = "1" maxLength="5" 
                        onChange={event} required/>
                <label htmlFor="design-field"><strong>Code Postal :</strong></label>
                <span></span>
            </div>
        </div>
    </div>

    <div id="ibizbef" className="form-field" disabled={locChecked ? true : checked ? false : true}>
        <div className="first-design">
            <div className="first-design-content">
                <select id="city" className="design-field" name="city" onChange={event} required>
                    <option value="" defaultValue hidden/>
                </select>
                <label htmlFor="design-field"><strong>Ville :</strong></label>
                <span></span>
            </div>
        </div>
    </div>
</>
)

export default DiscardLayout;