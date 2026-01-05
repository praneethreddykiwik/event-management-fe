import moment from "moment";

export const formatDateTime = (input) => {
  return moment(input).format("DD MMM YYYY hh:mmA");
};
