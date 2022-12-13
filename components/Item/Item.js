import styled from "styled-components";
import Image from "next/image.js";

export default function Item({ item }) {
  return (
    <StyledLi image={item.image}>
      <StyledTitle>{item.title}</StyledTitle>
      <StyledRating>{item.rating}</StyledRating>
      <StyledTags>
        {item.tags.map((tag) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTags>

      <StyledAddress>{item.address.city}</StyledAddress>
    </StyledLi>
  );
}

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
    ". . . rating "
    ". . tags tags"
    ". . city city";
  align-items: center;
`;

const StyledTitle = styled.h2`
  grid-area: title;
  font-size: 1.7rem;
`;

const StyledRating = styled.p`
  grid-area: rating;
`;

const StyledTags = styled.div`
  grid-area: tags;
  align-self: flex-end;
`;

const StyledTag = styled.span`
  margin-left: 0.5rem;
`;

const StyledAddress = styled.p`
  grid-area: city;
`;
