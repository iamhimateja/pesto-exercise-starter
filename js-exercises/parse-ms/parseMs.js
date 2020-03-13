const parseMs = ms => {
  let seconds = Math.floor(ms / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;
  let hours = Math.floor(minutes / 60);
  minutes %= 60;
  const days = Math.floor(hours / 24);
  hours %= 24;

  // eslint-disable-next-line max-len
  const milliseconds = ms - ((days * 24 * 60 * 60 * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000));
  // cannot calculate micro and nanoseconds
  const nanoseconds = 0;
  const microseconds = 0;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    microseconds,
    nanoseconds,
  };
};

export { parseMs };
