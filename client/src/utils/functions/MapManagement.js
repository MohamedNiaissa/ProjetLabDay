import { useMap } from "react-leaflet";
import * as L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";

export const DisplayMarker = ({leaflet, location, event}) => {
    const map = useMap();
    console.log(location)

    if(location?.form === "discard") {
        fetchDumpMarkers(leaflet, location, map, event);
        fetchMarker(leaflet, location, map);
    }else if(location?.form === "give") {
        fetchMarker(leaflet, location, map);
        fetchAssoMarkers(leaflet, location, map, event);
    }else if(location?.form === "disList") {
        fetchMapList(leaflet, location.dump, location.research, map);
        fetchListMarker(leaflet, location, map);
    }else if(location?.form === "givList") {
        fetchMapList(leaflet, location.assos, location.research, map);
        fetchListMarker(leaflet, location, map);
    }

    return null;
}

function fetchMarker(leaflet, location, map) {
    const blue_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    console.log(location.loc)
    location.loc ? fromGps(leaflet, map, blue_icon) : fromZip(leaflet, map, location, blue_icon);
}

function fetchListMarker(leaflet, location, map) {
    const blue_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    fromZipList(leaflet, map, location, blue_icon);
}

async function fetchDumpMarkers(leaflet, location, map, event) {
    async function getPosition() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej)
        }).then(res => { return res }).catch(error => {console.log(error)});
    }

    const red_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    const result = await getPosition();
    let fetchedDump;

    try {
        const dep = location.zip.slice(0,2);
        fetchedDump = await fetch(`http://localhost:5001/api/department/${dep}/dumps`).then((res) => res.json());
    } catch (error) {
        console.log(error.message);
    }

    let routes = [];
    fetchedDump.forEach(function (el, i) {
        let { name, address, zip } = el;
        name = name.replaceAll(" ", "+");
        address = address.replaceAll(" ", "+");
        zip = zip.replaceAll(" ", "+");

        const data = location.loc ? {lat : result.coords.latitude, lon: result.coords.longitude} : {lat: location.lat, lon: location.long}
        routes[i] = {route: null, mode: 1, await: undefined, icon: false};
        let marker = leaflet.marker([el.lat, el.lon], {icon: red_icon}).addTo(map);
        marker.bindPopup(`${el.name}` + "</br>" + "<a href=" + `https://www.google.com/search?q=${name}+${address}+${zip}` + ' target="_blank">En savoir plus =></a>');
        marker.on("click", function(e) {
            if(routes[i].await) routes[i].await = false;

            if(routes[i].mode === 1 && routes[i].await === undefined) {
                let route = L.Routing.control({
                    language: 'fr',
                    waypoints: [
                        L.latLng(data.lat, data.lon),
                        L.latLng(e.latlng.lat,e.latlng.lng)
                    ],
                    collapsible: true,
                    createMarker: function() { return null; },
                }).addTo(map);

                event(el.name, el.zip, el.address, el.lat, el.lon);
                routes[i] = {route: route, mode: 2, await: true, icon: true};
                
                routes.forEach(obj => {
                    if(obj.icon && obj.route !== route) {
                        map.removeControl(obj.route);
                        obj.route = null;
                        obj.mode = 1;
                        obj.await = undefined;
                        obj.icon = false;
                    }
                })
            }

            if(routes[i].mode === 2 && !routes[i].await) {
                event("Non choisie", "Non choisie", null, null, null);

                routes.forEach(obj => {
                    if(obj.route !== null) {
                        map.removeControl(obj.route);
                        obj.route = null;
                        obj.mode = 1;
                        obj.await = undefined;
                        obj.icon = false;
                    }
                })
            }
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

function fromZipList(leaflet, map, location, blue_icon) {
    const position = { lat : location.research.lat, lng: location.research.lon } 

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

function fetchMapList(leaflet, result, research, map) {
    const red_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    let { name, address, zip, lat, lon } = result;
    name = name.replaceAll(" ", "+");
    address = address.replaceAll(" ", "+");
    zip = zip.replaceAll(" ", "+");

    const routes = {route: null, mode: 1, await: undefined, icon: false};
    let marker = leaflet.marker([lat, lon], {icon: red_icon}).addTo(map);
    marker.bindPopup(`${result.name}` + "</br>" + "<a href=" + `https://www.google.com/search?q=${name}+${address}+${zip}` + ' target="_blank">En savoir plus =></a>');
    L.Routing.control({
        language: 'fr',
        waypoints: [
            L.latLng(research.lat, research.lon),
            L.latLng(result.lat, result.lon)
        ],
        collapsible: true,
        createMarker: function() { return null; },
    }).addTo(map);
}

async function fetchAssoMarkers(leaflet, location, map, event) {
    async function getPosition() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej)
        }).then(res => { return res }).catch(error => {console.log(error)});
    }

    const red_icon = leaflet.icon({ iconSize: [25, 41], iconAnchor: [10, 41], popupAnchor: [2, -40],
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    });

    const result = await getPosition();
    let fetchedAsso;

    try {
        const dep = location.zip.slice(0,2);
        fetchedAsso = await fetch(`http://localhost:5001/api/department/${dep}/assos`).then((res) => res.json());
    } catch (error) {
        console.log(error.message);
    }

    let routes = [];
    fetchedAsso.forEach(function (el, i) {
        let { name, address, zip } = el;
        name = name.replaceAll(" ", "+");
        address = address.replaceAll(" ", "+");
        zip = zip.replaceAll(" ", "+");

        const data = location.loc ? {lat : result.coords.latitude, lon: result.coords.longitude} : {lat: location.lat, lon: location.long}
        routes[i] = {route: null, mode: 1, await: undefined, icon: false};
        let marker = leaflet.marker([el.lat, el.lon], {icon: red_icon}).addTo(map);
        marker.bindPopup(`${el.name}` + "</br>" + "<a href=" + `https://www.google.com/search?q=${name}+${address}+${zip}` + ' target="_blank">En savoir plus =></a>');
        marker.on("click", function(e) {
            if(routes[i].await) routes[i].await = false;

            if(routes[i].mode === 1 && routes[i].await === undefined) {
                let route = L.Routing.control({
                    language: 'fr',
                    waypoints: [
                        L.latLng(data.lat, data.lon),
                        L.latLng(e.latlng.lat,e.latlng.lng)
                    ],
                    collapsible: true,
                    createMarker: function() { return null; },
                }).addTo(map);

                event(el.name, el.zip, el.address, el.lat, el.lon);
                routes[i] = {route: route, mode: 2, await: true, icon: true};
                
                routes.forEach(obj => {
                    if(obj.icon && obj.route !== route) {
                        map.removeControl(obj.route);
                        obj.route = null;
                        obj.mode = 1;
                        obj.await = undefined;
                        obj.icon = false;
                    }
                })
            }

            if(routes[i].mode === 2 && !routes[i].await) {
                event("Non choisie", "Non choisie", null, null, null);

                routes.forEach(obj => {
                    if(obj.route !== null) {
                        map.removeControl(obj.route);
                        obj.route = null;
                        obj.mode = 1;
                        obj.await = undefined;
                        obj.icon = false;
                    }
                })
            }
        });
    });
}