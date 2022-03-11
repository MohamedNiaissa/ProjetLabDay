import { useLocation } from "react-router";
import Map from "../../components/others/Map";
import Maplocation from "../../components/others/MapLocation";

import Layout from "../../components/layout/Layout";
import * as L from 'leaflet';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import "leaflet-control-geocoder";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import Leaflet from "leaflet";
import { DisplayMarkerLocal } from "../../utils/functions/MapManagement";



const Locateuser = () => {

<<<<<<< HEAD
    
// On s'assure que la page est chargée

window.onload = function(){
    let fetchedDump;
    //Pretty sure that's not safe agaisnt sql injection, even tho i splice it, i dunno yet.
    try {
        // const dep = L.zip.slice(0,2);
        fetchedDump =  fetch(`http://localhost:5001/department/77/dumps`).then((res) => res.json());
    } catch (error) {
        console.log(error.message);
    }
    console.log(fetchedDump)
=======
// On s'assure que la page est chargée

window.onload = function(){
    // let fetchedDump;
    //Pretty sure that's not safe agaisnt sql injection, even tho i splice it, i dunno yet.
    // try {
    //     // const dep = L.zip.slice(0,2);
    //     fetchedDump =  fetch(`http://localhost:5001/department/77/dumps`).then((res) => res.json());
    // } catch (error) {
    //     console.log(error.message);
    // }
    // console.log(fetchedDump)
>>>>>>> main
    // const poslat = location.lat;
    // const poslong = location.long;

    // const posPlusProche = comparePositions(poslat,poslong,fetchedDump);

    // let marker = L.marker([fetchedDump[1].lat, fetchedDump[1].lon]).addTo(macarte);
    // marker.bindPopup(el.name)
    
    //  fetchedDump.forEach(el => {
    //     let marker = L.marker([el.lat, el.lon]).addTo(macarte);
    //     marker.bindPopup(el.name)
    //  });

// On initialise la carte sur les coordonnées GPS de Paris

let macarte = L.map('carte').setView([48.852969, 2.349903], 13)

// On charge les tuiles depuis un serveur au choix, ici OpenStreetMap France
L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20
}).addTo(macarte)

function popupMessage(container) {
    var btn = L.DomUtil.create('p', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = "Final Destination";
    return btn;
}

macarte.once('click', async function(e) {    
    // window.alert("Locate user")
    var container = L.DomUtil.create('div');
    var destBtn = popupMessage(container);
   
    L.popup()
        .setContent(container)
        .setLatLng(e.latlng)
        .openOn(macarte);

        function getPosition() {
            return new Promise((res, rej) => {
                navigator.geolocation.getCurrentPosition(res, rej)
            }).then(res => { return res }).catch(error => {console.log(error)});
        }
        
        if ("geolocation" in navigator) {
            const result = await getPosition();
            try{
                var control = L.Routing.control({
                    // serviceUrl: 'http://my-osrm/route/v1',
                    waypoints: [
                        L.latLng(result.coords.latitude,result.coords.longitude),
                        L.latLng(" string address")
                    ],
                    routeWhileDragging: true,
                    show: true,
                    language: 'fr',
                    geocoder: L.Control.Geocoder.nominatim(),
                    autoRoute: true 
                }).addTo(macarte)
                control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
                macarte.closePopup();
            }catch(error){
                console.log("catchhhhhh")
                console.log(error)
                var control = L.Routing.control({
                    // serviceUrl: 'http://my-osrm/route/v1',
                    waypoints: [
                        L.latLng(48.856614,2.3522219),
                        L.latLng("string address")
                    ],
                    routeWhileDragging: true,
                    show: true,
                    language: 'fr',
                    geocoder: L.Control.Geocoder.nominatim(),
                    autoRoute: true 
                }).addTo(macarte)
                control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
                macarte.closePopup();
            }
        } else {
            alert("Géolocalisation indisponible");
            console.log('erreur')
            var control = L.Routing.control({
                waypoints: [null],
                serviceUrl: 'http://my-osrm/route/v1',
                waypoints: [
                    L.latLng(48.856614,2.3522219),
                    L.latLng(" string address")
                ],
                routeWhileDragging: true,
                show: true,
                language: 'fr',
                geocoder: L.Control.Geocoder.nominatim(),
                autoRoute: true 
            }).addTo(macarte)
        }
    });              


    const icon = document.querySelectorAll(".leaflet-marker-icon");
    
    if(icon != undefined){
        for(var i=0;icon.length;i++){
            icon[i].setAttribute('src', 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png');
        }   
    }

    if(icon != undefined){
    macarte.on('keydown',function(){
        const icon = document.querySelectorAll(".leaflet-marker-icon");
        for(var i=0;icon.length;i++){
            icon[i].setAttribute('src', 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon-2x.png');
        }
    })   
}  
}
}

const DiscardToDump = () => {
    const {location, city} = useLocation().state;
<<<<<<< HEAD

    console.log(location)

    return (
        <Layout>
            <main className="map" id="main-content">
                <div className="map-field">
                    <div className="map-field-wrapper" >
                        {location ?        
                            <Maplocation event={Locateuser()}/> 
                            :
                            <Map location={city} />
=======

    console.log(location)

    return (
        <Layout>
            <main className="map" id="main-content">
                <div className="map-field">
                    <div className="map-field-wrapper" >
                        {location ?        
                            null
                            :
                            <>
                            {/* <Map location={city} />    */}
                            <Maplocation event={Locateuser()}/>
                            </>

>>>>>>> main
                        }
                    </div>
                </div>
            </main>
        </Layout>
    )
}
<<<<<<< HEAD
=======

export default DiscardToDump;
















// import { useLocation } from "react-router";
// import Map from "../../components/others/Map";


// const DiscardToDump = () => (
//     <main className="map" id="main-content">
//         <div className="map-field">
//             <div className="map-field-wrapper">
//                 <Map location={useLocation().state.city}/>
//             </div>
//         </div>
//     </main>
// )
>>>>>>> main

// export default DiscardToDump;