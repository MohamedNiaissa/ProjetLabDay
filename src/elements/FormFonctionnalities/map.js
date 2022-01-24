import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { error } from 'jquery';



const Map = () =>{
     
     const[location, setLocation] = useState({
         loaded: false,
         coordinates : {lat : "", long : ""} 
     })

     const onSuccess = (location) => {
        setLocation({
            loaded:true,
            coordinates: {
                lat : location.coords.latitude,
                long : location.coords.longitude
            }
        })
     }
     const onError = () =>{
         setLocation({
            loaded:true,
            error,
         });
     }
    useEffect(() => {
        if(! "geolocation" in navigator){
                onError({
                    code:0,
                    message:"Geolocation not supported",
                });
        }
        navigator.geolocation.getCurrentPosition(onSuccess,onError)
     },[])

     return location
    }
        // return(
        //     <>
             
        //      <MapContainer center={defaultcenter} zoom={13} scrollWheelZoom={false}>
        //     <TileLayer
        //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //     />
        //     <Marker position={[51.505, -0.09]}>
        //         <Popup>
        //             Here you are :-)
        //         </Popup>
        //     </Marker>
        //     </MapContainer>
        //     {/* <button onSubmit={this.handleChange()}> click</button> */}
        //     </>
        // )
      
    
  



export default Map;
