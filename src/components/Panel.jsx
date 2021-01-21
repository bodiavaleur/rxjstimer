import { useEffect, useRef } from "react";
import { Button, ControlPanel } from "../ui";
import { useStatus } from "../hooks/useStatus";
import { asyncScheduler, fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

export function Panel() {
  const waitBtn = useRef(null);

  const [status, changeStatus] = useStatus();

  const isStop = status === "stop";
  const isPause = status === "pause";

  useEffect(() => {
    const button$ = fromEvent(waitBtn.current, "dblclick").pipe(
      throttleTime(300, asyncScheduler, {
        leading: false,
        trailing: true,
      })
    );

    const subscriber = button$.subscribe(() => changeStatus("pause"));

    return () => subscriber.unsubscribe();
  }, []);

  return (
    <ControlPanel>
      {isStop || isPause ? (
        <Button onClick={() => changeStatus("start")}>Start</Button>
      ) : (
        <Button onClick={() => changeStatus("stop")}>Stop</Button>
      )}
      <Button ref={waitBtn} waiting={isPause}>
        Wait
      </Button>
      <Button onClick={() => changeStatus("reset")}>Reset</Button>
    </ControlPanel>
  );
}
