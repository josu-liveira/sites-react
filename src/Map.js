import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "./components/Routing";
import "./styles.css";

class MapComponent extends Component {
  constructor() {
    super();
    this.state = {
      lat: 19.4,
      lng: 78.4,
      zoom: 20,
      isMapInit: false
    };
  }

  saveMap = map => {
    this.map = map;
    this.setState({
      isMapInit: true
    });
  };

  render() {
    const { lat, lng, zoom } = this.state;
    const position = [lat, lng];

    return (
      <Map center={position} zoom={zoom} ref={this.saveMap} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {this.state.isMapInit && <Routing map={this.map} />}
      </Map>
    );
  }
}

export default MapComponent;
