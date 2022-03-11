import { ImageOverlay, MapContainer, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";
import { DisplayMarker } from "../../utils/functions/MapManagement";
import "leaflet/dist/leaflet.css";



// let  macarte = L.map('carte').setView([48.852969, 2.349903], 13);

const Map = ({location,macarte}) => (
    
    <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom style={{ height: "60vh" }}>
        <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <DisplayMarker leaflet={Leaflet} location={location}/>
    </MapContainer>
)

export default Map;