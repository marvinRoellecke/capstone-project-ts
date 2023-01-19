import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function MapSingle({ currentLocation, currentPosition }) {
  const DefaultIcon = L.icon({
    iconUrl: "/marker.svg",
    iconSize: [30, 30],
    popupAnchor: [0, -15],
  });

  const PositionIcon = L.icon({
    iconUrl: "/position.svg",
    iconSize: [30, 30],
  });

  return (
    <>
      <MapContainer
        center={currentLocation.coordinates}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/octopusbeaver/cld372w1h003g01m8zha8ftc8/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoib2N0b3B1c2JlYXZlciIsImEiOiJjbGQzNnUzZGIwY2dxM3JtbXFjMW5qdmQzIn0.oVEeHd1bBtMNg7MveVGIhw" />

        <Marker
          position={currentLocation.coordinates}
          icon={DefaultIcon}
        ></Marker>

        {currentPosition !== null && (
          <Marker position={currentPosition} icon={PositionIcon}></Marker>
        )}
      </MapContainer>
    </>
  );
}
