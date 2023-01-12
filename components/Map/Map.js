import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function Map({ locations }) {
  let DefaultIcon = L.icon({
    iconUrl: "/marker.svg",
    iconSize: [25, 25],
  });
  return (
    <>
      <MapContainer
        center={[51.57158268136762, 10.200763543026689]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />

        <Marker position={[51.5, 10.09]} icon={DefaultIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

//{locations.map((location))}
