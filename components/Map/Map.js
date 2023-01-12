import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import styled from "styled-components";

export default function Map({ locations }) {
  let DefaultIcon = L.icon({
    iconUrl: "/marker.svg",
    iconSize: [25, 25],
    popupAnchor: [0, -15],
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

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={DefaultIcon}
          >
            <Popup>
              <StyledLink href={`/${location.id}`}>
                <h2>{location.title}</h2>
                <StyledTagWrapper>
                  {location.info.map((tag) => (
                    <StyledTag key={tag.sport}>{tag.sport}</StyledTag>
                  ))}
                </StyledTagWrapper>
              </StyledLink>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  h2 {
    color: var(--color-foreground);
  }
`;

const StyledTagWrapper = styled.div`
  grid-area: tags;
  align-self: flex-end;
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;
`;

const StyledTag = styled.span`
  width: fit-content;
  height: fit-content;
  font-size: 0.6rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  border: 1px solid;
  border-radius: 3px;
  padding: 0 2px;
  white-space: nowrap;
  color: var(--color-foreground);
`;
