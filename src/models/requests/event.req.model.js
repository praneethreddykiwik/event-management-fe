const generateAssignEventReq = ({ eventUid, assignedToUid, userName }) => {
  if (!eventUid || !assignedToUid) {
    console.error(
      "[generateAssignEventReq]",
      "Missing eventUid or assignedToUid",
    );
  }

  return {
    eventUid,
    assignedToUid,
    userName,
  };
};

export { generateAssignEventReq };
