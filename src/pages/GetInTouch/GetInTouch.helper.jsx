import { GET_IN_TOUCH_DATA } from "../../myEnum/ContactUsText";

export const cardData1 = [
  {
    title: GET_IN_TOUCH_DATA.SALES_INQUIRY,
    text: GET_IN_TOUCH_DATA.SALES_TEXT,
    email: GET_IN_TOUCH_DATA.SALES_EMAIL,
    button: true,
  },

  {
    title: GET_IN_TOUCH_DATA.GENERAL_INFO,
    text: GET_IN_TOUCH_DATA.GENERAL_INFO_TEXT,
    email: GET_IN_TOUCH_DATA.GENERAL_INFO_EMAIL,
    button: true,
  },

  {
    title: GET_IN_TOUCH_DATA.TECH_SUPPORT,
    text: GET_IN_TOUCH_DATA.TECH_SUPPORT_TEXT,
    email: GET_IN_TOUCH_DATA.TECH_SUPPORT_EMAIL,
    button: false,
  },

  {
    title: GET_IN_TOUCH_DATA.DEMO_TITLE,
    text: GET_IN_TOUCH_DATA.DEMO_TEXT,
    button: false,
  },
];

export const whyContactHelm = [
  {
    title: GET_IN_TOUCH_DATA.DEMO_HEADING,
    description: GET_IN_TOUCH_DATA.DEMO_DESCRIPTION,
  },

  {
    title: GET_IN_TOUCH_DATA.PRICING_HEADING,
    description: GET_IN_TOUCH_DATA.PRICING_DESCRIPTION,
  },

  {
    title: GET_IN_TOUCH_DATA.INTEGRATION_HEADING,
    description: GET_IN_TOUCH_DATA.INTEGRATION_DESCRIPTION,
  },

  {
    title: GET_IN_TOUCH_DATA.SUCCESS_HEADING,
    description: GET_IN_TOUCH_DATA.SUCCESS_DESCRIPTION,
  },
];
