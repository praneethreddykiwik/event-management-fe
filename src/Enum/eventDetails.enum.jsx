// export const EVENT_DETAILS_ENUM = {
//   EVENT_NAME: "Annual Tech Conference",
//   EVENT_STATU
// };

export const EventDetailsMap = (event, date, time) => {
  return [
    {
      Type: "Date",
      Info: date,
      Icon: "date_range",
    },
    {
      Type: "Time",
      Info: time,
      Icon: "aod_watch",
    },
    {
      Type: "Venue",
      Info: event.venue,
      Icon: "map",
    },
    {
      Type: "Expected Attendes",
      Info: event.expectedAttendees,
      Icon: "group",
    },
  ];
};
