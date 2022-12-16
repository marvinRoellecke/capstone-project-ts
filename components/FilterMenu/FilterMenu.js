import styled from "styled-components";

export default function FilterMenu() {
  return <StyledMenu>Filter</StyledMenu>;
}

const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  z-index: 1;
  height: 100vh;
  width: 80vw;
  background-color: var(--color-background);
  opacity: 0.95;
`;
