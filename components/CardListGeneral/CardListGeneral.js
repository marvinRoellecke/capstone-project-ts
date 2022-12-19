import styled from "styled-components";
import Item from "../Card/Card";

export default function CardListGeneral({ passedLocations, filterData }) {
  return (
    <>
      <StyledUl>
        {passedLocations
          .filter((location) => filterData.includes(location.title))
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

/* 
 Rendert Array komplett
{sortSportLocations.map((location) => (
  <Item key={location.id} location={location} />
))} */

/* Logik, dass das Filtern erst hier passiert

 {sortSportLocations.every((location) => !location.filter)
          ? sortSportLocations.map((location) => (
              <Item key={location.id} location={location} />
            ))
          : sortSportLocations
              .filter((location) => location.filter)
              .map((location) => (
                <Item key={location.id} location={location} />
              ))} */
