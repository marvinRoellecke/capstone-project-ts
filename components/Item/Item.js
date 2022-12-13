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
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin: 0.5rem 1rem;
`;
