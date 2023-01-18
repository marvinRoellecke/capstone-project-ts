import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import CardLocationInfo from "../components/CardLocationInfo/CardLocationInfo";
import Icon from "../components/Icon/Icon";

export default function DetailsPage({
  locations,
  onToggleFavorite,
  favorites,
}) {
  const router = useRouter();
  const slug = router.query.details;
  const currentLocation = locations.find(
    (location) => location.id.toString() === slug
  );
  const locationAddress = currentLocation?.address;
  const isFavorite = favorites.includes(currentLocation?.id);
  const [isCopied, setIsCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        const shareData = {
          title: "localSports",
          text: "Let's play together!",
          url: location.href,
        };
        return await navigator.share(shareData);
      } catch {
        console.error("failed to open share dialog");
      }
    } else {
      navigator.clipboard.writeText(location.href);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }

  if (!currentLocation) {
    return <h2>Sorry, this page does not exist!</h2>;
  }

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledBackButton onClick={() => router.back()}>
          <Icon back />
        </StyledBackButton>
        <StyledTitle>{currentLocation.title}</StyledTitle>
        <StyledButtonWrapper>
          <StyledButton onClick={handleShare}>
            <Icon share />
          </StyledButton>
          <StyledButton
            title="toggle Favorite"
            onClick={(event) => onToggleFavorite(event, currentLocation.id)}
          >
            <Icon favorite isFavorite={isFavorite} />
          </StyledButton>
        </StyledButtonWrapper>
      </StyledHeader>
      {isCopied && <StyledPopUp>in die Zwischenablage kopiert</StyledPopUp>}

      <StyledImageContainer image={currentLocation.image} />

      <main>
        <StyledCaptionWrapper>
          <StyledTagWrapper>
            {currentLocation.info.map((tag) => (
              <StyledTag key={tag.sport}>{tag.sport} </StyledTag>
            ))}
          </StyledTagWrapper>
          <StyledRating>
            <Icon star />
            {currentLocation.rating}
          </StyledRating>
        </StyledCaptionWrapper>

        <StyledAdressLink
          href={`https://www.google.com/maps/place/${locationAddress.street}+${locationAddress.houseNumber},+${locationAddress.postcode}+${locationAddress.city}`}
          target="_blank"
        >
          <StyledAddress>
            <Icon location />
            {locationAddress.street} {locationAddress.houseNumber},{" "}
            {locationAddress.postcode} {locationAddress.city}
          </StyledAddress>
        </StyledAdressLink>
        <CardLocationInfo currentLocation={currentLocation} />
      </main>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    padding: 0.5rem 1rem;
    position: relative;
    top: -2rem;
    border-radius: 1rem 1rem 0 0;
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

const StyledBackButton = styled.button`
  background: none;
  border: none;
  color: var(--color-foreground-alt);
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  margin-left: 1.5rem;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  grid-area: favoriteButton;
  color: var(--color-foreground-alt);
  justify-self: flex-start;
`;

const StyledPopUp = styled.div`
  align-self: center;
  position: absolute;
  top: 5rem;
  background-color: var(--color-background);
  opacity: 0.7;
  color: var(--color-foreground);
  font-size: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;

const StyledImageContainer = styled.div`
  height: 17rem;
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
  align-items: flex-end;
  gap: 0.3rem;
  flex-wrap: wrap;
`;

const StyledTag = styled.span`
  font-size: 0.6rem;
  border: 1px solid;
  border-radius: 3px;
  padding: 0 2px;
  white-space: nowrap;
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
