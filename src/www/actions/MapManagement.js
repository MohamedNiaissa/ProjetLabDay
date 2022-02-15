import { useMap } from "react-leaflet";

export const DisplayMarker = ({leaflet, location, dump}) => {
    const map = useMap();
    if(location.form === "trash") fetchDumpMarkers(leaflet, location, map, dump);
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

function fetchDumpMarkers(leaflet, location, map, dump) {
    const red_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    const dep = location.cZip.slice(0,2);
    const items = dump.find(el => el.dep === `${dep}`).content;

    items.forEach(el => {
        let marker = leaflet.marker([el.lat, el.long], {icon: red_icon}).addTo(map);
        marker.bindPopup(el.name)
    });
}

function fetchPosition(leaflet, map, location) {
    const position = {
        lat : location.cLat,
        lng: location.cLong
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