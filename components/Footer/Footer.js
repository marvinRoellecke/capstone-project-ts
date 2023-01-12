import NavigationBar from "../NavigationBar/NavigationBar";
import styled from "styled-components";

export default function Footer({
  atHomePage,
  atMapPage,
  atNewEntryForm,
  atFavoritesPage,
}) {
  return (
    <StyledFooter>
      <NavigationBar
        atHomePage={atHomePage}
        atMapPage={atMapPage}
        atNewEntryForm={atNewEntryForm}
        atFavoritesPage={atFavoritesPage}
      />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  margin: auto 0;
`;
