import { parseMs } from "./parseMs";

describe('parseMs', () => {
  it('parseMs should return correct durations', () => {
    expect(parseMs(1337000001)).toEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
});
