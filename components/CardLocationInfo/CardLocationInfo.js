import styled from "styled-components";
import Image from "next/image";

export default function CardLocationInfo({ currentLocation }) {
  return (
    <>
      <StyledDivider />
      {currentLocation.info.map(({ sport, numberOfCourts, surface }) => (
        <StyledBoxWrapper key={sport}>
          <StyledBox>
            <Image
              src={`/img/sportLogos/icon-${sport}.png`}
              alt="Logo of sport"
              width={35}
              height={35}
            />
            <span>{sport}</span>
            <h3>{numberOfCourts === 0 ? "n/a" : numberOfCourts}</h3>
            <span>{numberOfCourts === 1 ? "Spielfeld" : " Spielfelder"}</span>
            <h3>{surface !== "" ? surface : "n/a"}</h3>
            <span>Untergrund</span>
          </StyledBox>
        </StyledBoxWrapper>
      ))}

      <StyledDivider />
      <StyledBoxOtherWrapper>
        <StyledBoxOther>
          <Image
            src={`/img/sportLogos/icon-light.png`}
            alt="Logo of sport"
            width={35}
            height={35}
          />
          <h3>{currentLocation.infrastructure.lighting ? "ja" : "nein"}</h3>
          <span>Beleuchtung</span>
        </StyledBoxOther>
        <StyledBoxOther>
          <Image
            src={`/img/sportLogos/icon-wheelchair.png`}
            alt="Logo of sport"
            width={35}
            height={35}
          />
          <h3>{currentLocation.infrastructure.wheelchair ? "ja" : "nein"}</h3>
          <span>Barrierefreiheit</span>
        </StyledBoxOther>
      </StyledBoxOtherWrapper>
    </>
  );
}

const StyledDivider = styled.aside`
  height: 2px;
  background-color: lightgrey;
  margin: 2rem 0.5rem;
  &:first-of-type {
    margin-top: 1rem;
  }
`;

const StyledBoxWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledBox = styled.div`
  font-size: 0.8rem;
  height: 8rem;
  width: 100%;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 3fr 1fr;
  grid-auto-flow: column;
  align-items: center;
  justify-items: center;
  text-transform: capitalize;
`;

const StyledBoxOtherWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledBoxOther = styled.div`
  font-size: 0.8rem;
  height: 8rem;
  min-width: 8rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-transform: capitalize;
`;
