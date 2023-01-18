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
        <TileLayer url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png" />

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
