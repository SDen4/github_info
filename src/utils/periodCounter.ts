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

  const yearsStr = years > 1 ? `${years} years` : `${years} year`;
  const monthsStr = months > 1 ? `${months} months` : `${months} month`;
  const daysStr = days > 1 ? `${days} days` : `${days} day`;

  if (years >= 1) {
    return `${yearsStr}, ${monthsStr} and ${daysStr} ago`;
  }
  if (months >= 1) {
    return `${monthsStr} and ${daysStr} ago`;
  }
  return `${daysStr} ago`;
};
