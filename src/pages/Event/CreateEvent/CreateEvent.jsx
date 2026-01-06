import { useDispatch, useSelector } from "react-redux";
import { validationList } from "../../../constants/validations.constants";
import {
  formsSelector,
  updateEventInputs,
  updateAllEventInputs,
} from "../../../redux/farms/farms.slice";
import styled from "styled-components";
import { Inputs } from "../../../components/Inputs/Inputs";
import { Button } from "../../../components/Buttons/Button";
import { Continue } from "../../../enum/RegistrationPage.Enum";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../../../redux/auth/auth.slice";
import {
  extractHoursAndMinutes,
  formatScheduleDate,
} from "../../../utils/utils";

const CreateEvent = ({ onCreateEvent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createEventInputs } = useSelector(formsSelector);
  const { authUser } = useSelector(authSelector);

  const validateFields = () => {
    let isValid = true;

    const newInputs = createEventInputs.map((el) => {
      const isReq = el.validations?.includes(validationList.REQUIRED);
      if (isReq && !el.value) {
        isValid = false;
        return { ...el, error: "This field is required" };
      }
      return { ...el, error: "" };
    });

    dispatch(updateAllEventInputs(newInputs));
    return isValid;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateEventInputs({ name, value }));
  };

  const onSubmit = async () => {
    const isValid = validateFields();

    if (!isValid) return;

    const reqPayload = createEventInputs.reduce((acu, cur) => {
      return { ...acu, [cur.name]: cur.value };
    }, {});

    const time = reqPayload.eventTime;
    const date = reqPayload.eventDate;

    const { hour, minute } = extractHoursAndMinutes(time);
    const formatedTime = formatScheduleDate(date, hour, minute);

    const tenantUid = authUser.tenantUid;
    const scheduledAt = formatedTime;

    const payload = {
      navigate,
      reqPayload: { ...reqPayload, tenantUid, scheduledAt, status: "pending" },
    };

    console.log("payload", payload);

    await onCreateEvent(payload);
  };

  return (
    <Form>
      <InputBox>
        {createEventInputs.map((inp) => (
          <Inputs key={inp.name} {...inp} onChange={onChange} />
        ))}
      </InputBox>

      <Button whiteText onClick={onSubmit}>
        {Continue}
      </Button>
    </Form>
  );
};

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default CreateEvent;
