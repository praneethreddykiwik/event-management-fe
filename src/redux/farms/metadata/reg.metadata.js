import { ROLES_OBJ } from "../../../constants/roles";
import { validationList } from "../../../constants/validations.constants";

const halfSize = "calc(50% - 8px)";

const lowerRoleOptions = [
  { value: "vendor", label: "Vendor" },
  { value: "supervisor", label: "Supervisor" },
  { value: "qa", label: "QA" },
];

const generateAdminRoleOptions = () => {
  return Object.keys(ROLES_OBJ).map((key) => {
    return { value: key, label: ROLES_OBJ[key].label };
  });
};

export const registrationMetaData = [
  {
    type: "text",
    name: "firstName",
    value: "",
    placeholder: "Enter your name",
    label: "First Name",
    error: null,
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "text",
    name: "lastName",
    value: "",
    placeholder: "Enter your name",
    label: "Last Name",
    error: null,
    width: halfSize,
  },
  {
    type: "email",
    name: "email",
    value: "",
    placeholder: "Email",
    label: "Email",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "text",
    name: "username",
    value: "",
    placeholder: "Username",
    label: "Username",
    error: null,
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "tel",
    name: "mobile",
    value: "",
    placeholder: "Enter your mobile",
    label: "Mobile",
    error: null,
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "dropdown",
    name: "role",
    placeholder: "Choose role",
    options: generateAdminRoleOptions(),
    value: "",
    label: "Role",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "password",
    name: "password",
    value: "",
    placeholder: "Password",
    label: "Password",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "setPassword",
    name: "confirmPassword",
    value: "",
    placeholder: "Confirm Password",
    label: "Confirm Password",
    error: null,
    validations: [validationList.REQUIRED],
  },
];

export const generateRegDataToEdit = (user) => {
  const allowedFields = [
    "firstName",
    "lastName",
    "email",
    "username",
    "mobile",
    "role",
  ];

  return allowedFields.map((el) => {
    const input = registrationMetaData.find((fn) => fn.name === el);
    return { ...input, value: user[el] };
  });
};

export const generateRegInputsAccordingToRole = (role) => {
  const isAdmin = role === "admin";
  const options = isAdmin ? generateAdminRoleOptions() : lowerRoleOptions;

  return registrationMetaData.map((el) => {
    if (el.name === "role") {
      return { ...el, options };
    }
    return el;
  });
};
