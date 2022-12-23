import { IoShareOutline } from "react-icons/io5";
import styled from "styled-components";

export default function ShareButton() {
  return <StyledShareButton />;
}

const StyledShareButton = styled(IoShareOutline)`
  width: auto;
  height: 2rem;
  cursor: pointer;
`;
