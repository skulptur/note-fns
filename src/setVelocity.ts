export const setVelocity = <T extends { velocity: number }>(
  velocity: number,
  obj: T
): T => {
  return {
    ...obj,
    velocity,
  };
};
