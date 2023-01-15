import styled from "styled-components";

export default function CardLocationInfo({ currentLocation }) {
  return (
    <>
      <StyledDivider />
      {currentLocation.info.map(({ sport, numberOfCourts, surface }) => (
        <StyledBoxWrapper key={sport}>
          <StyledBox>
            <h3>sport</h3>
            <span>{sport}</span>
          </StyledBox>
          <StyledBox>
            <h3>courts</h3>
            <span>{numberOfCourts}</span>
            <span>{surface}</span>
          </StyledBox>
        </StyledBoxWrapper>
      ))}

      <StyledDivider />
      <StyledBoxWrapper>
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
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledBox = styled.div`
  font-size: 0.8rem;
  height: 8rem;
  min-width: 8rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
`;

//grid-template-columns: repeat(${columns}, 1fr);
