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
import { Continue } from "../../../myEnum/RegistrationPage.Enum";
import { authSelector } from "../../../redux/auth/auth.slice";
import { dateObj, returnScheduledAt } from "../../../utils/utils";

import useNavigateWithQuery from "../../../hooks/useNavigateWithQuery";
import { StyledHeadingBig } from "../../../components/Styled/Typography.styled";
import { mobile } from "../../../theme/media-queries";
import { eventMetaData } from "../../../redux/farms/metadata/event.metadata";
import { usersSelector } from "../../../redux/users/users.slice";

import { useLocation } from "react-router-dom";
import { updateCurrentEvent } from "../../../redux/events/events.slice";

const CreateEvent = ({ onCreateEvent }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const location = useLocation();
  const { createEventInputs } = useSelector(formsSelector);
  // const { eventManagers } = useSelector(usersSelector);
  const { authUser } = useSelector(authSelector);
  const { eventManagers } = useSelector(usersSelector);

  const { tenantUid } = authUser;

  const isEditMode = location?.state?.mode === "edit";
  // const isAddMode = location?.state?.mode === "add";
  const eventData = location?.state?.eventData || {};
  dispatch(updateCurrentEvent(eventData));

  // const isEditMode = location?.state?.mode === "edit";

  const validateFields = () => {
    let isValid = true;
    //debugger;
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

  // onChange to track the form inputs and update the store with the latest values
  const onChange = (e) => {
    const { name, value } = e.target;
    // i can either track here and add the fields updated to the req payload for update event.
    console.log("onChange", name, value);
    dispatch(updateEventInputs({ name, value }));
  };

  const onSubmit = async () => {
    const isValid = validateFields();
    //debugger;

    if (!isValid) return;

    if (isEditMode) {
      // Handle Edit logic here (call update API, etc.) and create the payload accordingly.
      console.log(
        "creating req payload for Edit with the values: ",
        createEventInputs,
      );

      // required req payload for edit event.
      /**
       * 
       * Required: 
       * eventUid
       * tenantUid
       * updatedByUid
       * 
       * Allowed Fields to udpate:
       * 
       * const updatableFields = [
          "eventName",
          "eventType",
          "scheduledAt",
          "assignedToUid",
          "status",
          "location",
          "description",
        ];
       * 
       */

      const { uid: eventUid } = eventData;
      const { uid: updatedByUid } = authUser;

      // Add the fields which are editable in edit mode, rest all will not be sent to backend without change.
      const editableFields = [
        "eventName",
        "eventType",
        "eventDate",
        "eventTime",
        "venue",
        "expectedAttendees",
        "assignedEventManager",
        "comments",
      ];

      // need to build scheduledAt from eventDate and eventTime if these fields are being updated, else continue.

      // But i need to check which fields are being updated by the user in the edit form and
      // only send those fields in the req payload to update API,
      // otherwise some fields which are not being updated will be overridden with blank values if i send them in the req payload with blank values.
      // So need to create a logic to identify which fields are being updated and only send those fields in the req payload for update event API.

      // now i have the updated values in createEventInputs, but i need to compare these values with the initial values of the event to identify which fields are being updated by the user.
      const updatedFields = createEventInputs.filter((input) => {
        const { value, initialValue } = input;
        return value !== initialValue;
      });

      const reqPayload = updatedFields.reduce((acu, cur) => {
        if (editableFields.includes(cur.name)) {
          return { ...acu, [cur.name]: cur.value };
        }
        return acu;
      }, {});

      if (reqPayload.eventDate || reqPayload.eventTime) {
        const { date: existingDate, time: existingTime } = dateObj(
          eventData.scheduledAt,
        );
        const date = reqPayload.eventDate || existingDate;
        const time = reqPayload.eventTime || existingTime.split(" ")[0];
        //debugger;

        const scheduledAt = returnScheduledAt(date, time);
        reqPayload.scheduledAt = scheduledAt;

        // Also removing eventDate and eventTime from reqPayload
        // as these fields are not required in the update API,
        // instead we are sending scheduledAt.
        delete reqPayload.eventDate;
        delete reqPayload.eventTime;
      }

      const payload = {
        navigate,
        isEditMode,
        eventUid,
        tenantUid,
        updatedByUid,
        ...reqPayload,
      };

      await onCreateEvent(payload);

      //debugger;
    } else {
      // Hanfle Create logic here (call create API, etc.) and create the payload accordingly.
      const reqPayload = createEventInputs.reduce((acu, cur) => {
        return { ...acu, [cur.name]: cur.value };
      }, {});

      const { eventTime: time, eventDate: date } = reqPayload;

      // Replacing this with a util function in utils.js to return formatted scheduledAt directly to avoid code repetition
      // as this logic is required in multiple places (Create Event, Edit Event, Create Task, Edit Task)
      /**
       *
       * const { hour, minute } = extractHoursAndMinutes(time);
       * const formatedTime = formatScheduleDate(date, hour, minute);
       *
       */

      const scheduledAt = returnScheduledAt(date, time);

      const payload = {
        navigate,
        reqPayload: {
          ...reqPayload,
          assignedToUid: reqPayload.assignedEventManager,
          tenantUid: tenantUid,
          scheduledAt,
          status: "pending",
          isEditMode,
        },
      };

      await onCreateEvent(payload);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  const clearHandler = () => {
    const eventMetaDataFull = eventMetaData(eventManagers);
    dispatch(updateAllEventInputs(eventMetaDataFull));
  };

  return (
    <Form>
      <StyledFlex>
        <InputBox>
          {createEventInputs.map((inp) => (
            <Inputs key={inp.name} {...inp} onChange={onChange} />
          ))}
          <StyledFlex2>
            <Button whiteText onClick={clearHandler} type="secondary">
              Clear
            </Button>
            <Button whiteText onClick={onSubmit}>
              {Continue}
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
    </Form>
  );
};

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  gap: 16px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: row;

  ${mobile(`
    flex-direction: column;
    width:100%;
  `)}
`;

const StyledBox = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;

  ${mobile`
    flex: 0 0 100%;
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
