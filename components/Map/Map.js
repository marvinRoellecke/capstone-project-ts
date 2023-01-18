import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Link from "next/link";
import styled from "styled-components";

export default function Map({ locations, currentPosition }) {
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
        center={currentPosition === null ? [51.5, 10.2] : currentPosition}
        zoom={currentPosition === null ? 6 : 12}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png" />
        {locations.map(({ id, coordinates, title, info, image }) => (
          <Marker key={id} position={coordinates} icon={DefaultIcon}>
            <Popup>
              <StyledLink href={`/${id}`}>
                <StyledImageContainer image={image} />
                <h2>{title}</h2>
                <StyledTagWrapper>
                  {info.map(({ sport }) => (
                    <StyledTag key={sport}>{sport}</StyledTag>
                  ))}
                </StyledTagWrapper>
              </StyledLink>
            </Popup>
          </Marker>
        ))}

        {currentPosition !== null && (
          <Marker position={currentPosition} icon={PositionIcon}></Marker>
        )}
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

const StyledImageContainer = styled.div`
  height: 8rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;
