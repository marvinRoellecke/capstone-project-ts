import { useState, useEffect } from "react";

export default function useCurrentPosition() {
  const [currentPosition, setCurrentPosition] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geolocation) => {
      setCurrentPosition([
        geolocation.coords.latitude,
        geolocation.coords.longitude,
      ]);
    });
  }, []);
  return currentPosition;
}
