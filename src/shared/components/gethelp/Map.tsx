/*import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";

const MapWithADirectionsRenderer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCW3O6PQctDxoSoSNYWVa44nXc1ze4V-Nw&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `200px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
      destinationaddress:destinationaddress,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();
//var originaddress=props.originaddress;

DirectionsService.route({
  origin: new google.maps.LatLng(41.8507300, -87.6512600),
  destination: destinationaddress,
  travelMode: google.maps.TravelMode.DRIVING,
}, (result, status) => {
  if (status === google.maps.DirectionsStatus.OK) {
    this.setState({
      directions: result,
    });
  } else {
    console.error(`error fetching directions ${result}`);
  }
});
      }
    })
  )(props =>
    <GoogleMap
      defaultZoom={7}
      defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );

  export default MapWithADirectionsRenderer;
  
  /*import React, { Component } from 'react';
  import { Polyline, Marker } from 'react-google-maps';
  //import { pinkA200, blue500 } from 'material-ui/styles/colors';
  import ntol from 'number-to-letter';
  import _ from 'lodash';
  
  const DirectionMarker = ({ data, isEnd, i, onClick }) => {
      const { start_location, end_location } = data;
      if (isEnd) {
          return [
              <Marker onClick={onClick} position={start_location} label={ntol(i)} key="end0" />,
              <Marker onClick={onClick} position={end_location} label={ntol(i + 1)} key="end1" />
          ];
      }
      return <Marker onClick={onClick} position={start_location} label={ntol(i)} />;
  };      
  
  const Direction = ({ direction, isEnd, i, onClick, isSelected }) => {
      const data = direction.routes[0].legs[0];
      const path = data.steps.reduce((sum, current) => _.concat(sum, current.path), []);
      return [
          <DirectionMarker data={data} onClick={onClick} isEnd={isEnd} i={i} key="marker" />,
          <Polyline
          onClick={onClick}
          path={path}
          options={{
              //strokeColor: isSelected ? pinkA200 : blue500,
              strokeOpacity: 0.6,
              strokeWeight: 6
          }}
          key="line"
          />
      ];
  };
  
  class Directions extends Component {
      constructor(props) {
          super(props);
          this.state = { selectedSegment: 0 };
      }
  
      render() {
          const { directions } = this.props;
          if (_.isEmpty(directions)) {
              return false;
          }
          return directions.map((d, i) => {
              const directionProps = {
                  direction: d,
                  i,
                  key: i,
                  onClick: () => this.setState({ selectedSegment: i }),
                  isEnd: i === directions.length - 1,
                  isSelected: i === this.state.selectedSegment
              };
              return <Direction {...directionProps} />;
          });
      }
  }
  
  export default Directions;*/

  
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import {
  withGoogleMap,
  Marker,
  GoogleMap,
  DirectionsRenderer
} from 'react-google-maps';
class Map extends Component {
  state = {
    directions: null,
    markerPos: null,
    centerMarker: null,
    currentLocation: null
  };

  componentDidMount = () => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        this.setState({ currentLocation: pos, centerMarker: pos });
      }
    );
  };

  onMapClick = e => {
    this.setState({ markerPos: e.latLng });
  };

  getDirections = () => {
    const directionsService = new google.maps.DirectionsService();

    const origin = this.state.currentLocation;
    const destination = this.state.markerPos;

    if (origin !== null && destination !== null) {
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    } else {
      console.log('Please mark your destination in the map first!');
    }
  };

  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
        center={this.state.currentLocation}
        onClick={this.onMapClick}
      >
        {this.state.centerMarker !== null && (
          <Marker position={this.state.centerMarker} label={'userloc'} />
        )}
        {this.state.markerPos !== null && (
          <Marker position={this.state.markerPos} />
        )}
        {this.state.directions !== null && (
          <DirectionsRenderer
            directions={this.state.directions}
            defaultOptions={{
              suppressMarkers: true
            }}
          />
        )}
      </GoogleMap>
    ));

    return (
      <div>
        <Button onClick={this.getDirections}>Get Direction</Button>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: '500px' }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;
