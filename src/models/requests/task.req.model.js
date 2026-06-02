export const generateDeleteTaskReq = ({ taskUid, tenantUid }) => {
  if (!taskUid || !tenantUid) {
    console.error("[generateDeleteTaskReq]", "Missing taskUid or tenantUid");
  }

  return {
    taskUid,
    tenantUid,
  };
};

export const generateCreateTaskReq = (createTaskInputs) => {
  if (!createTaskInputs) {
    console.error("[generateCreateTaskReq]", "Missing createTaskInputs");
  }

  return createTaskInputs.reduce((acu, cur) => {
    return {
      ...acu,
      [cur.name]: cur.value,
    };
  }, {});
};

export const generateCreateTaskReqPayload= ({
  createTaskInputs,
  tenantUid,
  eventUid,
}) => {
  const reqPayload = createTaskInputs.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.name]: cur.value,
    };
  }, {});

  return {
    ...reqPayload,
    tenantUid,
    eventUid,
  };
};

export const generateEditTaskReq = ({
  createTaskInputs,
  tenantUid,
  eventUid,
  taskUid,
}) => {
  const reqPayload = createTaskInputs.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.name]: cur.value,
    };
  }, {});

  return {
    ...reqPayload,
    tenantUid,
    eventUid,
    taskUid,
  };
};
