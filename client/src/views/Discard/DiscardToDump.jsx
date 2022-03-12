import { useLocation } from "react-router";
import Map from "../../components/others/Map";


const DiscardToDump = () => {
    const { city, location } = useLocation().state;
    const data = {...city, loc: location};

    return (
        <main className="map" id="main-content">
            <div className="map-field">
                <div className="map-field-wrapper">
                    <Map location={data}/>
                </div>
            </div>
        </main>
    )
}

export default DiscardToDump;