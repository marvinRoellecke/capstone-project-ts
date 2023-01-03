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
        {Object.values(filterData.sport).every((entry) => !entry) && //map over all entries if no filter is active
        Object.values(filterData.city).every((entry) => !entry) &&
        Object.values(filterData.rating).every((entry) => !entry)
          ? locations.map((location) => (
              <Card
                key={location.id}
                location={location}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
              />
            ))
          : locations
              .filter(
                (location) =>
                  (filterData.sport[location.info[0].sport] ||
                    filterData.sport[location.info[1]?.sport] ||
                    filterData.sport[location.info[2]?.sport] ||
                    filterData.sport[location.info[3]?.sport] ||
                    filterData.sport[location.info[4]?.sport] ||
                    filterData.sport[location.info[5]?.sport] ||
                    Object.values(filterData.sport).every((entry) => !entry)) &&
                  (filterData.city[location.address.city] ||
                    Object.values(filterData.city).every((entry) => !entry)) &&
                  (filterData.rating[Math.floor(location.rating)] ||
                    Object.values(filterData.rating).every((entry) => !entry))
              )
              // map over entries with active filter
              // don't worry line 28-33 is a workaround due to the new data structure. It will be renewed when filtering is done via database queries
              .map((location) => (
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
