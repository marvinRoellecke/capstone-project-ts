import NavigationBar from "../NavigationBar/NavigationBar";
import styled from "styled-components";

export default function Footer({
  atHomePage,
  atFavoritesPage,
  atNewEntryForm,
}) {
  return (
    <StyledFooter>
      <NavigationBar
        atHomePage={atHomePage}
        atFavoritesPage={atFavoritesPage}
        atNewEntryForm={atNewEntryForm}
      />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin: auto 0;
`;
