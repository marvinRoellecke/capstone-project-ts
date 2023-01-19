import Link from "next/link";
import styled from "styled-components";
import Icon from "../Icon/Icon";

export default function NavigationBar({
  atHomePage,
  atMapPage,
  atNewEntryForm,
  atFavoritesPage,
}) {
  return (
    <nav>
      <StyledUl>
        <li>
          {atHomePage ? (
            <>
              <StyledLinkActive href={"/"}>
                <Icon list />
              </StyledLinkActive>
              <StyledPActive>Liste</StyledPActive>
            </>
          ) : (
            <>
              <StyledLink href={"/"}>
                <Icon list />
              </StyledLink>
              <StyledP>Liste</StyledP>
            </>
          )}
        </li>
        <li>
          {atMapPage ? (
            <>
              <StyledLinkActive href={"/map"}>
                <Icon map />
              </StyledLinkActive>
              <StyledPActive>Karte</StyledPActive>
            </>
          ) : (
            <>
              <StyledLink href={"/map"}>
                <Icon map />
              </StyledLink>
              <StyledP>Karte</StyledP>
            </>
          )}
        </li>
        <li>
          {atNewEntryForm ? (
            <>
              <StyledLinkActive href={"/new-entry"}>
                <Icon create />
              </StyledLinkActive>
              <StyledPActive>Hinzufügen</StyledPActive>
            </>
          ) : (
            <>
              <StyledLink href={"/new-entry"}>
                <Icon create />
              </StyledLink>
              <StyledP>Hinzufügen</StyledP>
            </>
          )}
        </li>
        <li>
          {atFavoritesPage ? (
            <>
              <StyledLinkActive href={"/favorites"}>
                <Icon favorite />
              </StyledLinkActive>
              <StyledPActive>Favoriten</StyledPActive>
            </>
          ) : (
            <>
              <StyledLink href={"/favorites"}>
                <Icon favorite />
              </StyledLink>
              <StyledP>Favoriten</StyledP>
            </>
          )}
        </li>
      </StyledUl>
    </nav>
  );
}

const StyledUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  list-style: none;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: #5da399;
  text-decoration: none;
`;

const StyledP = styled.p`
  color: #5da399;
  font-size: 0.7rem;
  margin-top: -0.3rem;
`;

const StyledLinkActive = styled(Link)`
  color: #35393c;
  text-decoration: none;
`;

const StyledPActive = styled.p`
  color: #35393c;
  font-size: 0.7rem;
  margin-top: -0.3rem;
`;
