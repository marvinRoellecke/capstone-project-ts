import styled from "styled-components";
import GoBackButton from "../GoBackButton/GoBackButton";

export default function FilterMenu({ onShowFilterMenu }) {
  return (
    <StyledMenu>
      <h2>Filter</h2>
      <StyledButton type="button" onClick={onShowFilterMenu}>
        <GoBackButton />
      </StyledButton>
    </StyledMenu>
  );
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

const StyledButton = styled.button`
  background: none;
  border: none;
`;
