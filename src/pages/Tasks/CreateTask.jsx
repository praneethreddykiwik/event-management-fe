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
import {
  formsSelector,
  updateAllTaskInputs,
} from "../../redux/farms/farms.slice";
import {
  generateAddEventInpMetadata,
  generateTaskDataToEdit,
  generateTaskDataToEdit2,
} from "../../redux/farms/metadata/task.metadata";
import { VenueSuggestion } from "../../components/Venue/VenueSuggestion";
import { toast } from "react-toastify";
import {
  createTaskAction,
  editTaskAction,
} from "../../redux/tasks/tasks.actions";
import { authSelector } from "../../redux/auth/auth.slice";
import { useLocation } from "react-router-dom";
import { usersSelector } from "../../redux/users/users.slice";
import { Button } from "../../components/Buttons/Button";
import { fetchVendorsAndSupervisors } from "../../redux/users/users.actions";
import { tasksMetadata } from "../../constants/tasks.constants";

export const CreateTask = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { authUser } = useSelector(authSelector);
  const { vendors, supervisors } = useSelector(usersSelector);
  const { role } = useSelector(authSelector);
  const { createTaskInputs } = useSelector(formsSelector);

  const isEditMode = location.state?.mode === "edit";
  const taskData = location.state?.taskData;

  useEffect(() => {
    const callback = (data) => {
      const { supervisors, vendors } = data;

      const users = role === "supervisors" ? supervisors : vendors;
      if (isEditMode) {
        dispatch(updateAllTaskInputs(generateTaskDataToEdit(users, taskData)));
      } else {
        dispatch(updateAllTaskInputs(generateAddEventInpMetadata(users)));
      }
    };
    if (!vendors.length || !supervisors.length) {
      dispatch(fetchVendorsAndSupervisors({ callback }));
    }
  }, []);

  const onSubmit = (payloadParams) => {
    if (isEditMode) {
      editTask(payloadParams);
    } else {
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
      updateAllTaskInputs(
        generateTaskDataToEdit2(vendors, selectedTask, createTaskInputs),
      ),
    );
    toast.success("Selected task details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>
          {isEditMode ? "Edit Task" : "Create Task"}
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
            <VenueSuggestion
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
  // flex-basis: 50%;
  // flex-shrink: 0;

  ${mobile`
    flex-basis: 100%;
  `}
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 100px;
  // padding-left: 140px;

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
