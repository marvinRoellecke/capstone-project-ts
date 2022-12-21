import { IoHeartOutline, IoHeart } from "react-icons/io5";
import styled from "styled-components";

export default function FavoriteButton({ isFavorite }) {
  return (
    <>
      {isFavorite ? <StyledFavoriteButtonFilled /> : <StyledFavoriteButton />}
    </>
  );
}

const StyledFavoriteButton = styled(IoHeartOutline)`
  width: auto;
  height: 2rem;
`;

const StyledFavoriteButtonFilled = styled(IoHeart)`
  width: auto;
  height: 2rem;
`;
