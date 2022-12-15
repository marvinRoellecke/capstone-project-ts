import sportLocationsData from "../lib/data/sportLocationsData";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IoStar, IoLocationSharp, IoChevronBackOutline } from "react-icons/io5";
import CardLocationInfo from "../components/CardLocationInfo/CardLocationInfo";

export default function DetailsPage() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentLocation = sportLocationsData.find(
    (location) => location.slug === slug
  );
  const locationAddress = currentLocation?.address;

  if (!currentLocation) {
    return (
        <h2>Sorry, this page does not exist!</h2>
    );
  }

  return (
    <>
      <div>
        <StyledMain>
          <StyledImageContainer image={currentLocation.image} />
          <StyledTitleWrapper>
            <StyledLink href="/">
              <StyledIoChevronBackOutline />
            </StyledLink>
            <h1>{currentLocation.title}</h1>
          </StyledTitleWrapper>

          <section>
            <StyledCaptionWrapper>
              <StyledTagWrapper>
                {currentLocation.tags.map((tag) => (
                  <StyledTag key={tag}>{tag} </StyledTag>
                ))}
              </StyledTagWrapper>
              <StyledRating>
                <IoStar color="orange" /> {currentLocation.rating}
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
              Lorem ipsum dolor sit amet, pro lorem graeco consequuntur no, pri
              an dictas placerat, pri labore delenit no. Ad sea errem legendos,
              et eos posse prompta. An adhuc aliquam vis, commune nominavi ex
              pro, legere quidam essent cu duo. Diceret postulant vis no, nam in
              commodo labitur, in dicit viris legendos pri. Virtute sententiae
              no quo, ea malis soluta convenire vis, volutpat argumentum
              voluptatibus id sea.
            </CardLocationInfo>
            <CardLocationInfo title={"Opening Times"}>
              8:00 - 22:00
            </CardLocationInfo>
          </section>
        </StyledMain>
      </div>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;

  section {
    margin: 0.5rem 1rem;
  }
`;

const StyledImageContainer = styled.div`
  height: 12rem;
  background-image: var(--background-filter-toBottom),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const StyledTitleWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 3rem;
  padding: 2.5rem 2rem;

  h1 {
    font-size: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  width: auto;
  height: 2rem;
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
