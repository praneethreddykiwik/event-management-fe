export const generateCreateUserReq = (createUserInputs, tenantId) => {
  if (!createUserInputs || !tenantId) {
    console.error(
      "[generateCreateUserReq]",
      "Missing createUserInputs or tenantId",
    );
  }

  const reqPayload = createUserInputs.reduce((acu, cur) => {
    return {
      ...acu,
      [cur.name]: cur.value.trim(),
    };
  }, {});

  return {
    ...reqPayload,
    tenantId,
  };
};

export const generateFetchManagersReq = (tenantId, role) => {
  if (!tenantId || !role) {
    console.error("[generateFetchManagersReq]", "Missing tenantId or role");
  }

  return {
    query: `?tenantId=${tenantId}&role=${role}`,
  };
};
