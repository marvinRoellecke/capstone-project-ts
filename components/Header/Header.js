import styled from "styled-components";

export default function Header() {
  return (
    <header>
      <StyledH1>localSports</StyledH1>
    </header>
  );
}

const StyledH1 = styled.h1`
  margin: 0.5rem 0 0 2rem;
`;
