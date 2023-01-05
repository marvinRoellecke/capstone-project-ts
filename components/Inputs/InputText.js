import styled, { css } from "styled-components";
import { useState } from "react";

export default function InputText({
  type,
  id,
  label,
  max,
  min,
  maxLength,
  required,
}) {
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
        max={max}
        min={min}
        maxLength={maxLength}
        required={required}
      />
    </StyledFieldWrapper>
  );
}

const StyledFieldWrapper = styled.div`
  position: relative;
  margin-left: 0;
  margin-bottom: 1rem;
`;
const StyledLabel = styled.label`
  position: absolute;
  margin-left: 0;
  left: 0;
  top: 10px;
  color: #999;
  background: none;
  z-index: 10;
  transition: transform 150ms ease-out, font-size 150ms ease-out;

  ${(props) =>
    props.isFocused &&
    css`
      transform: translateY(-120%);
      font-size: 0.75rem;
    `}
`;

const StyledInput = styled.input`
  margin-left: 0;
  position: relative;
  padding: 0.6rem 0 2px 0.5rem;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 #e5e5e5;
  transition: box-shadow 150ms ease-out;
  font-size: 1rem;

  &:focus {
    box-shadow: 0 2px 0 0 green;
  }
`;

/* transform: ${(props) => props.isFocused && "translateY(-120%)"};
font-size: ${(props) => props.isFocused && "0.75rem"}; */
