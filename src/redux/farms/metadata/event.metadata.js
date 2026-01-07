import { validationList } from "../../../constants/validations.constants";

const halfSize = "calc(50% - 8px)";

export const eventMetaData = (eventManagers) => {
  const managerOptions = eventManagers.map((manager) => ({
    value: manager.uid,
    label: `${manager?.firstName} ${manager?.lastName}`,
  }));

  return [
    {
      type: "text",
      name: "eventName",
      value: "",
      placeholder: "e.g.. Annual Conference",
      label: "Event Name",
      error: null,
      validations: [validationList.REQUIRED],
    },
    {
      type: "dropdown",
      name: "eventType",
      placeholder: "Event Type",
      options: [
        { value: "public", label: "Public" },
        { value: "private", label: "Private" },
        { value: "corporate", label: "Corporate" },
      ],
      value: "public",
      label: "Event Type",
      error: null,
      validations: [validationList.REQUIRED],
    },
    {
      type: "date",
      name: "eventDate",
      value: "", // check this up
      // placeholder: "e.g.. Annual Conference",
      label: "Event Date",
      error: null,
      validations: [validationList.REQUIRED],
      width: halfSize,
    },
    {
      type: "time",
      name: "eventTime",
      value: "",
      // placeholder: "e.g.. Annual Conference",
      label: "Event Time",
      error: null,
      validations: [validationList.REQUIRED],
      width: halfSize,
    },
    {
      type: "text",
      name: "venue",
      value: "",
      placeholder: "e.g.. Some Good Place",
      label: "Venue",
      error: null,
      validations: [validationList.REQUIRED],
    },
    {
      type: "number",
      name: "expectedAttendees",
      value: "200",
      placeholder: "e.g.. 150",
      label: "",
      error: null,
      validations: [validationList.REQUIRED],
    },
    {
      type: "dropdown",
      name: "assignedEventManager",
      placeholder: "Assign Event Manager",
      options: managerOptions,
      // value: "Assign Event Manager",
      label: "Assign Event Manager",
      error: null,
      validations: [validationList.REQUIRED],
    },
    {
      type: "textarea",
      name: "eventDescription",
      value: "",
      placeholder: "Provide your event details...",
      label: "Event Description",
      error: null,
      validations: [validationList.REQUIRED],
    },
  ];
};

export const generateEventDataToEdit = (user) => {
  const allowedFields = [
    "eventName",
    "eventType",
    "eventDate",
    "eventTime",
    "venue",
    "expectedAttendees",
    "assignedEventManager",
    "eventDescription",
  ];

  return allowedFields.map((el) => {
    const input = eventMetaData.find((fn) => fn.name === el);
    return { ...input, value: user[el] };
  });
};
