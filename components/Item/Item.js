import styled from "styled-components";
import Image from "next/image.js";

export default function Item({ item }) {
  return (
    <StyledLi>
      <h2>{item.title}</h2>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  height: 10rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  margin: 0.5rem 1rem;
  background-image: url(/img/samplePics/soccer.jpg);
  background-position: center;
  background-size: cover;
`;
