import styled from "styled-components";

export default function CardLocationInfo({ currentLocation }) {
  return (
    <>
      <StyledDivider />
      <StyledBoxWrapper columns={3}>
        <StyledBox>
          <h3>sport</h3>
          <span>{currentLocation.info[0].sport}</span>
        </StyledBox>
        <StyledBox>
          <h3>courts</h3>
          <span>{currentLocation.info[0].numberOfCourts}</span>
        </StyledBox>
        <StyledBox>
          <h3>surface</h3>
          <span>{currentLocation.info[0].surface}</span>
        </StyledBox>
      </StyledBoxWrapper>

      <StyledDivider />
      <StyledBoxWrapper columns={2}>
        <StyledBox>
          <h3>lighting</h3>
          <span>{currentLocation.infrastructure.lighting ? "yes" : "no"}</span>
        </StyledBox>
        <StyledBox>
          <h3>wheelchair</h3>
          <span>
            {currentLocation.infrastructure.wheelchair ? "yes" : "no"}
          </span>
        </StyledBox>
        <StyledBox>
          <h3>{currentLocation.outdoor ? "outdoor" : "indoor"}</h3>
        </StyledBox>
        <StyledBox>
          <h3>{currentLocation.public ? "public" : "private"}</h3>{" "}
        </StyledBox>
      </StyledBoxWrapper>
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

const StyledBoxWrapper = styled.article`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  justify-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
`;

const StyledBox = styled.div`
  font-size: 0.8rem;
  height: 7rem;
  min-width: 7rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
`;

//grid-template-columns: repeat(${columns}, 1fr);
