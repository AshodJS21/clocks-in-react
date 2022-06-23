import React, { useEffect, useState } from "react";
import "../style/Armenia.css";


const Armenia = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Asia/Yerevan",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="arm">
      <h2>Yerevan</h2>
      <p>Armenia</p>
      {clockState}
    </div>
  );
};

export default Armenia;
