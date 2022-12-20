import styled from "styled-components";
import Item from "../Card/Card";

export default function CardListGeneral({ passedLocations, filterData }) {
  return (
    <>
      <StyledUl>
        {Object.values(filterData.sport).every((entry) => !entry) &&
        Object.values(filterData.city).every((entry) => !entry) &&
        Object.values(filterData.rating).every((entry) => !entry)
          ? passedLocations.map((location) => (
              <Item key={location.id} location={location} />
            ))
          : passedLocations
              .filter(
                (location) =>
                  (filterData.sport[location.category] ||
                    Object.values(filterData.sport).every((entry) => !entry)) &&
                  (filterData.city[location.address.city] ||
                    Object.values(filterData.city).every((entry) => !entry)) &&
                  (filterData.rating[Math.floor(location.rating)] ||
                    Object.values(filterData.rating).every((entry) => !entry))
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

/* Stand vorher

{filterData.sport.length === 0 && filterData.city.length === 0
  ? passedLocations.map((location) => (
      <Item key={location.id} location={location} />
    ))
  : passedLocations
      .filter(
        (location) =>
          (filterData.sport.includes(location.title) ||
            filterData.sport.length === 0) &&
          (filterData.city.includes(location.address.city) ||
            filterData.city.length === 0)
      )
      .map((location) => (
        <Item key={location.id} location={location} />
      ))} */
