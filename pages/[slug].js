import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IoStar, IoLocationSharp } from "react-icons/io5";
import CardLocationInfo from "../components/CardLocationInfo/CardLocationInfo";
import GoBackButton from "../components/GoBackButton/GoBackButton";
import FavoriteButton from "../components/FavoriteButton/FavoriteButton";

export default function DetailsPage({
  locations,
  onToggleFavorite,
  favorites,
}) {
  const router = useRouter();
  const slug = router.query.slug;
  const currentLocation = locations.find((location) => location.slug === slug);
  const locationAddress = currentLocation?.address;
  const isFavorite = favorites.includes(currentLocation?.id);

  if (!currentLocation) {
    return <h2>Sorry, this page does not exist!</h2>;
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledBackButton onClick={() => router.back()}>
          <GoBackButton />
        </StyledBackButton>
        <h1>{currentLocation.title}</h1>
        <StyledButton
          title="toggle Favorite"
          onClick={(event) => onToggleFavorite(event, currentLocation.id)}
        >
          <FavoriteButton isFavorite={isFavorite} />
        </StyledButton>
      </StyledHeader>

      <StyledImageContainer image={currentLocation.image} />
      <main>
        <StyledCaptionWrapper>
          <StyledTagWrapper>
            {currentLocation.tags.map((tag) => (
              <StyledTag key={tag}>{tag} </StyledTag>
            ))}
          </StyledTagWrapper>
          <StyledRating>
            <IoStar style={{ color: `var(--color-star)` }} />
            {currentLocation.rating}
          </StyledRating>
        </StyledCaptionWrapper>

        <StyledAdressLink
          href={`https://www.google.com/maps/place/${locationAddress.street}+${locationAddress.streetNumber},+${locationAddress.postcode}+${locationAddress.city}`}
          target="_blank"
        >
          <StyledAddress>
            <IoLocationSharp />
            {locationAddress.street} {locationAddress.streetNumber},{" "}
            {locationAddress.postcode} {locationAddress.city}
          </StyledAddress>
        </StyledAdressLink>
        <CardLocationInfo title={"Description"}>
          Lorem ipsum dolor sit amet, pro lorem graeco consequuntur no, pri an
          dictas placerat, pri labore delenit no. Ad sea errem legendos, et eos
          posse prompta. An adhuc aliquam vis, commune nominavi ex pro, legere
          quidam essent cu duo. Diceret postulant vis no, nam in commodo
          labitur, in dicit viris legendos pri. Virtute sententiae no quo, ea
          malis soluta convenire vis, volutpat argumentum voluptatibus id sea.
        </CardLocationInfo>
        <CardLocationInfo title={"Opening Times"}>
          8:00 - 22:00
        </CardLocationInfo>
      </main>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    margin: 0.5rem 1rem;
  }
`;

const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding: 1rem 1.5rem;
  color: var(--color-foreground-alt);

  h1 {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-foreground-alt);
  text-decoration: none;
`;

const StyledBackButton = styled.button`
  background: none;
  border: none;
  color: var(--color-foreground-alt);
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  grid-area: favoriteButton;
  color: var(--color-foreground-alt);
  justify-self: flex-start;
`;

const StyledImageContainer = styled.div`
  height: 12rem;
  background-image: var(--background-filter-toBottom),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const StyledCaptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTagWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.2rem;
`;

const StyledTag = styled.span`
  font-size: 0.6rem;
  border: 1px solid;
  border-radius: 3px;
  padding: 0 2px;
`;

const StyledRating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const StyledAddress = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.2rem;
`;

const StyledAdressLink = styled(Link)`
  color: var(--foreground-color);
`;
