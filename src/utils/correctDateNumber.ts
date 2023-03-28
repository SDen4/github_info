/**
 * Format time od date number from '2' to '02'
 * @param num
 * @returns
 */
export const correctDateNumber = (num: number): string => {
  return num < 10 ? `0${num}` : String(num);
};
