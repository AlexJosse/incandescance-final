import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import * as S from "./style";
import Header from "../Header/index";
import MapContainer from "../Map/index";
import Container from 'react-bootstrap/Container';
import Footer from "../Footer/index";

const places = [
  {
    name: "Newcastle",
    title: "Newcastle",
    lat: -33.0029954,
    lng: 147.204751,
    id: 1
  },
  {
    name: "Sydney",
    title: "Sydney",
    lat: -33.847927,
    lng: 150.6517938,
    id: 2
  },
  {
    name: "Melbourne",
    title: "Melbourne",
    lat: -37.9722342,
    lng: 144.7729561,
    id: 3
  },
  {
    name: "Perth",
    title: "Perth",
    lat: -31.9546904,
    lng: 115.8350292,
    id: 4
  }
];

const Plan = () => {
    return (
      <>
    <div>
    <MapContainer
      googleMapURL="https://maps.googleapis.com/maps/api/js?key="
      loadingElement={<div style={{ height: `50px` }} />}
      containerElement={<div style={{ height: `300px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      center={{ lat: -24.9923319, lng: 135.2252427 }}
      zoom={4}
      places={places}
    />
    </div>
    <div>
      dsds
    </div>
    </>
    );
}

export default Plan;
