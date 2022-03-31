import { useLocation } from "react-router";
import { useRef, useMemo, useState } from "react";
import { Map } from "../../components/~items";


const GiveToAsso = () => {

    // return (
    //     <main className="map" id="main-content">
    //         <div className="map-field">
    //             <div className="map-field-wrapper">
    //                 <Map location={useLocation().state.city}/>
    //             </div>
    //         </div>
    //     </main>
    // )

    const save = useRef(true);
    const disabled = useRef(true);
    const [iconData, setIconData] = useState({name: "Non choisie", zip: "Non choisie", address: null});
    const { product, city, location } = useLocation().state;
    const data = {...city, loc: location};
    // const dataResearch = {name: product.name, material: product.material, zip: city.zip, lat: city.lat, lon: city.long};

    const handleIconData = (name, zip, address, lat, lon) => {
        if(name === "Non choisie") disabled.current = true;
        else disabled.current = false;

        setIconData(prevVal => ({...prevVal, name: name, zip: zip, address: address, lat: lat, lon: lon}));
    }

    const saveResearch = async () => {
        console.log("mdr");
        // if(iconData.name !== "Non choisie" || iconData.zip !== "Non choisie") {
        //     await axios.post("http://localhost:5001/api/user/save-discard-research", {token : getToken(), dump: iconData, research: dataResearch})
        //     .then(res => { console.log(res.data.message); return res;})
        //     .catch(function(error) { console.error(error.response.data.message) } ); 
        // }
    }

    const map = useMemo(() => {
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
                            <h3>Décharge choisie</h3>
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