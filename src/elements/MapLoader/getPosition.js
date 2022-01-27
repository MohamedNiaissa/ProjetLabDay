import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Getposition() {

    function LocationMarker() {

        const [position, setPosition] = useState([0, 0]);
        const map = useMap();
        const icon = L.icon({
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40],
            iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
            shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
        });

        useEffect(() => {
            map.locate().on("locationfound", function (e) {
                console.log(e)
                setPosition(e.latlng);
                map.flyTo(e.latlng, map.getZoom());
                const radius = e.accuracy;
                const circle = L.circle(e.latlng, radius);
                circle.addTo(map);
                console.log(e.bounds)
            });
        }, [map]);

        const defaultPosition = () => {
            return (
                <>
                    <Marker position={[48.889627,2.347078]} icon={icon}>
                        <Popup>
                            Position par defaut.
                        </Popup>
                    </Marker>
                </>
            )
        };

        const foundPosition = () => {
            return (
                <>
                    <Marker position={position} icon={icon}>
                        <Popup>
                            You are here.
                        </Popup>
                    </Marker>
                </>
            )
        };

        return position === null ? defaultPosition() : foundPosition();
    }

    return (
        <>
            <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom style={{ height: "60vh" }}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <LocationMarker />
            </MapContainer>
        </>
    );
}
