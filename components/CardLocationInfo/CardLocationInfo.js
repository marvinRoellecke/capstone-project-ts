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
          </StyledBox>
          <StyledBox>
            <Image
              src={`/img/sportLogos/icon-basketball-field.png`}
              alt="Logo of sport"
              width={35}
              height={35}
            />
            <span>{numberOfCourts} Spielfelder</span>
            <span>{surface}</span>
          </StyledBox>
        </StyledBoxWrapper>
      ))}

      <StyledDivider />
      <StyledBoxWrapper>
        <StyledBox>
          <Image
            src={`/img/sportLogos/icon-light.png`}
            alt="Logo of sport"
            width={35}
            height={35}
          />
          <h3>Beleuchtung</h3>
          <span>{currentLocation.infrastructure.lighting ? "ja" : "nein"}</span>
        </StyledBox>
        <StyledBox>
          <Image
            src={`/img/sportLogos/icon-wheelchair.png`}
            alt="Logo of sport"
            width={35}
            height={35}
          />
          <h3>Barrierefreiheit</h3>
          <span>
            {currentLocation.infrastructure.wheelchair ? "ja" : "nein"}
          </span>
        </StyledBox>
      </StyledBoxWrapper>
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
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledBox = styled.div`
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

//grid-template-columns: repeat(${columns}, 1fr);
