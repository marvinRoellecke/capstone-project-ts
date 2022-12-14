import testItemData from "../utils/data/testItemData";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IoStar, IoLocationSharp, IoChevronBackOutline } from "react-icons/io5";

export default function DetailsPage() {
  const router = useRouter();
  const slug = router.query.slug;
  const currentLocation = testItemData.find((item) => item.slug === slug);

  if (!currentLocation) {
    return (
      <>
        <h2>Diese Seite gibt es nicht</h2>
      </>
    );
  }

  return (
    <>
      <div>
        <header></header>
        <StyledMain>
          <StyledDiv image={currentLocation.image}></StyledDiv>
          <StyledDivTitle>
            <StyledLink href="/">
              <StyledIoChevronBackOutline />
            </StyledLink>
            <StyledTitle>{currentLocation.title}</StyledTitle>
          </StyledDivTitle>
          <StyledSection>
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

            <Link
              href={`https://www.google.com/maps/place/${currentLocation.address.street}+${currentLocation.address.streetNumber},+${currentLocation.address.postcode}+${currentLocation.address.city}`}
              target="_blank"
            >
              <StyledAddress>
                <IoLocationSharp />
                {currentLocation.address.street}{" "}
                {currentLocation.address.streetNumber},{" "}
                {currentLocation.address.postcode}{" "}
                {currentLocation.address.city}
              </StyledAddress>
            </Link>
            <StyledDivider />
            <StyledH2>Description</StyledH2>
            <article>
              Lorem ipsum dolor sit amet, pro lorem graeco consequuntur no, pri
              an dictas placerat, pri labore delenit no. Ad sea errem legendos,
              et eos posse prompta. An adhuc aliquam vis, commune nominavi ex
              pro, legere quidam essent cu duo. Diceret postulant vis no, nam in
              commodo labitur, in dicit viris legendos pri. Virtute sententiae
              no quo, ea malis soluta convenire vis, volutpat argumentum
              voluptatibus id sea.
            </article>
            <StyledDivider />
            <StyledH2>Opening Times</StyledH2>
            <aside>8:00 - 22:00</aside>
          </StyledSection>
        </StyledMain>
      </div>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  height: 12rem;
  background-image: var(--background-filter-toBottom),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const StyledDivTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 3rem;
  padding: 2.5rem 2rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  width: auto;
  height: 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
`;

const StyledSection = styled.section`
  margin: 0.5rem 1rem;
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

const StyledDivider = styled.aside`
  height: 2px;
  background-color: lightgrey;
  margin: 2rem 0.5rem;
  &:first-of-type {
    margin-top: 1rem;
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 1rem;
`;
