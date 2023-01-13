import styled from "styled-components";

export default function CardLocationInfo({ currentLocation }) {
  return (
    <>
      <StyledDivider />
      <StyledH2>Information</StyledH2>
      <div>{currentLocation.info[0].sport}</div>
      <div>{currentLocation.info[0].numberOfCourts}</div>
      <div>{currentLocation.info[0].surface}</div>

      <StyledH2>Infrastruktur</StyledH2>
      <div>
        {currentLocation.infrastructure.lighting
          ? "Beleuchtet: ja"
          : "Beleuchtet: nein"}
      </div>
      <div>
        {currentLocation.infrastructure.wheelchair
          ? "Barrierefrei: ja"
          : "Barrierefrei: nein"}
      </div>
      <div>{currentLocation.outdoor ? "Outdoor" : "Indoor"}</div>
      <div>{currentLocation.public ? "Öffentlich" : "Privat"}</div>
    </>
  );
}

const StyledDivider = styled.aside`
  height: 2px;
  background-color: lightgrey;
  margin: 2rem 0.5rem;
  &:first-of-type {
    margin-top: 1rem;
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 1rem;
`;
