import React,{FunctionComponent } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { GoogleMap, useJsApiLoader,Marker ,DirectionsRenderer } from '@react-google-maps/api';
import './gethelp.css';
const GoogleMaps : FunctionComponent<any> = (props) => {
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });
  /*const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw",
    libraries: ["places"]
  })*/

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  return (
    <div>
      { isLoaded ? (
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Search within City" ,
                className: 'location-search-input',})} />

            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>) : <></>}
    </div>
  );
}
export default  GoogleMaps;