import {
  IoListOutline,
  IoLocationSharp,
  IoChevronBackOutline,
  IoCreate,
  IoCreateOutline,
  IoShareOutline,
  IoStar,
  IoHeartOutline,
  IoHeart,
  IoOptionsOutline,
} from "react-icons/io5";
import styled from "styled-components";

export default function Icon({
  back,
  create,
  favorite,
  isFavorite,
  location,
  list,
  option,
  share,
  star,
}) {
  return (
    <>
      <IconStyleWrapper>
        {back && <IoChevronBackOutline />}
        {create && <IoCreateOutline />}
        {favorite && !isFavorite && <IoHeartOutline />}
        {favorite && isFavorite && <IoHeart />}
        {list && <IoListOutline />}
        {option && <IoOptionsOutline />}
        {share && <IoShareOutline />}
      </IconStyleWrapper>

      {location && <IoLocationSharp />}
      {star && <StyledStarIcon />}
    </>
  );
}

const IconStyleWrapper = styled.span`
  & > * {
    width: auto;
    height: 2rem;
    cursor: pointer;
  }
`;

const StyledStarIcon = styled(IoStar)`
  color: var(--color-star);
`;
