export const timeAgo = (date: string) => {
  const newDate = new Date(date);
  const currentTime = new Date();
  const minutesAgo = Math.floor(
    (currentTime.getTime() - newDate.getTime()) / 1000 / 60
  );
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);

  return daysAgo
    ? `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`
    : hoursAgo
    ? `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`
    : minutesAgo
    ? `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`
    : null;
};
