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
      .padStart(2, "0")}:00`,
  );
  return scheduledAt.toISOString();
};

export const dateObj = (iso) => {
  const myNewDate = new Date(iso);

  const date = myNewDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const time = myNewDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return { date, time };
};

export const isoToInputDateTime = (iso) => {
  if (!iso) return { date: "", time: "" };
  const d = new Date(iso);
  if (isNaN(d)) return { date: "", time: "" };
  const pad = (v) => `${v}`.padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const min = pad(d.getMinutes());
  return { date: `${yyyy}-${mm}-${dd}`, time: `${hh}:${min}` };
};

export const modifyTimeToISO = (date, time) => {
  const { hour, minute } = extractHoursAndMinutes(time);
  const formatedTime = formatScheduleDate(date, hour, minute);
  return formatedTime;
};
