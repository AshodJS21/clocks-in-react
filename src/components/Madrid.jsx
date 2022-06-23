import React, { useEffect, useState } from "react";
import "../style/Madrid.css";


const Madrid = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Europe/Madrid",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="sp">
      <h2>Spain</h2>
      <p>Madrid</p>
      {clockState}
    </div>
  );
};

export default Madrid;
