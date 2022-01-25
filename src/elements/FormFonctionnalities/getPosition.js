import react from "react";
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet'
import Map from "./map";
import React, { useRef, useState } from 'react';
import { useLocation } from "react-router";


const Getposition = () =>{
    // const location = Map();
    const loc = useLocation();
    const pointerLat = loc.state.cLat;
    const pointerLong = loc.state.cLong;

    return(
        <>
            <MapContainer center={[pointerLat,pointerLong]} zoom={13} scrollWheelZoom={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[pointerLat,pointerLong]}>
                        <Popup>
                            Here you are :-)
                        </Popup>
                    </Marker>
            </MapContainer>
        </>
    )
}

export default Getposition;