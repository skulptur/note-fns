export const setDuration = <T extends { duration: number }>(
  duration: number,
  obj: T
): T => {
  return {
    ...obj,
    duration,
  };
};
