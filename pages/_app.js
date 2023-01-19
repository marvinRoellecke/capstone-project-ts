import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import useCurrentPosition from "../helpers/useCurrentPosition";
import styled, { keyframes } from "styled-components";

export default function App({ Component, pageProps }) {
  const [loadingScreen, setLoadingScreen] = useState();
  const currentPosition = useCurrentPosition();

  const [locations, setLocations] = useState([]);
  const defaultFavorites = [];
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: defaultFavorites,
  });

  const [filterData, setFilterData] = useState({
    sport: {
      basketball: false,
      beachvolleyball: false,
      boule: false,
      fitness: false,
      fussball: false,
      leichtathletik: false,
      parkour: false,
      skateboard: false,
      tennis: false,
      tischtennis: false,
    },
  });
  const [filterDataOther, setFilterDataOther] = useState({
    lighting: false,
    wheelchair: false,
  });
  const [cityFilter, setCityFilter] = useState();
  const [sortData, setSortData] = useState();
  const [params, setParams] = useState(
    new URL("http://localhost:3000/api/locations/?")
  );
  const [isShowingFilterMenu, setIsShowingFilterMenu] = useState(false);

  async function startFetching() {
    try {
      const response = await fetch("/api/locations");
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    startFetching();
    setTimeout(() => {
      setLoadingScreen(false);
    }, 500);
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000);
  }, []);

  function handleToggleFavorite(event, id) {
    event.preventDefault();
    event.stopPropagation();
    setFavorites(
      favorites.includes(id)
        ? favorites.filter((favorite) => favorite !== id)
        : [...favorites, id]
    );
  }

  //show / hide Filter Menu
  function handleShowFilterMenu() {
    setIsShowingFilterMenu(!isShowingFilterMenu);
  }

  //fetch with query url
  async function searchApi(params) {
    const searchURL = params.searchParams.toString();
    try {
      const response = await fetch("/api/locations/?" + searchURL);
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleFilter(event, category) {
    setFilterData(() => {
      const newFilterData = {
        ...filterData,
        [category]: {
          ...filterData[category],
          [event.target.value]: event.target.checked,
        },
      };

      params.searchParams.delete(category); //only needed because on city text input

      Object.entries(newFilterData).map((filterCategory) =>
        Object.entries(filterCategory[1])
          .filter((entry) => {
            return entry[1];
          })
          .map((entry) => {
            return params.searchParams.append(filterCategory[0], entry[0]);
          })
      );

      searchApi(params);

      return newFilterData;
    });
  }

  async function handleFilterOther(event, category) {
    setFilterDataOther(() => {
      const newFilterDataOther = {
        ...filterDataOther,
        [category]: event.target.checked,
      };

      Object.entries(newFilterDataOther).map((entry) => {
        return params.searchParams.delete(entry[0]);
      });

      Object.entries(newFilterDataOther)
        .filter((entry) => {
          return entry[1];
        })
        .map((entry) => {
          return params.searchParams.append(entry[0], entry[1]);
        });

      searchApi(params);

      return newFilterDataOther;
    });
  }

  function handleCityFilter(event) {
    event.preventDefault();
    if (event.target.value !== "") {
      setCityFilter(event.target.value);
      params.searchParams.delete(event.target.name);
      params.searchParams.append(event.target.name, event.target.value);
      searchApi(params);
    } else {
      setCityFilter("");
      params.searchParams.delete(event.target.name);
      searchApi(params);
    }
  }

  //sort function
  function handleChangeSort(event) {
    if (event.target.value !== "default") {
      setSortData(event.target.value);
      params.searchParams.delete("sort");
      params.searchParams.append("sort", event.target.value);
      searchApi(params);
    } else {
      setSortData("");
      params.searchParams.delete("sort");
      searchApi(params);
    }
  }

  return (
    <>
      <GlobalStyles />
      {loadingScreen || !locations || currentPosition === undefined ? (
        <StyledLoadingScreen>
          <StyledH1>localSports</StyledH1>
        </StyledLoadingScreen>
      ) : (
        <Component
          {...pageProps}
          locations={locations}
          onToggleFavorite={handleToggleFavorite}
          favorites={favorites}
          setLocations={setLocations}
          startFetching={startFetching}
          currentPosition={currentPosition}
          onShowFilterMenu={handleShowFilterMenu}
          onFilter={handleFilter}
          onFilterOther={handleFilterOther}
          onCityFilter={handleCityFilter}
          onChangeSort={handleChangeSort}
          filterData={filterData}
          filterDataOther={filterDataOther}
          cityFilter={cityFilter}
          sortData={sortData}
          isShowingFilterMenu={isShowingFilterMenu}
        />
      )}
    </>
  );
}

const StyledLoadingScreen = styled.div`
  width: 300px;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 1;
`;

const typing = keyframes`
  from { width: 0 }
  to { width: 60% }
`;

const blinkCaret = keyframes`
   from, to { border-color: transparent }
  50% { border-color: black; }
`;

const StyledH1 = styled.h1`
  overflow: hidden;
  border-right: 0.15em solid black;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.01em;
  animation: ${typing} 1.5s steps(15, end),
    ${blinkCaret} 0.75s step-end infinite;
`;

/* {!locations || currentPosition === undefined ? (
  <StyledLoadingScreen>
    <StyledH1>localSports</StyledH1>
  </StyledLoadingScreen>
) : (
  <Component
    {...pageProps}
    locations={locations}
    onToggleFavorite={handleToggleFavorite}
    favorites={favorites}
    setLocations={setLocations}
    startFetching={startFetching}
    currentPosition={currentPosition}
    onShowFilterMenu={handleShowFilterMenu}
    onFilter={handleFilter}
    onFilterOther={handleFilterOther}
    onCityFilter={handleCityFilter}
    onChangeSort={handleChangeSort}
    filterData={filterData}
    filterDataOther={filterDataOther}
    cityFilter={cityFilter}
    sortData={sortData}
    isShowingFilterMenu={isShowingFilterMenu}
  />
)} */
