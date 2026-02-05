import { validationList } from "../../../constants/validations.constants";

const halfSize = "calc(50% - 8px)";

const BASE_EVENT_METADATA = [
  {
    type: "text",
    name: "eventName",
    value: "",
    placeholder: "e.g. Annual Conference",
    label: "Event Name",
    validations: [validationList.REQUIRED],
  },
  {
    type: "dropdown",
    name: "eventType",
    value: "",
    placeholder: "Event Type",
    options: [
      { value: "public", label: "Public" },
      { value: "private", label: "Private" },
      { value: "corporate", label: "Corporate" },
    ],
    label: "Event Type",
    validations: [validationList.REQUIRED],
  },
  {
    type: "date",
    name: "eventDate",
    value: "",
    label: "Event Date",
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "time",
    name: "eventTime",
    value: "",
    label: "Event Time",
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "text",
    name: "venue",
    value: "",
    placeholder: "e.g. Some Good Place",
    label: "Venue",
    validations: [validationList.REQUIRED],
  },
  {
    type: "number",
    name: "expectedAttendees",
    value: "",
    placeholder: "e.g. 150",
    label: "Expected Attendees",
    validations: [validationList.REQUIRED],
  },
  {
    type: "dropdown",
    name: "assignedEventManager",
    value: "",
    placeholder: "Assign Event Manager",
    options: [],
    label: "Assign Event Manager",
    validations: [validationList.REQUIRED],
  },
  {
    type: "textarea",
<<<<<<< HEAD
    name: "eventDescription",
=======
    name: "comments",
>>>>>>> 32a4d7263831747cb154cd46ec559aaaec86f2b4
    value: "",
    placeholder: "Provide your event details...",
    label: "Event Description",
    validations: [validationList.REQUIRED],
  },
];

export const eventMetaData = (eventManagers = []) => {
  return BASE_EVENT_METADATA.map((el) => {
    if (el.name === "assignedEventManager") {
      return {
        ...el,
        options: eventManagers.map((manager) => ({
          value: manager.uid,
          label: `${manager.firstName} ${manager.lastName}`,
        })),
      };
    }
    return { ...el, error: null };
  });
};

export const generateEventDataToEdit = (eventManagers = [], event = {}) => {
  const valueMap = {
    eventName: event.title,
<<<<<<< HEAD
    eventDescription: event.description,
=======
    eventDescription: event.comments,
>>>>>>> 32a4d7263831747cb154cd46ec559aaaec86f2b4
    eventDate: event.eventDate,
    eventTime: event.eventTime,
    venue: event.venue,
    eventType: event.eventType,
    expectedAttendees: event.expectedAttendees,
    assignedEventManager: event.assignedEventManager,
  };

  return eventMetaData(eventManagers).map((el) => ({
    ...el,
    value: valueMap[el.name] ?? "",
  }));
};
