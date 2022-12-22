import Link from "next/link";
import styled from "styled-components";
import ListButton from "../ListButton/ListButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function NavigationBar({ atHomePage, atFavoritesPage }) {
  return (
    <nav>
      <StyledUl>
        <li>
          <StyledLink href={"/"}>
            <ListButton />
            {atHomePage && <hr />}
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/favorites"}>
            <FavoriteButton />
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
