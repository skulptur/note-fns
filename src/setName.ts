export const setName = <T extends { name: string }>(
  name: string,
  obj: T
): T => {
  return {
    ...obj,
    name,
  };
};
