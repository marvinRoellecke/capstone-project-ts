import testItemData from "../utils/data/testItemData";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
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
            <StyledIoChevronBackOutline />
            <StyledTitle>{currentLocation.title}</StyledTitle>
          </StyledDivTitle>
          <p>{currentLocation.rating}</p>
          <p>
            {currentLocation.address.street}{" "}
            {currentLocation.address.streetNumber},{" "}
            {currentLocation.address.postcode} {currentLocation.address.city}
          </p>
          <div>
            {currentLocation.tags.map((tag) => (
              <span key={tag}>{tag} </span>
            ))}
          </div>
          <h2>Description</h2>
          <article>
            Lorem ipsum dolor sit amet, pro lorem graeco consequuntur no, pri an
            dictas placerat, pri labore delenit no. Ad sea errem legendos, et
            eos posse prompta. An adhuc aliquam vis, commune nominavi ex pro,
            legere quidam essent cu duo. Diceret postulant vis no, nam in
            commodo labitur, in dicit viris legendos pri. Virtute sententiae no
            quo, ea malis soluta convenire vis, volutpat argumentum voluptatibus
            id sea.
          </article>
          <h2>Opening Times</h2>
          <aside>8:00 - 22:00</aside>
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
  height: 10rem;

  background-image: var(--background-filter-toBottom),
    url(${(props) => props.image});
  background-position: center;
  background-size: cover;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const StyledDivTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;

  align-items: center;
  color: white;
  width: 100%;
  height: 3rem;
  padding: 2rem;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
`;

const StyledIoChevronBackOutline = styled(IoChevronBackOutline)`
  width: auto;
  height: 2rem;
`;
