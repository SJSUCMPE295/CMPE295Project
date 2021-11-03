import React, { Component, useRef ,useEffect, useState}  from "react";
import css from './GetHelp.module.css';


const getHelp: React.FC<any> = () => {
  const [loc_lat, setloc_lat] = useState(0);
  //const loc_lat = React.useRef<HTMLLabelElement>(null);
  useEffect( () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setloc_lat(position.coords.latitude);})
}, [] );
  /*const location= () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setloc_lat(position.coords.latitude);})
    }*/
  
 return(
  <React.Fragment><div className={css.wrapper}>GetHelp
 <p>
   <label className="location_lat">{loc_lat}</label>
   </p> 
  </div></React.Fragment>
);
};

export default getHelp;



