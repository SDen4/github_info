export const periodCounter = (dataCreated: Date): string => {
  const currentDayDuration = new Date().getTime();
  const dataCreatedDuration = dataCreated.getTime();
  const duration = currentDayDuration - dataCreatedDuration;

  const years = Math.floor(duration / 1000 / 60 / 60 / 24 / 365);
  const months = Math.floor(
    (duration - years * 365 * 24 * 60 * 60 * 1000) / 1000 / 60 / 60 / 24 / 30,
  );
  const days = Math.floor(
    (duration -
      years * 365 * 24 * 60 * 60 * 1000 -
      months * 30 * 24 * 60 * 60 * 1000) /
      1000 /
      60 /
      60 /
      24,
  );

  if (years >= 1) {
    return `${years} year(s), ${months} month(s), ${days} day(s) ago`;
  }
  if (months >= 1) {
    return `${months} month(s), ${days} day(s) ago`;
  }
  return `${days} day(s) ago`;
};
