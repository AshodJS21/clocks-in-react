import React, { useEffect, useState } from "react";
import "../style/LosAngeles.css";


const LosAngeles = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="la">
      <h2>Los Angeles</h2>
      <p>United States</p>
      {clockState}
    </div>
  );
};

export default LosAngeles;
