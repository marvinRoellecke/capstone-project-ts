import styled from "styled-components";
import { IoOptionsOutline } from "react-icons/io5";

export default function Header({ onShowFilterMenu, filterMenu }) {
  return (
    <StyledHeader>
      <StyledH1>localSports</StyledH1>
      {filterMenu && (
        <StyledButton type="button" onClick={onShowFilterMenu}>
          <StyledFilterButton />
        </StyledButton>
      )}
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 1rem 1rem 1rem;
`;

const StyledH1 = styled.h1`
  width: fit-content;
  height: fit-content;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledFilterButton = styled(IoOptionsOutline)`
  width: auto;
  height: 1.5rem;
`;
