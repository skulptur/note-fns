export const setTime = <T extends { time: number }>(
  time: number,
  obj: T
): T => {
  return {
    ...obj,
    time,
  };
};
