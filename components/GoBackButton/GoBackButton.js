import { IoChevronBackOutline } from "react-icons/io5";
import styled from "styled-components";

export default function GoBackButton() {
  return <StyledGoBackButton />;
}

const StyledGoBackButton = styled(IoChevronBackOutline)`
  width: auto;
  height: 2rem;
`;
