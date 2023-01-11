import { Fragment } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

export default function FilterMenu({
  onShowFilterMenu,
  onChangeSort,
  onFilter,
  onFilterAlt,
  onCityFilter,
  filterData,
  filterDataAlt,
  cityFilter,
}) {
  return (
    <StyledMenu>
      <StyledButton type="button" onClick={onShowFilterMenu}>
        <Icon back />
      </StyledButton>

      <StyledH2>sort</StyledH2>
      <form>
        <label htmlFor="sort"></label>
        <StyledSelect
          name="sort"
          id="sort"
          onChange={(event) => onChangeSort(event.target.value)}
        >
          <option value="default">choose option</option>
          <option value="az">a - z</option>
          <option value="za">z - a</option>
        </StyledSelect>
      </form>

      <StyledH2>filter</StyledH2>
      {Object.entries(filterData).map((entry) => (
        <Fragment key={entry[0]}>
          <StyledH3>{entry[0]}</StyledH3>
          <form>
            {Object.entries(entry[1]).map((entryData) => (
              <StyledInputWrapper key={entryData[0]}>
                <StyledInput
                  type="checkbox"
                  value={entryData[0]}
                  id={entryData[0]}
                  onChange={(event) => onFilter(event, entry[0])}
                  checked={entryData[1]}
                />
                <StyledLabel htmlFor={entryData[0]}>{entryData}</StyledLabel>
              </StyledInputWrapper>
            ))}
          </form>
        </Fragment>
      ))}

      <StyledH3>other</StyledH3>
      <form>
        {Object.entries(filterDataAlt).map((entry) => (
          <StyledInputWrapper key={entry[0]}>
            <StyledInput
              type="checkbox"
              value={entry[0]}
              id={entry[0]}
              onChange={(event) => onFilterAlt(event, entry[0])}
              checked={entry[1]}
            />
            <StyledLabel htmlFor={entry[0]}>{entry}</StyledLabel>
          </StyledInputWrapper>
        ))}
      </form>

      <StyledH3>city</StyledH3>
      <form>
        <StyledInputWrapper>
          <StyledLabel htmlFor="city"></StyledLabel>
          <StyledInput
            type="text"
            name="city"
            id="city"
            onBlur={onCityFilter}
            defaultValue={cityFilter}
          />
        </StyledInputWrapper>
      </form>
    </StyledMenu>
  );
}

const StyledMenu = styled.div`
  position: fixed;
  right: 0;
  z-index: 1;
  height: 100vh;
  width: 60%;
  background-color: var(--color-background);
  opacity: 0.95;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
`;

const StyledH2 = styled.h2`
  font-size: 1rem;
  margin: 2rem 0 0.3rem 0.5rem;
`;

const StyledH3 = styled.h3`
  font-size: 1rem;
  font-weight: lighter;
  margin: 2rem 0 0.3rem 0.5rem;
  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledSelect = styled.select`
  margin-left: 0.5rem;
`;

const StyledInputWrapper = styled.div`
  display: inline-flex;
`;

const StyledInput = styled.input`
  margin: 0 0.3rem 0 0.8rem;
`;

const StyledLabel = styled.label`
  font-weight: lighter;
`;
