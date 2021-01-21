import { BehaviorSubject, interval, Subject } from "rxjs";
import { map, scan } from "rxjs/operators";

const subject = new BehaviorSubject(0);

export const Stopwatch = {
  getCurrentCounter: () => subject.getValue(),
  setCounter: (count) => subject.next(count),
  resetCounter: () => subject.next(0),
  onCount: () => subject.asObservable(),
};
