import React, { useEffect, useState } from "react";
import "../style/London.css";


const London = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Europe/London",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="uk">
      <h2>London</h2>
      <p>United Kingdom</p>
      {clockState}
    </div>
  );
};

export default London;
