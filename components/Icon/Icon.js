import {
  IoAddCircle,
  IoListOutline,
  IoLocationSharp,
  IoChevronBackOutline,
  IoCreate,
  IoCreateOutline,
  IoMapOutline,
  IoImageOutline,
  IoShareOutline,
  IoStar,
  IoHeartOutline,
  IoHeart,
  IoOptionsOutline,
} from "react-icons/io5";
import styled from "styled-components";

export default function Icon({
  add,
  back,
  create,
  favorite,
  isFavorite,
  location,
  map,
  image,
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
        {map && <IoMapOutline />}
        {list && <IoListOutline />}
        {option && <IoOptionsOutline />}
        {share && <IoShareOutline />}
      </IconStyleWrapper>

      {location && <IoLocationSharp />}
      {image && <StyledImage />}
      {star && <StyledStarIcon />}
      {add && <StyledAdd />}
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

const StyledImage = styled(IoImageOutline)`
  color: grey;
  height: 4rem;
  width: auto;
`;

const StyledAdd = styled(IoAddCircle)`
  position: relative;
  left: -2rem;
  color: grey;
  height: 2rem;
  width: auto;
`;
