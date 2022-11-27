import moment from "moment";

export const calculationDate = (updatedAt: string) => {
  const nowTime = moment();
  const updatedDate = moment(updatedAt);

  const diff = nowTime.diff(updatedDate);
  const diffDuration = moment.duration(diff).years();

  const diffDate =
    diffDuration !== 0
      ? ` ${diffDuration} years `
      : diffDuration === 0 &&
        nowTime.month() !== 1 &&
        ` ${nowTime.month()} months `;

  return {
    postedDate: diffDate,
  };
};
