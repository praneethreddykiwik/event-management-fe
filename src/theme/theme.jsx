const spacings = {
  "spacing-1": "4px", // Micro gaps
  "spacing-2": "8px", // Between small elements
  "spacing-3": "16px", // Standard block spacing
  "spacing-4": "24px", // Section spacing, padding
  "spacing-5": "32px", // Major breaks, modal spacing
  "spacing-6": "40px", // Full-page padding
};

const typography = {
  // Hero titles, Splash screens
  "display-h1": {
    "font-weight": "700", // bold
    "font-size": "32px",
    "line-height": "40px",
    "letter-spacing": "-0.5%",
  },

  // Section headers, modals
  "heading-h2": {
    "font-weight": "600", // semibold
    "font-size": "24px",
    "line-height": "32px",
    "letter-spacing": "-0.25%",
  },

  // Subtitles, OnBoarding screens
  "heading-h3": {
    "font-weight": "500", // medium
    "font-size": "20px",
    "line-height": "28px",
    "letter-spacing": "-0.15%",
  },

  // General reading text, chat
  "body-regular": {
    "font-weight": "400", // regular
    "font-size": "16px",
    "line-height": "24px",
    "letter-spacing": "0%",
  },

  // Notes, timestamps, meta text
  "body-small": {
    "font-weight": "400",
    "font-size": "14px",
    "line-height": "20px",
    "letter-spacing": "0%",
  },

  // Input Labels, tooltips
  caption: {
    "font-weight": "500",
    "font-size": "12px",
    "line-height": "16px",
    "letter-spacing": "0.5%",
  },

  // Input Labels, tooltips
  "button-text": {
    "font-weight": "600",
    "font-size": "14px", // 12 - 16px variable sizes
    "line-height": "16px",
    "letter-spacing": "0.5%",
  },
};

const colors = {
  primary: "#26C867",
  primaryLight: "#f3fff4",
  white: "#fff",
  black: "#000",

  borderGray: "#e0e0e0",
  grayDisabled: "#B9B9B9",

  red: "#d63a2f",
  warning: "#E53935",

  "warning-light": "#EE9A98",
  "light-blue": "#F1FAFF", // for background
  "active-color": "#FF4A4A",
  "inactive-color": "#666666",
  "text-gray-color": " #86868d;",
};

const fontWeights = {
  default: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const badgeColors = {
  // Badge colors:
  "badge-assigned-primary": "#0cc657",
  "badge-assigned-transparent": "rgba(38, 200, 103, 0.231)",
  "badge-completed-primary": "#0cc657",
  "badge-completed-transparent": "rgba(38, 200, 103, 0.231)",
  "badge-active-primary": "rgba(38, 200, 103, 0.231)",
  "badge-active-transparent": "rgba(38, 200, 103, 0.231)",
  "badge-inactive-primary": "#d83232",
  "badge-inactive-transparent": "rgba(242, 34, 34, 0.294)",
  "badge-inprogress-primary": "#edab27",
  "badge-inprogress-transparent": "rgb(238, 217, 51, 0.3)",
  "badge-notstarted-primary": "#edab27",
  "badge-notstarted-transparent": "rgb(238, 217, 51, 0.3)",
  "badge-cancelled-primary": "#d83232",
  "badge-cancelled-transparent": "rgba(242, 34, 34, 0.294)",
  "badge-declined-primary": "#d83232",
  "badge-declined-transparent": "rgba(242, 34, 34, 0.294)",
  "badge-deleted-primary": "#d83232",
  "badge-deleted-transparent": "rgba(242, 34, 34, 0.294)",
  "badge-pending-primary": "#edab27",
  "badge-pending-transparent": "rgb(238, 217, 51, 0.3)",
  "badge-accepted-primary": `${colors.white}`,
  "badge-accepted-transparent": `${colors.primary}`,
};

const shadows = {
  "level-1": "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
  "level-2":
    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
  "level-3":
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
};

const borders = {
  "border-disabled": `1px solid ${colors.grayDisabled}`,
  "border-warning-light": `1px solid ${colors["warning-light"]}`,
  "border-warning": `1px solid ${colors.warning}`,
  "border-default": `1px solid ${colors.black}`,
  "border-gray": `1px solid ${colors.grayDisabled}`,
};

const inputs = {
  "base-input": {
    padding: "23px 16px",
    "line-height": "20",
    "letter-spacing": "1%",
    "font-size": "16px",
    "font-weight": "600",
    width: "546px",
    height: "48px",
  },
  "input-disabled": {
    color: colors.grayDisabled,
    border: borders["border-disabled"],
  },
  "input-warning-light": {
    color: colors["warning-light"],
    border: borders["border-warning-light"],
  },
  "input-warning": {
    color: colors.warning,
    border: borders["border-warning"],
  },
  "input-default": {
    color: colors.black,
    border: borders["border-default"],
  },
};

export const theme = {
  light: {
    appBackgroundColor: "#fff",
    color: "#000",

    spacings,
    typography,
    colors,
    shadows,
    borders,
    badgeColors,
    inputs,
    fontWeights,
  },
  dark: {
    appBackgroundColor: "#000",
    color: "#fff",
    spacings,
    typography,
    fontWeights,
  },
};
