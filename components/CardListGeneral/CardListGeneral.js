import styled from "styled-components";
import Card from "../Card/Card";

export default function CardListGeneral({
  locations,
  filterData,
  onToggleFavorite,
  favorites,
}) {
  return (
    <>
      <StyledUl>
        {locations.map((location) => (
          <Card
            key={location.id}
            location={location}
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
          />
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
