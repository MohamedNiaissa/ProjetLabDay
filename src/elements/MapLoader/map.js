import React, { useState, useEffect  } from 'react';
import { error } from 'jquery';

// const Map2 = () =>{
     
//     const[location, setLocation] = useState({
//          loaded: false,
//          coordinates: {lat: "", long: ""} 
//      })

//     const onSuccess = (location) => {
//         console.log("hey i'm good")
//         setLocation({
//             loaded:true,
//             coordinates: {
//                 lat: location.coords.latitude,
//                 long: location.coords.longitude
//             }
//         })
//         console.log(location)
//     }

//     const onError = () =>{
//         console.log("hey i'm bad")
//          setLocation({
//             loaded:true,
//             error,
//          });
//          console.log(location)
//     }

//     useEffect(() => {
//         if(!"geolocation" in navigator){
//                 onError({
//                     code:0,
//                     message:"Geolocation not supported",
//                 });
//         }

//         console.log(navigator.geolocation)
//         navigator.geolocation.getCurrentPosition(onSuccess,onError)
//      },[])

//      return location
// }

// export default Map2;


class Map extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }

    render() {
        return (
            <>
            <p>Here's some text</p>
            </>
        )
    }
}

export default Map;