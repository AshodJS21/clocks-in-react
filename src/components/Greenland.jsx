import React, { useEffect, useState } from "react";
import "../style/Greenland.css";


const Greenland = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "America/Godthab",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="ge">
      <h2>Godthab</h2>
      <p>Greenland</p>
      {clockState}
    </div>
  );
};

export default Greenland;
