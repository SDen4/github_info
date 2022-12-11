import { correctDateNumber } from './correctDateNumber';

/**
 * Format dates to "dd.mm.yyyy"
 */

export const dateFormatter = (dataCreated: Date): string => {
  const day = correctDateNumber(dataCreated.getDate());
  const month = correctDateNumber(dataCreated.getMonth() + 1);
  const year = dataCreated.getFullYear();

  return `${day}.${month}.${year}`;
};
