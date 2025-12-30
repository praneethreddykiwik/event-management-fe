/** @format */

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
  "gray-disabled": "#B9B9B9",
  // "border-color-primary": "#41CF7A",
  warning: "#E53935",
  "warning-light": "#EE9A98",
  white: "#fff",
  black: "#000",
  "light-blue": "#F1FAFF", // for background
  "active-color": "#FF4A4A",
  "inactive-color": "#666666",
  "text-gray-color": " #86868d;",
};

const badgeColors = {
  // Badge colors:
  "badge-completed-primary": "#0cc657",
  "badge-completed-transparent": "rgba(38, 200, 103, 0.231)",
  "badge-inprogress-primary": "#edab27",
  "badge-inprogress-transparent": "rgb(238, 217, 51, 0.3)",
  "badge-pending-primary": "#525151",
  "badge-pending-transparent": "rgba(102, 102, 102, 0.314)",
  "badge-accepted-primary": `${colors.white}`,
  "badge-accepted-transparent": `${colors.primary}`,
};

const shadows = {
  "level-1": "O, 1px, 3px, rgba(0,0,0,0,1)",
  "level-2": "O, 4px, 6px, rgba(0,0,0,0,0.8)",
  "level-3": "O, 8px, 16px, rgba(0,0,0,0,.1)",
};

const borders = {
  "border-disabled": `1px solid ${colors["gray-disabled"]}`,
  "border-warning-light": `1px solid ${colors["warning-light"]}`,
  "border-warning": `1px solid ${colors.warning}`,
  "border-default": `1px solid ${colors.black}`,
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
    color: colors["gray-disabled"],
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
  },
  dark: {
    appBackgroundColor: "#000",
    color: "#fff",
    spacings,
    typography,
  },
};
