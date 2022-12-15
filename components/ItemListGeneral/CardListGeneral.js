import styled from "styled-components";
import sportLocationsData from "../../lib/data/sportLocationsData";
import Item from "../Item/Card";

export default function ItemListGeneral() {
  return (
    <>
      <StyledUl>
        {sportLocationsData.map((location) => (
          <Item key={location.id} location={location} />
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
