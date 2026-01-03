import { BADGE_TYPES } from "../../../Enum/common";

const AdminPopupCard = () => {
  const adminPopupData = [
    {
      name: "John",
      mail: "john@gmail.com",
      mobile: "9876545678",
      assignedEvent: 3,
      status: `${BADGE_TYPES.ACTIVE}`,
    },
    {
      name: "Sarah",
      mail: "sarah@gmail.com",
      mobile: "1234567890",
      assignedEvent: 1,
      status: `${BADGE_TYPES.INACTIVE}`,
    },
    {
      name: "Sarah",
      mail: "sarah@gmail.com",
      mobile: "1234567890",
      assignedEvent: 1,
      status: `${BADGE_TYPES.ACTIVE}`,
    },
    {
      name: "Sarah",
      mail: "sarah@gmail.com",
      mobile: "1234567890",
      assignedEvent: 1,
      status: BADGE_TYPES.INACTIVE,
    },
    {
      name: "Sarah",
      mail: "sarah@gmail.com",
      mobile: "1234567890",
      assignedEvent: 1,
      status: BADGE_TYPES.INACTIVE,
    },
    {
      name: "Sarah",
      mail: "sarah@gmail.com",
      mobile: "1234567890",
      assignedEvent: 1,
      status: BADGE_TYPES.INACTIVE,
    },
  ];

  return adminPopupData;
};

export default AdminPopupCard;
