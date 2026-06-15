import { TASK_STATUSES } from "../../../constants/statuses";
import { validationList } from "../../../constants/validations.constants";

// const halfSize = "calc(50% - 8px)";
export const generateTaskStatusOptions = (role) => {
  return Object.keys(TASK_STATUSES).map((key) => ({
    value: key,
    label: TASK_STATUSES[key].label,
    isDisabled: !TASK_STATUSES[key].rolePermissions.includes(role),
  }));
};

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
    type: "dropdown",
    name: "status",
    value: "",
    options: generateTaskStatusOptions(),
    placeholder: "Task status",
    label: "Status",
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
    // width: halfSize,
  },
  // {
  //   type: "checkbox",
  //   name: "assineeType2",
  //   placeholder: "Select assignee type: ",
  //   list: ["Assign to Supervisors"],
  //   origin: "inputForm",
  //   error: null,
  // },
  {
    type: "radio-group",
    name: "assineeType",
    value: "Assign to Vendor",
    placeholder: "Choose Assignee type",
    list: ["Assign to Vendor", "Assign to Supervisor"],
    origin: "inputForm",
    error: null,
  },
  {
    type: "dropdown",
    name: "assignedToUid",
    placeholder: "Assign to",
    options: [],
    value: "",
    label: "Assign to Vendor/Supervisors",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "dropdown",
    name: "qaAssignedTo",
    placeholder: "QA",
    options: [],
    value: "",
    label: "QA",
    error: null,
  },
];
// t.qa_assigned_to_uid AS "qaAssignedTo",
// t.is_qa_approved AS "isQaApproved",

export const generateAddTaskInputs = (vendorsOrSuprvs, qa, role) => {
  const dat = taskMetaData.map((k) => {
    const el = { ...k };
    if (el.name === "assignedToUid" || el.name === "qaAssignedTo") {
      const opts = el.name === "assignedToUid" ? vendorsOrSuprvs : qa;
      el.options = generateUserOptions(opts);
    }

    if (el.name === "status") {
      el.options = generateTaskStatusOptions(role);
    }
    return el;
  });
  return dat;
};

export const generateEditTaskInputs = (vendorsOrSuprvs, qa, data, role) => {
  const allowedFields = [
    "title",
    "description",
    "priority",
    "status",
    "dueAt",
    "assineeType",
    "assignedToUid",
    "qaAssignedTo",
  ];

  return allowedFields.map((el) => {
    const input = taskMetaData.find((fn) => fn.name === el);

    const mapper = { qaAssignedTo: "qaAssignedToUid" };
    const valueName = mapper[el] || el;
    const output = { ...input, value: data[valueName] };
    if (el === "assignedToUid" || el === "qaAssignedTo") {
      const opts = el.name === "assignedToUid" ? vendorsOrSuprvs : qa;
      output.options = generateUserOptions(opts);
    }
    if (el === "qaAssignedTo") {
      output.value = data.qaAssignedToUid;
    }
    if (el === "status") {
      output.options = generateTaskStatusOptions(role);
    }
    return output;
  });
};

export const generateUserOptions = (users) => {
  return users.map((user) => ({
    value: user.uid,
    label: `${user.firstName} ${user.lastName}`,
  }));
};
