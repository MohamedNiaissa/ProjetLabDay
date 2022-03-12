import { useMap } from "react-leaflet";
import * as L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

export const DisplayMarker = ({leaflet, location}) => {
    const map = useMap();

    if(location?.form === "discard") fetchDumpMarkers(leaflet, location, map);
    fetchMarker(leaflet, location, map);

    return null;
}

function fetchMarker(leaflet, location, map) {
    const blue_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    location.loc ? fromGps(leaflet, map, blue_icon) : fromZip(leaflet, map, location, blue_icon);
}

async function fetchDumpMarkers(leaflet, location, map) {
    const red_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    let fetchedDump;

    try {
        const dep = location.zip.slice(0,2);
        fetchedDump = await fetch(`http://localhost:5001/api/department/${dep}/dumps`).then((res) => res.json());
    } catch (error) {
        console.log(error.message);
    }

    function getPosition() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej)
        }).then(res => { return res }).catch(error => {console.log(error)});
    }

    const result = await getPosition();

    fetchedDump.forEach(el => {
        let marker = leaflet.marker([el.lat, el.lon], {icon: red_icon}).addTo(map);
        marker.bindPopup(el.name);
        marker.on("click", function(e) {
            L.Routing.control({
                language: 'fr',
                waypoints: [
                    L.latLng(result.coords.latitude,result.coords.longitude),
                    L.latLng(e.latlng.lat,e.latlng.lng)
                ],
                collapsible: true,
                createMarker: function() { return null; },
            }).addTo(map);
        });
    });
}

function fromZip(leaflet, map, location, blue_icon) {
    const position = { lat : location.lat, lng: location.long } 

    const approx_radius = 2000;
    const circle = leaflet.circle(position, approx_radius);
    const marker = leaflet.marker(position, {icon: blue_icon}).addTo(map);
    marker.bindPopup("You are here.");
    map.flyTo(position, map.getZoom());
    circle.addTo(map);
}

function fromGps(leaflet, map, blue_icon) {
    const user = map.locate();

    user.on("locationfound", function (e) {
        const radius = e.accuracy;
        const circle = leaflet.circle(e.latlng, radius);
        const marker = leaflet.marker(e.latlng, {icon: blue_icon}).addTo(map);
        marker.bindPopup("You are here.");
        map.flyTo(e.latlng, map.getZoom());
        circle.addTo(map);
    })
}