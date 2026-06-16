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
  generateAddTaskInputs,
  generateEditTaskInputs,
} from "../../redux/farms/metadata/task.metadata";
import { VenueSuggestion } from "../../components/Venue/VenueSuggestion";
import { toast } from "react-toastify";
import {
  createTaskAction,
  editTaskAction,
} from "../../redux/tasks/tasks.actions";
import { authSelector } from "../../redux/auth/auth.slice";
import { useLocation } from "react-router-dom";
import { Button } from "../../components/Buttons/Button";
import { fetchVendorsSupsQA } from "../../redux/users/users.actions";
import { tasksMetadata } from "../../constants/tasks.constants";
import { PageHeader } from "../../components/Headers/PageHeader";
import {
  generateCreateTaskReqPayload,
  generateEditTaskReq,
} from "../../models/requests/task.req.model";

export const CreateAndEditTask = () => {
  const dispatch = useDispatch();
  const   location = useLocation();

  const { authUser } = useSelector(authSelector);
  const { createTaskInputs } = useSelector(formsSelector);

  const isEditMode = location.state?.mode === "edit";
  const taskData = location.state?.taskData;

  useEffect(() => {
    const callback = (data) => {
      const { supervisors, vendors, qa } = data;

      const vendorsOrSuprvs =
        authUser?.role === "supervisors" ? supervisors : vendors;

      if (isEditMode) {
        const dat = generateEditTaskInputs(
          vendorsOrSuprvs,
          qa,
          taskData,
          authUser?.role,
        );
        dispatch(updateAllTaskInputs(dat));
      } else {
        const dat = generateAddTaskInputs(vendorsOrSuprvs, qa, authUser?.role);
        dispatch(updateAllTaskInputs(dat));
      }
    };

    // Always call this to reset form
    dispatch(fetchVendorsSupsQA({ callback }));
  }, []);

  const onSubmit = (payloadParams) => {
    if (isEditMode) {
      editTaskHandler(payloadParams);
    } else {
      createTaskHandler(payloadParams);
    }
  };

  const editTaskHandler = ({ navigate }) => {
    const edittaskhandlerpayload = {
      navigate,
      reqPayload: generateEditTaskReq({
        createTaskInputs,
        tenantUid: authUser?.tenantUid,
        eventUid: location.state?.eventUid,
        taskUid: location.state?.taskUid,
      }),
    };
    dispatch(editTaskAction(edittaskhandlerpayload));
  };

  const createTaskHandler = ({ navigate }) => {
    const createtaskpayload = {
      navigate,
      reqPayload: generateCreateTaskReqPayload({
        createTaskInputs,
        tenantUid: authUser?.tenantUid,
        eventUid: location.state?.eventUid,
      }),
    };
    dispatch(createTaskAction(createtaskpayload));
  };

  const onClickSuggestion = (selectedTask) => {
    // populate Data from task suggestion
    const k = createTaskInputs.map((inp) => {
      return { ...inp, value: selectedTask[inp.name] || inp.value };
    });
    dispatch(updateAllTaskInputs(k));
    toast.success("Selected task details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <BlueBackHOC>
      <PageHeader left>
        <StyledHeading>
          {isEditMode ? "Edit Task" : "Create Task"}
        </StyledHeading>
      </PageHeader>

      {/* Page Content */}
      <DashboardContainer>
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
              key={el.title}
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
    // flex: 0 0 calc((100% - 180px) / 3);
    flex-basis: calc(33.33% - 20px);
  }

  ${mobile`
    gap: 16px;

    .venue-ctn {
      flex: 0 0 100%;
    }
  `}
`;
