import moment from "moment";

export const formatDateTime = (input) => {
  return moment(input).format("DD MMM YYYY hh:mmA");
};

export const extractHoursAndMinutes = (time) => {
  const [hour, minute] = time.split(":").map(Number);
  return { hour, minute };
};

export const formatScheduleDate = (date, hour, minute) => {
  let scheduledAt = new Date(
    `${date}T${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}:00`
  );
  return scheduledAt.toISOString();
};
