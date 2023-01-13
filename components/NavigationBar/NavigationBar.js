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
          <StyledLink href={"/"}>
            <Icon list />
            {atHomePage && <hr />}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/map"}>
            <Icon map />
            {atMapPage && <hr />}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/new-entry"}>
            <Icon create />
            {atNewEntryForm && <hr />}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/favorites"}>
            <Icon favorite />
            {atFavoritesPage && <hr />}
          </StyledLink>
        </li>
      </StyledUl>
    </nav>
  );
}

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: var(--color-foreground);
`;
