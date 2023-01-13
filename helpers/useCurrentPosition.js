import { useState, useEffect } from "react";

export default function useCurrentPosition() {
  const [currentPosition, setCurrentPosition] = useState();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  return currentPosition;
}
