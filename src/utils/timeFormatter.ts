import { correctDateNumber } from './correctDateNumber';

/**
 * Time formatter to "hh.mm.ss"
 * @param incomeDate - Date
 * @returns string in format "hh.mm.ss"
 */

export const timeFormatter = (incomeDate: Date): string => {
  const hour = correctDateNumber(incomeDate.getHours());
  const minute = correctDateNumber(incomeDate.getMinutes());
  const second = correctDateNumber(incomeDate.getSeconds());
  return `${hour}:${minute}:${second}`;
};
