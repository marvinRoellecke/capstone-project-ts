import { IoHeartOutline, IoHeart } from "react-icons/io5";
import styled from "styled-components";

export default function FavoriteButton() {
  return <StyledFavoriteButton />;
}

const StyledFavoriteButton = styled(IoHeartOutline)`
  width: auto;
  height: 2rem;
  grid-area: favoriteButton;
`;
