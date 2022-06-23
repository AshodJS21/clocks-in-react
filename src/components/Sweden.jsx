import React, { useEffect, useState } from "react";
import "../style/Sweden.css";


//your current location time zones
const Sweden = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <div className="se">
      <h2>Stockholm</h2>
      <p>Sweden</p>
      {clockState}
    </div>
  );
};

export default Sweden;
