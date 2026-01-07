import { validationList } from "../../../constants/validations.constants";

const halfSize = "calc(50% - 8px)";

// const req = {
//   tenantUid: "tenant_123",
//   eventUid: "event_456",
//   title: "Prepare meeting agenda", //
//   description: "Description of the task",
//   priority: "Task priority",
//   dueAt: "dueAt",
//   assignedToUid: "Assigned bh whom",
//   createdByUid: "user_123",
//   updatedByUid: "user_123",
// };

export const taskMetaData = [
  {
    type: "text",
    name: "title",
    value: "",
    placeholder: "Enter Title of the Task",
    label: "Title",
    error: null,
    validations: [validationList.REQUIRED],
    // width: halfSize,
  },
  {
    type: "textarea",
    name: "description",
    value: "",
    placeholder: "Enter Task description",
    label: "Description",
    error: null,
    rows: 6,
    // width: halfSize,
  },
  {
    type: "dropdown",
    name: "priority",
    value: "",
    options: [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ],
    placeholder: "Add Priority",
    label: "Priority",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "date",
    name: "dueAt",
    value: "",
    placeholder: "Choose Due Date",
    label: "Due Date",
    error: null,
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "dropdown",
    name: "assignedToUid",
    placeholder: "Assign to",
    options: [
      { value: "admin", label: "Admin" },
      { value: "event_manager", label: "Event Manager" },
      { value: "vendor", label: "Vendor" },
      { value: "customer", label: "Customer" },
    ],
    value: "",
    label: "Assign to Vendor",
    error: null,
    validations: [validationList.REQUIRED],
  },
];

export const generateAddEventInpMetadata = (vendors) => {
  console.log("abdul vendors", vendors);

  const dat = taskMetaData.map((el) => {
    if (el.name === "assignedToUid") {
      return {
        ...el,
        options: vendors.map((vendor) => ({
          value: vendor.uid,
          label: `${vendor.firstName} ${vendor.lastName}`,
        })),
      };
    }
    return el;
  });

  return dat;
};

export const generateTaskDataToEdit = (vendors, data) => {
  const allowedFields = [
    "title",
    "description",
    "priority",
    "dueAt",
    "assignedToUid",
  ];

  return allowedFields.map((el) => {
    const input = taskMetaData.find((fn) => fn.name === el);
    if (el === "assignedToUid") {
      return {
        ...input,
        value: data[el],
        options: vendors.map((vendor) => ({
          value: vendor.uid,
          label: `${vendor.firstName} ${vendor.lastName}`,
        })),
      };
    }
    return { ...input, value: data[el] };
  });
};
