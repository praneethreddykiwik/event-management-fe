import { paths } from "../constants/paths";

export const userProfileMeta = [
  {
    label: "Profile",
    highlight: true,
    icon: "account_circle",
    navigate: paths.accountSettings,
  },
  {
    label: "Settings",
    icon: "settings",
    navigate: "/accountSetting",
  },
  {
    label: "Bookmark",
    icon: "bookmark",
  },
  {
    label: "About Us",
    icon: "info",
    navigate: paths.aboutUs,
  },
  {
    label: "Why HELM",
    icon: "star",
    navigate: paths.whyChoose,
  },
  {
    label: "Our Services",
    icon: "handyman",
    navigate: paths.ourServices,
  },
  {
    label: "FAQ",
    icon: "quiz",
    navigate: paths.faq,
  },
  {
    label: "Get In Touch",
    icon: "help",
    navigate: paths.getInTouch,
  },
  { type: "divider" },
  {
    label: "Logout",
    icon: "logout",
  },
];
