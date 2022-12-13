import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <StyledH1>localSports</StyledH1>
    </header>
  );
}

const StyledH1 = styled.h1`
  margin-left: 2rem;
`;
