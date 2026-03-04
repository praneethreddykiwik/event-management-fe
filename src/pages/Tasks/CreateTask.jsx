import styled from "styled-components";
import {
  StyledHeading,
  StyledHeadingBig,
} from "../../components/Styled/Typography.styled";
import { mobile } from "../../theme/media-queries";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledHr } from "../../components/Styled/Common.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import TaskForm from "../../Forms/TaskForm";
import { updateAllTaskInputs } from "../../redux/farms/farms.slice";
import {
  generateAddEventInpMetadata,
  generateTaskDataToEdit,
} from "../../redux/farms/metadata/task.metadata";
import { tasksMetadata } from "../../constants/metadata/tasks.metadata";
import { Venue } from "../../components/Venue/Venue";
import { toast } from "react-toastify";
import {
  createTaskAction,
  editTaskAction,
} from "../../redux/tasks/tasks.actions";
import { authSelector } from "../../redux/auth/auth.slice";
import { useLocation } from "react-router-dom";
import { usersSelector } from "../../redux/users/users.slice";
import { Button } from "../../components/Buttons/Button";
import { fetchVendorsAction } from "../../redux/users/users.actions";

export const CreateTask = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { authUser } = useSelector(authSelector);
  const { vendors } = useSelector(usersSelector);

  const isEditMode = location.state?.mode === "edit";
  const isAddMode = location.state?.mode === "add";
  const taskData = location.state?.taskData;

  useEffect(() => {
    if (!vendors.length) {
      dispatch(fetchVendorsAction());
    }
    if (isEditMode) {
      dispatch(updateAllTaskInputs(generateTaskDataToEdit(vendors, taskData)));
    } else if (isAddMode) {
      dispatch(updateAllTaskInputs(generateAddEventInpMetadata(vendors)));
    }
  }, [vendors]); // need to refactor this dependency

  const onSubmit = (payloadParams) => {
    if (isEditMode) {
      editTask(payloadParams);
    } else if (isAddMode) {
      createTask(payloadParams);
    }
  };

  const editTask = (payloadParams) => {
    const payload = {
      ...payloadParams,
    };
    payload.reqPayload.tenantUid = authUser.tenantUid;
    payload.reqPayload.eventUid = location.state.eventUid;
    payload.reqPayload.taskUid = location.state.taskUid;

    dispatch(editTaskAction(payload));
  };

  const createTask = (payloadParams) => {
    const payload = {
      ...payloadParams,
    };
    payload.reqPayload.tenantUid = authUser.tenantUid;
    payload.reqPayload.eventUid = location.state.eventUid;

    dispatch(createTaskAction(payload));
  };

  const onClickSuggestion = (selectedTask) => {
    dispatch(
      updateAllTaskInputs(generateTaskDataToEdit(vendors, selectedTask)),
    );
    toast.success("Selected task details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    // navigate(paths.tasks);
    window.history.back();
  };

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>
          {isEditMode
            ? "Edit Task"
            : isAddMode
              ? "Add task to Event"
              : "Create Task"}
        </StyledHeading>
        <StyledHr />
        <StyledFlex>
          <TaskForm onCreateTask={onSubmit} />
          <StyledBox>
            <StyledHeadingBig left>
              Please choose from one of the below Task
            </StyledHeadingBig>
            <Button onClick={goBack}>Go Back</Button>
          </StyledBox>
        </StyledFlex>

        <StyledSuggestions>
          {tasksMetadata.map((el) => (
            <Venue
              venueDetails={el}
              btnText="Choose"
              onClick={onClickSuggestion}
            />
          ))}
        </StyledSuggestions>
      </DashboardContainer>
    </BlueBackHOC>
  );
};

const DashboardContainer = styled.div`
  padding: 0 16px 40px 16px;

  ${mobile`
    padding: 0 12px 24px 12px;
  `}
`;

const StyledBox = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;

  ${mobile`
    flex-basis: 100%;
  `}
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 160px;
  padding-left: 140px;

  ${mobile`
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
    padding-left: 0;
  `}
`;

const StyledSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 32px;

  .venue-ctn {
    flex: 0 0 calc((100% - 180px) / 3);
  }

  ${mobile`
    gap: 16px;

    .venue-ctn {
      flex: 0 0 100%;
    }
  `}
`;
