import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Routing from "./components/Routing";

export default function App() {
  const position = [19.4, 78.4]; // Posição central do mapa

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer center={position} zoom={6} className="leaflet-container">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Routing />
      </MapContainer>
    </div>
  );
}