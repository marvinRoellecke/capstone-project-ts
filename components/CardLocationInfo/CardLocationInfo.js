import styled from "styled-components";

export default function CardLocationInfo({ title, children }) {
  return (
    <>
      <StyledDivider />
      <StyledH2>{title}</StyledH2>
      <article>{children}</article>
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

const StyledH2 = styled.h2`
  margin-bottom: 1rem;
`;
