import React, { useEffect, useState } from "react";
import "../style/Berlin.css";


const Berlin = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "Europe/Berlin",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="de">
      <h2>Berlin</h2>
      <p>Germany</p>
      {clockState}
    </div>
  );
};

export default Berlin;
