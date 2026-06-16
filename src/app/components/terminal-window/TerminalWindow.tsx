"use client";

import Draggable from "react-draggable";
import { useRef, useState, useEffect } from "react";

export default function TerminalWindow() {
  const nodeRef = useRef(null);
  const [coordinates, setCoordinates] = useState<{
    latitude: number | null;
    longitude: number | null;
  }>({
    latitude: null,
    longitude: null,
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );
  };

  useEffect(() => {
    handleGetLocation();
  }, []);

  return (
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef} className="h-auto w-auto border bg-black/80 hover:cursor-move">
          <div className="m-5">
            <p className="my-1">SYSTEM STATUS</p>
            <p>CONNECTION: <span className="blinking-text">STABLE</span></p>
            <p>
              LOCATION:{" "}
              {coordinates.latitude && coordinates.longitude
                ? `${coordinates.latitude}, ${coordinates.longitude}`
                : "Not available"}
            </p>
            <p>TIME: </p>
          </div>
        </div>
      </Draggable>
  );
}
