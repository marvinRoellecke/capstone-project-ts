import { Fragment } from "react";
import styled from "styled-components";
import GoBackButton from "../GoBackButton/GoBackButton";

export default function FilterMenu({
  onShowFilterMenu,
  onChangeSort,
  onFilter,
  filterData,
}) {
  return (
    <StyledMenu>
      <StyledButton type="button" onClick={onShowFilterMenu}>
        <GoBackButton />
      </StyledButton>
      <h2>sort</h2>
      <form>
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          onChange={(event) => onChangeSort(event.target.value)}
        >
          <option value="default">choose option</option>
          <option value="az">a - z</option>
          <option value="za">z - a</option>
          <option value="toOld">newest first</option>
          <option value="toNew">oldest first</option>
        </select>
      </form>

      <h2>filter - sport</h2>
      <form>
        {Object.entries(filterData.sport).map((entry) => (
          <Fragment key={entry[0]}>
            <input
              type="checkbox"
              value={entry[0]}
              onChange={(event) => onFilter(event, "sport")}
              checked={entry[1]}
            />
            <label>{entry}</label>
          </Fragment>
        ))}
      </form>
      <h2>filter - city</h2>
      <form>
        {Object.entries(filterData.city).map((entry) => (
          <Fragment key={entry[0]}>
            <input
              type="checkbox"
              value={entry[0]}
              onChange={(event) => onFilter(event, "city")}
              checked={entry[1]}
            />
            <label>{entry}</label>
          </Fragment>
        ))}
      </form>
      <h2>filter - rating</h2>
      <form>
        {Object.entries(filterData.rating).map((entry) => (
          <Fragment key={entry[0]}>
            <input
              type="checkbox"
              value={entry[0]}
              onChange={(event) => onFilter(event, "rating")}
              checked={entry[1]}
            />
            <label>{entry}</label>
          </Fragment>
        ))}
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
