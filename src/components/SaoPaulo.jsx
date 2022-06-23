import React, { useEffect, useState } from "react";
import "../style/SaoPaulo.css";


const SaoPaulo = () => {
  const [clockState, setClockState] = useState();
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(
        date.toLocaleTimeString("en-US", {
          timeZone: "America/Sao_Paulo",
          timeStyle: "medium",
          hourCycle: "h12",
        })
      );
    }, 1000);
  }, []);

  return (
    <div className="br">
      <h2>Brazil</h2>
      <p>Sao Paulo</p>
      {clockState}
    </div>
  );
};

export default SaoPaulo;
