/**
 * Format dates to "dd.mm.yyyy"
 */

export const dateFormatter = (dataCreated: Date): string => {
  const day =
    dataCreated.getDate() < 10
      ? `0${dataCreated.getDate()}`
      : dataCreated.getDate();

  const month =
    dataCreated.getMonth() < 9
      ? `0${dataCreated.getMonth() + 1}`
      : dataCreated.getMonth() + 1;

  const year = dataCreated.getFullYear();

  return `${day}.${month}.${year}`;
};
