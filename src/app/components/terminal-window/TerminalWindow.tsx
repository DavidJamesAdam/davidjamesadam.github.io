"use client";

import Draggable from "react-draggable";
import Image from "next/image";
import { useRef, useState } from "react";
import "./styles.css";

export default function TerminalWindow() {
  const nodeRef = useRef(null);
  // const [coordinates, setCoordinates] = useState<{
  //   latitude: number | null;
  //   longitude: number | null;
  // }>({
  //   latitude: null,
  //   longitude: null,
  // });
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState(false);
  const [minimize, setMinimize] = useState(false);

  const handleMinimize = () => {
    setMinimize(!minimize);
  };

  // const handleGetLocation = () => {
  //   if (!navigator.geolocation) {
  //     setError("Geolocation is not supported by your browser.");
  //     return;
  //   }
  //   setLoading(true);
  //   setError(null);
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       setCoordinates({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //       setLoading(false);
  //     },
  //     (err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     },
  //   );
  // };

  // useEffect(() => {
  //   handleGetLocation();
  // }, []);

  return (
    <Draggable nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className="h-auto min-w-52 max-w-52 bg-black/80"
      >
        <div className="px-5 py-2 border flex flex-row justify-between hover:cursor-move">
          <p className="my-1 indent-0">SYSTEM STATUS</p>
          <button onClick={handleMinimize}>
            <Image
              src="/minimize.svg"
              alt="Minimise button"
              className="white w-5"
              width={10}
              height={10}
            />
          </button>
        </div>
        <div className={minimize ? "h-0 overflow-hidden" : "h-auto border p-5"}>

          <p className="indent-0">
            CONNECTION: <span className="blinking-text">STABLE</span>
          </p>
          <p className="indent-0">
            {/* LOCATION:{" "}
            {coordinates.latitude && coordinates.longitude
              ? `${coordinates.latitude}, ${coordinates.longitude}`
              : "Not available"} */}
              Location: Unknown
          </p>
          <p className="indent-0">TIME: </p>
        </div>
      </div>
    </Draggable>
  );
}
