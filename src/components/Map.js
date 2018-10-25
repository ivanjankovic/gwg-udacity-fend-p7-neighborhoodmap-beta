import React, {Component} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(
    withGoogleMap( props => (
        <GoogleMap defaultZoom={17} defaultCenter={{ lat: 40.741469, lng: -74.003387 }}>
            {props.isMarkerShown && (
                <Marker position={{ lat: 40.741469, lng: -74.003387 }} />
            )}
        </GoogleMap>
    ))
);


export default class Map extends Component {
    render() {
        return (
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDS-ak8ed2Bx4ib-u9-9KCRHdLJVKYKvlY"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}