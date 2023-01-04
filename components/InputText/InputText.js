import styled from "styled-components";
import { useState } from "react";

export default function InputText({ type, id, label }) {
  function handleMoveLabelUp() {
    setIsFocused(true);
  }

  function handleMoveLabelDown(event) {
    if (event.target.value === "") {
      setIsFocused(false);
    }
  }

  const [isFocused, setIsFocused] = useState(false);

  return (
    <StyledFieldWrapper>
      <StyledLabel isFocused={isFocused} htmlFor={id}>
        {label}
      </StyledLabel>
      <StyledInput
        type={type}
        name={id}
        id={id}
        onFocus={handleMoveLabelUp}
        onBlur={handleMoveLabelDown}
        required
      />
    </StyledFieldWrapper>
  );
}

const StyledFieldWrapper = styled.div`
  position: relative;
`;
const StyledLabel = styled.label`
  position: absolute;
  left: 0;
  top: 10px;
  color: #999;
  background: none;
  z-index: 10;
  transition: transform 150ms ease-out, font-size 150ms ease-out;

  transform: ${(props) => props.isFocused && "translateY(-125%)"};
  font-size: ${(props) => props.isFocused && "0.75em"};
`;

const StyledInput = styled.input`
  position: relative;
  padding: 12px 0px 5px 0;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 #e5e5e5;
  transition: box-shadow 150ms ease-out;

  &:focus {
    box-shadow: 0 2px 0 0 green;
  }
`;
