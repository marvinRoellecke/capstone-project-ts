import styled from "styled-components";
import Item from "../Card/Card";

export default function CardListGeneral({ passedLocations, filterData }) {
  return (
    <>
      <StyledUl>
        {filterData.length === 0
          ? passedLocations.map((location) => (
              <Item key={location.id} location={location} />
            ))
          : passedLocations
              .filter(
                (location) =>
                  filterData.includes(location.title) ||
                  filterData.includes(location.address.city)
              )
              .map((location) => (
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
