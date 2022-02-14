import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import garbages from '../../Garbage';


export default function Getposition() {

    const posFromForm = useLocation().state;
    const pos = posFromForm  === null ? null : {
        lat: posFromForm.cLat,
        lng: posFromForm.cLong
    }

    function LocationMarker() {
        const map = useMap();
        const icon = L.icon({
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40],
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        });

        const [position, setPosition] = useState([0, 0]);

        useEffect(() => {
            if(pos === null) {
                map.locate().on("locationfound", function (e) {
                    const radius = e.accuracy;
                    const circle = L.circle(e.latlng, radius);
                    setPosition(e.latlng);
                    map.flyTo(e.latlng, map.getZoom());
                    circle.addTo(map);
                });
            }else {
                const radius = 2000;
                const circle = L.circle(pos, radius);
                setPosition(pos);
                map.flyTo(pos, map.getZoom());
                circle.addTo(map);
            }
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

    function LocationGarbage() {
        const data = useLocation().state;
        const map = useMap();
        
        if(data.form !== "trash") return null;

        const dep =  data.cZip.slice(0,2);
        const items = garbages.find(el => el.dep === `${dep}`).content;
        const red_icon = L.icon({
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40],
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        });

        items.forEach(el => {
            let marker = L.marker([el.lat, el.long], {icon: red_icon}).addTo(map);
            marker.bindPopup(el.name)
        })

        return null;
    }

    return (
        <>
            <MapContainer center={[48.889627,2.347078]} zoom={13} scrollWheelZoom style={{ height: "60vh" }}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <LocationMarker />
                <LocationGarbage />
            </MapContainer>
        </>
    );
}
