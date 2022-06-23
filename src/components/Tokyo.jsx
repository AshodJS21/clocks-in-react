import React, { useEffect, useState } from "react";
import "../style/Tokyo.css";


const Tokyo = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Tokyo",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="jp">
      <h2>Japan</h2>
      <p>Tokyo</p>
      {clockState}
    </div>
  );
};

export default Tokyo;
