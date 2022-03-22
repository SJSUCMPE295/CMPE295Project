import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
const getLocation = () =>{
   const pos = {};
   const geolocation = navigator.geolocation;
   if (geolocation) {
      geolocation.getCurrentPosition(findLocal, showEror);
   }
   function findLocal(position){
      pos.lat = position.coords.latitude;
      pos.lng = position.coords.longitude;
   }
   function showEror(){console.log(Error)}
   return pos;
};
//const myLocation = getLocation(); 

export default getLocation;