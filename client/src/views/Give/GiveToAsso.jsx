import { useLocation } from "react-router";
import Map from "../../components/others/Map";


const GiveToAsso = () => (
    <main className="map" id="main-content">
        <div className="map-field">
            <div className="map-field-wrapper">
                <Map location={useLocation().state.city}/>
            </div>
        </div>
    </main>
)

export default GiveToAsso;