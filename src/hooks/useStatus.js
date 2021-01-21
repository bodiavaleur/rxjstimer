import { useState, useEffect } from "react";
import { Stopwatch } from "../stopwatch";

export function useStatus() {
  const [status, setStatus] = useState("stop");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (status) {
        case "start":
          return Stopwatch.setCounter(Stopwatch.getCurrentCounter() + 1);
        case "stop":
          return Stopwatch.resetCounter();
        case "pause":
          return;
        case "reset":
          Stopwatch.resetCounter();
          setStatus("start");
          return;
        default:
          return;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  const changeStatus = (newStatus) => setStatus(newStatus);

  return [status, changeStatus];
}
