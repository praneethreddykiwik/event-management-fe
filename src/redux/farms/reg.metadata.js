import { validationList } from "../../constants/validations.constants";

const halfSize = "calc(50% - 8px)";

export const registrationMetaData = [
  {
    type: "text",
    name: "firstName",
    value: "Abdul",
    placeholder: "Enter your name",
    label: "First Name",
    error: null,
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "text",
    name: "lastName",
    value: "Wahid Syed",
    placeholder: "Enter your name",
    label: "Last Name",
    error: null,
    width: halfSize,
  },
  {
    type: "email",
    name: "email",
    value: "abdul.s8@criskasecurity.com",
    placeholder: "Email",
    label: "Email",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "text",
    name: "username",
    value: "abdul8",
    placeholder: "Username",
    label: "Username",
    error: null,
    validations: [validationList.REQUIRED],
    width: halfSize,
  },
  {
    type: "number",
    name: "mobile",
    value: "9581122911",
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
    options: [
      { value: "admin", label: "Admin" },
      { value: "event_manager", label: "Event Manager" },
      { value: "vendor", label: "Vendor" },
      { value: "customer", label: "Customer" },
    ],
    value: "admin",
    label: "Role",
    error: null,
    validations: [validationList.REQUIRED],
  },
  {
    type: "setPassword",
    name: "password",
    value: "Wahid7151@",
    placeholder: "Password",
    label: "Password",
    error: null,
    validations: [validationList.REQUIRED],
  },
];

export const generateRegDataToEdit = (user) => {
  debugger;
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

  // const dat = Object.keys(user)
  //   .map((key) => {
  //     const input = registrationMetaData.find((fn) => fn.name === key);
  //     if (!input) return null;
  //     return {
  //       ...input,
  //       value: user[key],
  //     };
  //   })
  //   .filter((el) => el);
  // return dat;
};
