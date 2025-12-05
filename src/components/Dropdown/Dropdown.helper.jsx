export const defaultMenuItems = [
  {
    label: "Profile",
    highlight: true,
    icon: "account_circle",
    onClick: () => alert("Profile clicked"),
  },
  {
    label: "Settings",
    icon: "settings",
    onClick: () => alert("Settings clicked"),
  },
  {
    label : "Bookmark",
    icon : "bookmark",
    onClick : () => alert("Bookmark clicked"),
  },
  {
    label : "Help",
    icon : "help",
    onClick : () => alert("Help clicked"),
  },
  { type: "divider" },
  {
    label: "Logout",
    icon: "logout",
    onClick: () => alert("Logging out..."),
  },
];
