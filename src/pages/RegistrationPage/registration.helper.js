export const registrationMetaData = [
  {
    type: "text",
    name: "username",
    placeholder: "Username",
    label: "Username",
  },
  { type: "email", name: "email", placeholder: "Email", label: "Email" },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    label: "Password",
  },
  {
    type: "password",
    name: "confirmPassword",
    placeholder: "Re-enter Password",
    label: "Confirm Password",
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
  },
];
