import { validationList } from "../constants/validations.constants";

const EventForm = ({ onCreateEvent }) => {
  const validateFields = () => {
    let isValid = true;

    const newInputs = createEventInputs.map((el) => {
      const isReq = el.validations?.includes(validationList.REQUIRED);
    });
  };
};

export default EventForm;
