// util
export const getItemCyclic = <T>(index: number, arr: Array<T>): T => {
  const id = index % (arr.length - 1);
  return arr[id];
};
