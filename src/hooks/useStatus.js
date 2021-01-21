import { useState, useEffect } from "react";
import { Stopwatch } from "../stopwatch";
import { timer } from "rxjs";

export function useStatus() {
  const [status, setStatus] = useState("stop");

  useEffect(() => {
    const interval$ = timer(0, 1000);

    const sub = interval$.subscribe((_) => {
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
    });

    return () => sub.unsubscribe();
  }, [status]);

  const changeStatus = (newStatus) => setStatus(newStatus);

  return [status, changeStatus];
}
