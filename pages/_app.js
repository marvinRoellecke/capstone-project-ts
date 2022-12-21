import GlobalStyles from "../components/GlobalStyles";
import sportLocationsData from "../lib/data/sportLocationsData";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  //favorite function
  const [locations, setLocations] = useState(sportLocationsData);

  function handleToggleFavorite(id) {
    setLocations(
      locations.map((location) =>
        location.id === id
          ? { ...location, isFavorite: !location.isFavorite }
          : location
      )
    );
    console.log(locations);
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        locations={locations}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}
