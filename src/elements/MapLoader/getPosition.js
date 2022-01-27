// import React from "react";
// import { useLocation } from "react-router";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import Map from "./map";


// const Getposition = () =>{
//     const loc = useLocation();
//     const location = new Map();
//     return null;

//     // if(loc.state !== null) {
//     //     const pointerLat = loc.state.cLat;
//     //     const pointerLong = loc.state.cLong;
    
//     //     return(
//     //         <>
//     //             <MapContainer center={[pointerLat,pointerLong]} zoom={13} scrollWheelZoom={false}>
//     //                 <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     //                             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
//     //                     <Marker position={[pointerLat,pointerLong]}>
//     //                         <Popup>
//     //                             Here you are :-)
//     //                         </Popup>
//     //                     </Marker>
//     //             </MapContainer>
//     //         </>
//     //     )
//     // }else {
//     //     const location = Map();

//     //     return(
//     //         <>
//     //             {location.loaded && !location.error && (
//     //                 <MapContainer center={[location.coordinates.lat,location.coordinates.long]} zoom={13} scrollWheelZoom={false}>
//     //                     <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     //                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
//     //                         <Marker position={[location.coordinates.lat,location.coordinates.long]}>
//     //                             <Popup>
//     //                                 Here you are :-)
//     //                             </Popup>
//     //                         </Marker>
//     //                 </MapContainer>
//     //                 )}
//     //             {location.error &&  (
//     //                 <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom={false}>
//     //                     <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     //                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
//     //                         <Marker position={[48.889627,2.347078]}>
//     //                             <Popup>
//     //                                 Default position
//     //                             </Popup>
//     //                         </Marker>
//     //                 </MapContainer>
//     //             )}
//     //         </>
//     //     )
//     // }
// }

// export default Getposition;

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Getposition() {

    function LocationMarker() {

        const [position, setPosition] = useState([0, 0]);
        const [bbox, setBbox] = useState([]);

        useEffect(() => {
            console.log("Starting phase start now : ");
            console.log(navigator.geolocation)

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        setPosition([position.coords.latitude, position.coords.longitude])
                    },
                    function(error) {
                        console.log(error);
                    },
                    {timeout: 30000, enableHighAccuracy: true, maximumAge: 75000}
                )
            }

            console.log("After the change")
            console.log(position)
            // map.locate().on("locationfound", function (e) {
            //     console.log(e)
            //     setPosition(e.latlng);
            //     map.flyTo(e.latlng, map.getZoom());
            //     const radius = e.accuracy;
            //     const circle = L.circle(e.latlng, radius);
            //     circle.addTo(map);
            //     setBbox(e.bounds.toBBoxString().split(","));
            // });
        }, []);

        const defaultPosition = () => {
            return (
                <>
                    <Marker position={position}>
                        <Popup>
                            You are here. <br />
                            Map bbox: <br />
                            <b>Southwest lng</b>: {bbox[0]} <br />
                            <b>Southwest lat</b>: {bbox[1]} <br />
                            <b>Northeast lng</b>: {bbox[2]} <br />
                            <b>Northeast lat</b>: {bbox[3]}
                        </Popup>
                    </Marker>
                </>
            )
        };

        const foundPosition = () => {
            return (
                <>
                    <Marker position={position}>
                        <Popup>
                            You are here. <br />
                            Map bbox: <br />
                            <b>Southwest lng</b>: {bbox[0]} <br />
                            <b>Southwest lat</b>: {bbox[1]} <br />
                            <b>Northeast lng</b>: {bbox[2]} <br />
                            <b>Northeast lat</b>: {bbox[3]}
                        </Popup>
                    </Marker>
                </>
            )
        };

        // return position === null ? defaultPosition() : foundPosition();
        return (
            <>
                <p>BROOOOOOOOOO</p>
                {console.log(position)}
            </>
        )
    }

    return (
        <>
            <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom style={{ height: "100vh" }}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <LocationMarker />
            </MapContainer>
        </>
    );
}
