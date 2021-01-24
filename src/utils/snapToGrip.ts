export const snapToGrip = (gridSize: number, val: number): number => {
  return gridSize * Math.round(val / gridSize);
};
