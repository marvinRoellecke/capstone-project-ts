import { Fragment } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

export default function FilterMenu({
  onShowFilterMenu,
  onFilter,
  onFilterOther,
  onCityFilter,
  onChangeSort,
  filterData,
  filterDataOther,
  cityFilter,
  sortData,
}) {
  return (
    <StyledMenu>
      <StyledButton type="button" onClick={onShowFilterMenu}>
        <Icon back />
      </StyledButton>

      <StyledH2>sortieren</StyledH2>
      <label htmlFor="sort"></label>
      <StyledSelect
        name="sort"
        id="sort"
        value={sortData}
        onChange={onChangeSort}
      >
        <option value="default">Wähle Option</option>
        <option value="sortTitle1">A - Z</option>
        <option value="sortTitle-1">Z - A</option>
        <option value="sortRating1">Bewertung aufsteigend</option>
        <option value="sortRating-1">Bewertung absteigend</option>
      </StyledSelect>

      <StyledH2>filter</StyledH2>
      {Object.entries(filterData).map((entry) => (
        <Fragment key={entry[0]}>
          <StyledH3>{entry[0]}</StyledH3>
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
        </Fragment>
      ))}

      <StyledH3>weitere</StyledH3>
      {Object.entries(filterDataOther).map((entry) => (
        <StyledInputWrapper key={entry[0]}>
          <StyledInput
            type="checkbox"
            value={entry[0]}
            id={entry[0]}
            onChange={(event) => onFilterOther(event, entry[0])}
            checked={entry[1]}
          />
          <StyledLabel htmlFor={entry[0]}>
            {entry[0] === "lighting" ? "beleuchted" : "barrierefrei"}
          </StyledLabel>
        </StyledInputWrapper>
      ))}

      <StyledH3>stadt</StyledH3>
      <StyledInputWrapper>
        <StyledLabel htmlFor="city"></StyledLabel>
        <StyledInput
          type="text"
          name="city"
          id="city"
          onChange={onCityFilter}
          defaultValue={cityFilter}
        />
      </StyledInputWrapper>
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
  margin: 1rem 0 0 0.5rem;
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
