import React from "react";
import { useLocation } from "react-router";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Map from "./map";


const Getposition = () =>{
    const loc = useLocation();

    if(loc.state !== null) {
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
    }else {
        const location = Map();

        return(
            <>
                {location.loaded && !location.error && (
                    <MapContainer center={[location.coordinates.lat,location.coordinates.long]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={[location.coordinates.lat,location.coordinates.long]}>
                                <Popup>
                                    Here you are :-)
                                </Popup>
                            </Marker>
                    </MapContainer>
                    )}
                {location.error &&  (
                    <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                            <Marker position={[48.889627,2.347078]}>
                                <Popup>
                                    Default position
                                </Popup>
                            </Marker>
                    </MapContainer>
                )}
            </>
        )
    }
}

export default Getposition;