import { DisplayMarker } from "../../../utils/functions/MapManagement";
import { MapContainer, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";


const Map = ({location, event}) => (
    <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom style={{ height: "100%" }}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <DisplayMarker leaflet={Leaflet} location={location} event={event}/>
    </MapContainer>
)

export default Map;