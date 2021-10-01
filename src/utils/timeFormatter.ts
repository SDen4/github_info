export const timeFormatter = (incomeDate: Date): string => {
  const hour =
    incomeDate.getHours() < 10
      ? `0${incomeDate.getHours()}`
      : incomeDate.getHours();

  const minute =
    incomeDate.getMinutes() < 10
      ? `0${incomeDate.getMinutes()}`
      : incomeDate.getMinutes();

  const secund =
    incomeDate.getSeconds() < 10
      ? `0${incomeDate.getSeconds()}`
      : incomeDate.getSeconds();

  return `${hour}:${minute}:${secund}`;
};
