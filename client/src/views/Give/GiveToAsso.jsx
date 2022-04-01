import axios from "axios";
import { useLocation } from "react-router";
import { useRef, useMemo, useState } from "react";
import { Map } from "../../components/~items";
import { getToken } from "../../utils/functions/Functions";
import { Notif } from "../../utils/functions/Popup";

const GiveToAsso = () => {
    const save = useRef(true);
    const disabled = useRef(true);
    const [iconData, setIconData] = useState({name: "Non choisie", zip: "Non choisie", address: null});
    const { product, city, location } = useLocation().state;
    const data = {...city, loc: location};
    const dataResearch = {name: product.name, material: product.material, zip: city.zip, lat: city.lat, lon: city.long};

    const handleIconData = (name, zip, address, lat, lon) => {
        if(name === "Non choisie") disabled.current = true;
        else disabled.current = false;

        setIconData(prevVal => ({...prevVal, name: name, zip: zip, address: address, lat: lat, lon: lon}));
    }

    const saveResearch = async () => {
        if(iconData.name !== "Non choisie" || iconData.zip !== "Non choisie") {
            await axios.post("http://localhost:5001/api/user/save-give-research", {token : getToken(), assos: iconData, research: dataResearch})
            .then(res => { Notif("#786489", res.data.message); return res;})
            .catch(function(error) { console.error(error.response.data.message) } ); 
        }
    }

    const map = useMemo(() => {
        return (
            <div className="map-field-wrapper">
                <Map location={data} event={handleIconData}/>
            </div>
        )
    }, [save]);

    return (
        <main className="research" id="main-content">
            <div className="marg" />
            <div className="research-content">
                <div className="map-field">
                    {map}
                </div>
                <div className="icon-info">
                    <div className="icon-info-content">
                        <div className="research-info">
                            <h3>Resultat de la recherche</h3>
                            <span>{product.name} en {product.material}</span>
                            <span>{city.zip}</span>
                        </div>
                        <div className="location-info">
                            <h3>Association choisie</h3>
                            <span>{iconData.name}</span>
                            <span>{iconData.zip}</span>
                        </div>
                    </div>
                    <div className="icon-info-save">
                        {disabled.current ? 
                            <button className="button col-simple-disabled cursor">Choisissez une association</button>
                            :
                            <button className="button col-simple cursor" onClick={saveResearch}>Sauvergarder cette recherche</button>
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GiveToAsso;