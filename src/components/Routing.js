import React from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";


const Routing = () => {
  const map = useMap();

  React.useEffect(() => {
    if (!map) return;

    const coordIda = [
      L.latLng(-11.75155, -55.46667),
      L.latLng(-12.62022, -55.76575),
      L.latLng(-14.09820, -56.11657),
      L.latLng( -15.64783, -56.19716)
    ];

    const coordVolta = [
      L.latLng(-15.64701, -56.19764),
      L.latLng(-14.09820, -56.11657),
      L.latLng(-12.62022, -55.76575),
      L.latLng(-11.75155, -55.46667)
    ];

    const controlIda = L.Routing.control({
      waypoints: coordIda,
      lineOptions: {
        styles: [{ color: "blue", weight: 2, opacity: 100 }]
      },
      createMarker: () => null,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: false,
      routeWhileDragging: false
    }).addTo(map);

    const controlVolta = L.Routing.control({
      waypoints: coordVolta,
      lineOptions: {
        styles: [{ color: "red", weight: 2, opacity: 100 }]
      },
      createMarker: () => null,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      showAlternatives: false,
      routeWhileDragging: false
    }).addTo(map);

    return () => {
      map.removeControl(controlIda);
      map.removeControl(controlVolta);
    };
  }, [map]);

  return null;
};

export default Routing;