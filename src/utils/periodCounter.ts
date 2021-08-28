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
  let daysStr = '';
  if (days === 0) {
    daysStr = 'ago';
  } else if (days === 1) {
    daysStr = `and ${days} day ago`;
  } else {
    daysStr = `and ${days} days ago`;
  }

  if (years >= 1) {
    return `${yearsStr}, ${monthsStr} ${daysStr}`;
  }
  if (months >= 1) {
    return `${monthsStr} ${daysStr}`;
  }
  return `${daysStr}`;
};
