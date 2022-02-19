import { useMap } from "react-leaflet";

export const DisplayMarker = ({leaflet, location}) => {
    const map = useMap();
    if(location.form === "discard") fetchDumpMarkers(leaflet, location, map);
    fetchMarker(leaflet, location, map);

    return null;
}

function fetchMarker(leaflet, location, map) {
    const blue_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    const position = location !== null ?  fetchPosition(leaflet, map, location) : fetchFromGPS(leaflet, map);

    let marker = leaflet.marker(position, {icon: blue_icon}).addTo(map);
    marker.bindPopup("You are here.");
}

async function fetchDumpMarkers(leaflet, location, map) {
    const red_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    let fetchedDump;

    //Pretty sure that's not safe agaisnt sql injection, even tho i splice it, i dunno yet.
    try {
        const dep = location.zip.slice(0,2);
        fetchedDump = await fetch(`http://localhost:5000/department/${dep}/dumps`).then((res) => res.json());
    } catch (error) {
        console.log(error.message);
    }

    fetchedDump.forEach(el => {
        let marker = leaflet.marker([el.lat, el.lon], {icon: red_icon}).addTo(map);
        marker.bindPopup(el.name)
    });
}

function fetchPosition(leaflet, map, location) {
    const position = {
        lat : location.lat,
        lng: location.long
    } 

    const approx_radius = 2000;
    const circle = leaflet.circle(position, approx_radius);
    map.flyTo(position, map.getZoom());
    circle.addTo(map);

    return position;
}

function fetchFromGPS(leaflet, map) {
    let position = "";
    map.locate().on("locationfound", function (e) {
        const radius = e.accuracy;
        const circle = leaflet.circle(e.latlng, radius);
        position = e.latlng;
        map.flyTo(e.latlng, map.getZoom());
        circle.addTo(map);
    });

    return position;
}