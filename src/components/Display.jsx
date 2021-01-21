import React from "react";
import { TimeDisplay } from "../ui";
import { useCounter } from "../hooks/useCounter";

export function Display() {
  const count = useCounter();
  const formatTime = new Date(count * 1000).toISOString().substr(11, 8);

  return <TimeDisplay>{formatTime}</TimeDisplay>;
}
