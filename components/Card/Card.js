import styled from "styled-components";
import { IoStar, IoLocationSharp } from "react-icons/io5";
import Link from "next/link";

export default function Card({ location }) {
  return (
    <StyledLink href={`/${location.slug}`}>
      <StyledLi image={location.image}>
        <StyledTitle>{location.title}</StyledTitle>
        <StyledRating>
          <IoStar style={{ color: `var(--color-star)` }} />
          {location.rating}
        </StyledRating>
        <StyledTagWrapper>
          {location.tags.map((tag) => (
            <StyledTag key={tag}>{tag}</StyledTag>
          ))}
        </StyledTagWrapper>

        <StyledAddress>
          <IoLocationSharp /> {location.address.city}
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
    "title title title title"
    ". . rating rating "
    ". tags tags tags"
    ". city city city";
  align-items: center;
`;

const StyledTitle = styled.h2`
  grid-area: title;
  font-size: 1.7rem;
  white-space: nowrap;
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
`;

const StyledTag = styled.span`
  font-size: 0.6rem;
  margin-left: 0.3rem;
  border: 1px solid;
  border-radius: 3px;
  padding: 0 2px;
`;

const StyledAddress = styled.p`
  grid-area: city;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.3rem;
`;
