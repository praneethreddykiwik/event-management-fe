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
import { CONTINUE } from "../../../myEnum/RegistrationPage.Enum";
import { authSelector } from "../../../redux/auth/auth.slice";
import { modifyTimeToISO } from "../../../utils/utils";

import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { StyledHeadingBig } from "../../../components/Styled/Typography.styled";
import { mobile } from "../../../theme/media-queries";
import { generateNewEventsInputs } from "../../../redux/farms/metadata/event.metadata";
import { usersSelector } from "../../../redux/users/users.slice";

import { useLocation } from "react-router-dom";
import { paths } from "../../../constants/paths";
import { eventsSelector } from "../../../redux/events/events.slice";

const CreateEvent = ({ onCreateEvent }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const location = useLocation();

  const { createEventInputs } = useSelector(formsSelector);

  const { authUser } = useSelector(authSelector);
  const { eventManagers } = useSelector(usersSelector);

  const tenantUid = authUser?.tenantUid;
  const isEditMode = location?.state?.mode === "edit";

  const { eventDetails } = useSelector(eventsSelector);

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

    const scheduledAt = modifyTimeToISO(
      reqPayload.eventDate,
      reqPayload.eventTime,
    );
    reqPayload.tenantUid = tenantUid;
    reqPayload.scheduledAt = scheduledAt;

    if (isEditMode) {
      reqPayload.eventUid = eventDetails.uid;
    } else {
      reqPayload.status = "pending";
    }

    await onCreateEvent({ navigate, reqPayload });
  };

  const goBack = () => {
    window.history.back();
  };

  const clearHandler = () => {
    const eventMetaDataFull = generateNewEventsInputs(eventManagers);
    dispatch(updateAllEventInputs(eventMetaDataFull));
  };

  const onClickHelperBtn = () => {
    navigate(paths.venues, { replace: true });
  };

  const onClickHelperText = (data) => {
    window.open(data);
  };

  const clearHelperText = () => {
    // shahid
  };

  return (
    <StyledFlex>
      <InputBox>
        {createEventInputs.map((inp) => (
          <Inputs
            key={inp.name}
            {...inp}
            onChange={onChange}
            onClickHelperBtn={onClickHelperBtn}
            onClickHelperText={onClickHelperText}
            clearHelperText={clearHelperText}
          />
        ))}
        <StyledFlex2>
          <Button whiteText onClick={clearHandler} type="secondary">
            Clear
          </Button>
          <Button whiteText onClick={onSubmit}>
            {CONTINUE}
          </Button>
        </StyledFlex2>
      </InputBox>
      <StyledBox>
        <StyledHeadingBig left>
          Please choose from one of the below Events
        </StyledHeadingBig>
        <Button onClick={goBack}>Go Back</Button>
      </StyledBox>
    </StyledFlex>
  );
};

export const InputBox = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: row;
  flex-basis: 60%;

  ${mobile(`
    flex-direction: column;
    width:100%;
    flex-basis: 100%;
  `)}
`;

const StyledBox = styled.div`
  flex-basis: 40%;

  ${mobile`
    flex: 0 0 100%;
    flex-basis: 100%;
  `}
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 20px;

  ${mobile`
    flex-direction: column;
    gap: 30px;
    `}
`;
const StyledFlex2 = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  flex-grow: 1;

  ${mobile`
    flex-direction: column;
    gap: 30px;
    `}
`;

export default CreateEvent;
