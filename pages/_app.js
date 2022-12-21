import GlobalStyles from "../components/GlobalStyles";
import sportLocationsData from "../lib/data/sportLocationsData";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  //favorite function
  const [locations, setLocations] = useState(sportLocationsData);
  const defaultFavorites = [];
  const [favorites, setFavorites] = useLocalStorageState("favorites", {
    defaultValue: defaultFavorites,
  });

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
      <Component
        {...pageProps}
        locations={locations}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
        setLocations={setLocations}
      />
    </>
  );
}
