import React, { useEffect, useState } from "react";
import "../style/Iceland.css";


const Iceland = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Atlantic/Reykjavik",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="ice">
      <h2>Reykjavik</h2>
      <p>Iceland</p>
      {clockState}
    </div>
  );
};

export default Iceland;
