export const generateLoginReq = ({ tenantId, inputs }) => {
  console.log(inputs);
  
  const reqPayload = inputs.reduce((acc, cur) => {
    return {
      ...acc,
      [cur.name]: cur.value,
    };   
  }, {});

  return {
    tenantId,
    username: reqPayload.username,
    password: reqPayload.password,
  };
};
