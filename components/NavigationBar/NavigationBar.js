import Link from "next/link";
import styled from "styled-components";
import ListButton from "../ListButton/ListButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function NavigationBar() {
  return (
    <nav>
      <StyledUl>
        <li>
          <StyledLink href={"/"}>
            <ListButton />
          </StyledLink>
        </li>
        <li>
          <StyledLink href={"/favorites"}>
            <FavoriteButton />
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
  text-decoration: none;
  color: var(--color-foreground);
`;
