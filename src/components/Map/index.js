import React, { Component, useState } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import * as S from "./style";
import Header from "../Header/index";
import Container from 'react-bootstrap/Container';
import Footer from "../Footer/index";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const mapStyles = {
  width: '60%',
  height: '60%'
};



const MapContainer = () => {
    const [showingInfoWindow, setInfoWindow] = useState(true);
    const [activeMarker, setMarker] = useState({});
    const [selectedPlace, setPlace] = useState({});

    const onMarkerClick = (props, marker, e) => {
      setInfoWindow(true);
      setMarker(marker);
      setPlace(props.name);
    };

    const onClose = props => {
      setInfoWindow(false);
      setMarker(null);
    };

    return (
      <>
        <Header></Header>
          <S.Div>
            <div>
            <Map
                google={window.google}
                zoom={14}
                containerStyle={mapStyles}
                initialCenter={{
                 lat: '49.0016081',
                 lng: '2.180028'}}
                >
               <Marker
                 onClick={onMarkerClick}
                 name={'Incandescance'}
               />
               <InfoWindow
                 marker={activeMarker}
                 visible={showingInfoWindow}
                 onClose={onClose}
               >
               <div>
                 <h4>Incandescance</h4>
               </div>
              </InfoWindow>
             </Map>
             </div>
             <div>
               slslsl
             </div>
            </S.Div>
      </>
    );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeHgAxWuGs6YBx9j3Ox4Ajpp9nnqrrkDU'
})(MapContainer);
