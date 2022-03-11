import * as L from "leaflet";

const itineraryFunction = () => {

// On s'assure que la page est chargée
window.onload = function(){
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
                        waypoints: [null],
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
                    var control = L.Routing.control({
                        waypoints: [null],
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
           
        }


    
}


export default itineraryFunction;
