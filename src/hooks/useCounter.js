import { useState, useEffect } from "react";
import { Stopwatch } from "../stopwatch";

export function useCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const subscriber = Stopwatch.onCount().subscribe(setCount);

    return () => subscriber.unsubscribe();
  }, []);

  return count;
}
