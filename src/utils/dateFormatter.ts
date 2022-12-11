import { correctDateNumber } from './correctDateNumber';

/**
 * Format dates to "dd.mm.yyyy"
 */

export const dateFormatter = (dataCreated: Date): string => {
  const day = correctDateNumber(dataCreated.getUTCDate());
  const month = correctDateNumber(dataCreated.getUTCMonth() + 1);
  const year = dataCreated.getUTCFullYear();

  return `${day}.${month}.${year}`;
};
