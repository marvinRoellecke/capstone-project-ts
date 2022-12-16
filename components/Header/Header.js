import styled from "styled-components";
import { IoOptionsOutline, IoSwapVertical } from "react-icons/io5";

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>localSports</StyledH1>
      <div>
        <StyledButton>
          <StyledSortButton />
        </StyledButton>
        <StyledButton>
          <StyledFilterButton />
        </StyledButton>
      </div>
    </StyledHeader>
  );
}

const StyledH1 = styled.h1`
  width: fit-content;
  height: fit-content;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }
`;

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledSortButton = styled(IoSwapVertical)`
  width: auto;
  height: 1.5rem;
`;

const StyledFilterButton = styled(IoOptionsOutline)`
  width: auto;
  height: 1.5rem;
`;
