import styled from "styled-components";
import sportLocationsData from "../../lib/data/sportLocationsData";
import Card from "../Card/Card";

export default function CardListGeneral() {
  return (
    <>
      <StyledUl>
        {sportLocationsData.map((location) => (
          <Card key={location.id} location={location} />
        ))}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
