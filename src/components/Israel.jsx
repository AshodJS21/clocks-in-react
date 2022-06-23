import React, { useEffect, useState } from "react";
import "../style/Israel.css";


const Israel = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Jerusalem",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="is">
      <h2>Tel Aviv</h2>
      <p>Israel</p>
      {clockState}
    </div>
  );
};

export default Israel;
