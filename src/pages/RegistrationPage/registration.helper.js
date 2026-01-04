export const registrationMetaData = [
  {
    type: "text",
    name: "username",
    placeholder: "Username",
    label: "Username",
    error: null,
  },
  {
    type: "email",
    name: "email",
    placeholder: "Email",
    label: "Email",
    error: null,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    label: "Password",
    error: null,
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Re-enter Password",
    label: "Confirm Password",
    error: null,
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
    label: "Role",
    error: null,
  },
];
