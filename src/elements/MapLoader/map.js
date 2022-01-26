import React, { useState, useEffect  } from 'react';
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
        if(!"geolocation" in navigator){
                onError({
                    code:0,
                    message:"Geolocation not supported",
                });
        }
        navigator.geolocation.getCurrentPosition(onSuccess,onError)
     },[])

     return location
}

export default Map;
