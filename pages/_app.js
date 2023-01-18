import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import useCurrentPosition from "../helpers/useCurrentPosition";
import styled, { keyframes } from "styled-components";

export default function App({ Component, pageProps }) {
  const currentPosition = useCurrentPosition();

  const [locations, setLocations] = useState([]);
  const defaultFavorites = [];
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: defaultFavorites,
  });

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

  return (
    <>
      <GlobalStyles />
      {!locations || currentPosition === undefined ? (
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
