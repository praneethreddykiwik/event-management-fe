import control_img2 from "../assets/ControlPage_img/control_img2.jpeg";
import control_img from "../assets/ControlPage_img/control_img.jpeg";
export const HALLS_DASHBOARD = {
  CONTROL: "Control",

 

  USER_AVATAR: "https://i.pravatar.cc/70",
  USER_NAME: "Henry, Arthur",

  SIDE_IMAGES: [
    control_img,
    control_img2
  ],

  USAGE_HISTORY: "Usage History",
  CHART_URL:
    "https://quickchart.io/chart?c={type:'bar',data:{labels:['2020','2021','2022','2023'],datasets:[{data:[12,30,60,40]}]}}",

  CURRENT_CONSUMPTION: "Current Consumption",
  CURRENT_VALUE: "1kWh",

  TEMPERATURE: "Temperature",
  TEMP_VALUE: "65° F",

  SCAN_TEXT: "Scan to activate your device and access control",
  SCAN_QR:
    "https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=device",

  DEVICES: [
    { title: "Door Lock", status: "Locked", active: true },
    { title: "Projector", status: "Inactive", active: false },
    { title: "Camera", status: "Active", active: true },
    { title: "AC", status: "Power saving mode", active: false },
  ],

  TIME: "05:06 AM",
  THERMOSTAT: "Thermostat",
  MODES: ["Hot", "Eco", "Fan", "Cold"],

  LAST_USERS: "Last Users",
  LAST_USER_IMG:
    "https://images.unsplash.com/photo-1558005530-a4ddc2f7f4f5?auto=format",

  ACTIVITY_USER: "Halls",
  ACTIVITY_TEXT: "Back Door was Closed",
  ACTIVITY_TIME: "02:00 AM",

  TABS: [
    { label: "Crosteck Center", active: false },
    { label: "Halls", active: true },
    { label: "Device", active: false },
    { label: "Analytics", active: false },
  ],
};
