export const correctDateNumber = (num: number): string => {
  return num < 10 ? `0${num}` : String(num);
};
