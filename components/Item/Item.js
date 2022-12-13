import styled from "styled-components";
import Image from "next/image.js";

export default function Item({ item }) {
  return (
    <StyledLi image={item.image}>
      <h2>{item.title}</h2>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  height: 10rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  margin: 0.5rem 1rem;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    ". . title title"
    ". . . rating "
    ". . tags tags"
    ". . city city";
`;
