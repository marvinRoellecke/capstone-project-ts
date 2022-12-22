import NavigationBar from "../NavigationBar/NavigationBar";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <NavigationBar />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin: auto 0;
`;
