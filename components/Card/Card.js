import styled from "styled-components";
import Link from "next/link";
import Icon from "../Icon/Icon";

export default function Card({ location, onToggleFavorite, favorites }) {
  const isFavorite = favorites.includes(location?.id);

  return (
    <StyledLink href={`/${location.id}`}>
      <StyledLi image={location.image}>
        <StyledButton
          title="toggle Favorite"
          onClick={(event) => onToggleFavorite(event, location.id)}
        >
          <Icon favorite isFavorite={isFavorite} />
        </StyledButton>
        <StyledTitle>{location.title}</StyledTitle>
        <StyledRating>
          <Icon star />
          {location.rating}
        </StyledRating>
        <StyledTagWrapper>
          {location.info.map((tag) => (
            <StyledTag key={tag.sport}>{tag.sport}</StyledTag>
          ))}
        </StyledTagWrapper>

        <StyledAddress>
          <Icon location /> {location.address.city}
        </StyledAddress>
      </StyledLi>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledLi = styled.li`
  font-size: 0.8rem;
  height: 10rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  margin: 0 1rem;
  padding: 0 1rem;
  background-image: var(--background-filter), url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  text-align: right;
  color: var(--color-background);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "favoriteButton title title title"
    ". . rating rating "
    ". tags tags tags"
    ". city city city";
  align-items: center;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  grid-area: favoriteButton;
  color: var(--color-foreground-alt);
  justify-self: flex-start;
`;

const StyledTitle = styled.h2`
  grid-area: title;
  font-size: 1rem;
  overflow: hidden;
`;

const StyledRating = styled.p`
  grid-area: rating;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
`;

const StyledTagWrapper = styled.div`
  grid-area: tags;
  align-self: flex-end;
  justify-content: flex-end;
  display: flex;
  flex-wrap: wrap;
`;

const StyledTag = styled.span`
  width: fit-content;
  height: fit-content;
  font-size: 0.6rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
  border: 1px solid;
  border-radius: 3px;
  padding: 0 2px;
  white-space: nowrap;
`;

const StyledAddress = styled.span`
  grid-area: city;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
`;
