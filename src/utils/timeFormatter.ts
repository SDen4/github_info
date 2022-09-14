/**
 * Time formatter to "hh.mm.ss"
 * @param incomeDate - Date
 * @returns string in format "hh.mm.ss"
 */

export const timeFormatter = (incomeDate: Date): string => {
  const hour =
    incomeDate.getHours() < 10
      ? `0${incomeDate.getHours()}`
      : incomeDate.getHours();

  const minute =
    incomeDate.getMinutes() < 10
      ? `0${incomeDate.getMinutes()}`
      : incomeDate.getMinutes();

  const second =
    incomeDate.getSeconds() < 10
      ? `0${incomeDate.getSeconds()}`
      : incomeDate.getSeconds();

  return `${hour}:${minute}:${second}`;
};
