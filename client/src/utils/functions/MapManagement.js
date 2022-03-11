import { useMap } from "react-leaflet";
import * as L from 'leaflet';


export const DisplayMarker = ({leaflet, location}) => {
    const map = useMap();
    if(location.form === "discard") fetchDumpMarkers(leaflet, location, map);
    fetchMarker(leaflet, location, map);
    return null;
}

export const DisplayMarkerLocal = () => {
    const map = useMap();
    console.log("DisplayMarkerLocal")
    fetchDumpMarkersLocal(map);
    fetchMarkerLocal(map);
    return null;
}

function fetchMarkerLocal(map) {
    console.log("fetchMarkerLocal")
    const blue_icon = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });
    console.log("fetchMarker")

    // const position = location !== null ?  fetchPosition(leaflet, map, location) : fetchFromGPS(leaflet, map);
    let marker = L.marker({icon: blue_icon}).addTo(map);
    marker.bindPopup("You are here.");
}

function fetchMarker(leaflet, location, map) {
    const blue_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });
    console.log("fetchMarker")

    const position = location !== null ? fetchPosition(leaflet, map, location) : fetchFromGPS(leaflet, map);
    let marker = leaflet.marker(position, {icon: blue_icon}).addTo(map);
    marker.bindPopup("You are here.");
}

async function fetchDumpMarkersLocal(map) {
    console.log("fetchDumpMarkersLocal")
    const red_icon = L.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    let fetchedDump;

    //Pretty sure that's not safe agaisnt sql injection, even tho i splice it, i dunno yet.
    try {
        const dep = L.zip.slice(0,2);
        fetchedDump = await fetch(`http://localhost:5001/department/77/dumps`).then((res) => res.json());
    } catch (error) {
        console.log(error.message);
    }

    // const poslat = location.lat;
    // const poslong = location.long;

    // const posPlusProche = comparePositions(poslat,poslong,fetchedDump);

    fetchedDump.forEach(el => {
        let marker = L.marker([el.lat, el.lon], {icon: red_icon}).addTo(map);
        marker.bindPopup(el.name)
    });

    console.table(fetchedDump)

    // let marker = leaflet.marker([posPlusProche[0], posPlusProche[1]], {icon: red_icon}).addTo(map);
    // marker.bindPopup(el.name)
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
<<<<<<< HEAD
        fetchedDump = await fetch(`http://localhost:5001/department/${dep}/dumps`).then((res) => res.json());
=======
        fetchedDump = await fetch(`http://localhost:5001/api/department/${dep}/dumps`).then((res) => res.json());
>>>>>>> main
    } catch (error) {
        console.log(error.message);
    }

    const poslat = location.lat;
    const poslong = location.long;

    // const posPlusProche = comparePositions(poslat,poslong,fetchedDump);

    fetchedDump.forEach(el => {
        let marker = leaflet.marker([el.lat, el.lon], {icon: red_icon}).addTo(map);
        marker.bindPopup(el.name)
    });

    // let marker = leaflet.marker([posPlusProche[0], posPlusProche[1]], {icon: red_icon}).addTo(map);
    // marker.bindPopup(el.name)
}

function comparePositions(poslat,poslong,fetchedDump){

    let latLong = [];
    let dist = 10000;
    fetchedDump.forEach(el => {
        let provisionaryDist = Math.sqrt(((el.lon-poslong)*(el.lon-poslong))+((el.lat-poslat)*(el.lat-poslat)));
        console.log(provisionaryDist);
        if(provisionaryDist < dist){
            dist = provisionaryDist;
            latLong[0] = el.lat;
            latLong[1] = el.lon;
        }
    });

    console.log(latLong);

    return latLong;
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