import GlobalStyles from "../components/GlobalStyles";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
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

  //favorite function
  const [locations, setLocations] = useState([]);
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
        startFetching={startFetching}
      />
    </>
  );
}
