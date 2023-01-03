import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    async function startFetching() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error(error);
      }
    }

    startFetching();
  }, [url]);
  return locations;
}
