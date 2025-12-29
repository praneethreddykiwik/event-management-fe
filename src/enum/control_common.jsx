import control_img2 from "../assets/ControlPage_img/control_img2.jpeg";
import control_img from "../assets/ControlPage_img/control_img.jpeg";

export const HALLS_DASHBOARD = {
  USER_NAME: "Henry, Arthur",
  CHAT_ICON: "chat",
  CALL_ICON: "call",
  CONTROLHEADER: "Control",
  CONTROL_ICON: "bar_chart",
  CONTROLHEADER2: "Available device and controls ",
  DOWN_ICON: "expand_more",
  
  HISTORY_HEADER: "Usage History",

  INFO_ICON: "info",

  CURRENT: "Current Consumption",
  VALUE1: "1kWh",

  TEMPERATURE: "Temperature",
  DEGREE: "65° F",

  SCAN:"Scan to activate your device and access control",

  WIFI_ICON : "wifi",

  TIME:"05:06 AM",
  THERMOVALUE: "Thermostat",

  CENT_VALUE: "60°",
  UNIT_VALUE: "Fahrenheit",

  LAST_HEAD: "Last Users",

  COTTAGE_ICON: "cottage",
  HALLS:"Halls",
  BACK_DOOR: "Back Door was Closed",
  D_TIME: "02:00 AM",

  SIDE_IMAGES: [control_img, control_img2],

  CHART_URL:
    "https://image-charts.com/chart?cht=bvs&chs=300x200&chd=t:12,30,60,40&chl=2020|2021|2022|2023&chco=4A90E2",

  DEVICES: [
    { title: "Door Lock", status: "Locked", active: true },
    { title: "Projector", status: "Inactive", active: false },
    { title: "Camera", status: "Active", active: true },
    { title: "AC", status: "Powersavingmode", active: false },
  ],

  MODES: ["Hot", "Eco", "Fan", "Cold"],

  HEADER_CROS: "Crostek Center",

  HENRY: "Henry, Arthur",
  BUILD_MANAGER : "Building manager",
  KEYBOARD : "keyboard_arrow_down",

  HALLS2: "Halls",
  DEVICE: "Device",
  ANALYTICS: "Analytics"
};
