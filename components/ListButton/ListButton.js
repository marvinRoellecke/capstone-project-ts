import { IoListOutline } from "react-icons/io5";
import styled from "styled-components";

export default function ListButton() {
  return (
    <>
      <StyledListButton />
    </>
  );
}

const StyledListButton = styled(IoListOutline)`
  width: auto;
  height: 2rem;
  cursor: pointer;
`;
