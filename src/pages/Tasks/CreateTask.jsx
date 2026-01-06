import styled from "styled-components";
import {
  StyledHeading,
  StyledHeadingBig,
} from "../../components/Styled/Typography.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StyledHr } from "../../components/Styled/Common.styled";
import { BlueBackHOC } from "../../HOC/BlueBackHOC";
import TaskForm from "../../Forms/TaskForm";
import { updateAllTaskInputs } from "../../redux/farms/farms.slice";
import {
  generateTaskDataToEdit,
  taskMetaData,
} from "../../redux/farms/metadata/task.metadata";
import { tasksMetadata } from "../../constants/metadata/tasks.metadata";
import { Venue } from "../../components/Venue/Venue";
import { toast } from "react-toastify";

export const CreateTask = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateAllTaskInputs(taskMetaData));
  }, []);

  const onCreateTask = () => {
    // dispatch()
  };

  const onClickSuggestion = (selectedTask) => {
    dispatch(updateAllTaskInputs(generateTaskDataToEdit(selectedTask)));
    toast.success("Selected task details are added in the input fields");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <BlueBackHOC>
      <DashboardContainer>
        <StyledHeading left>Create Task</StyledHeading>
        <StyledHr />
        <StyledFlex>
          <TaskForm onCreateTask={onCreateTask} />
          <StyledBox>
            <StyledHeadingBig left>
              Please choose from one of the below Tasks
            </StyledHeadingBig>
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
  padding: 0 20px 60px 20px;
`;

const StyledBox = styled.div`
  flex-basis: 50%;
  flex-shrink: 0;
`;

const StyledFlex = styled.div`
  display: flex;
  gap: 160px;
  padding-left: 140px;
`;

const StyledSuggestions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;

  .venue-ctn {
    flex: 0 0 calc((100% - 180px) / 3);
  }
`;
