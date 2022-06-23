import React, { useEffect, useState } from "react";
import "../style/Australia.css";


const Australia = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Australia/Sydney",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="aus">
      <h2>Sydney</h2>
      <p>Australia</p>
      {clockState}
    </div>
  );
};

export default Australia;
