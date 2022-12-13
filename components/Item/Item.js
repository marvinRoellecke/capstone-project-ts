import styled from "styled-components";

export default function Item({ item }) {
  return (
    <StyledLi>
      <h2>{item.title}</h2>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  height: 5rem;
  box-shadow: var(--box-shadow);
  margin: 0.5rem 1rem;
`;
