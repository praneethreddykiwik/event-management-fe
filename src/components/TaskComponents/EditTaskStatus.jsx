import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { generateTaskStatusOptions } from "../../redux/farms/metadata/task.metadata";
import { Inputs } from "../Inputs/Inputs";
import { Button } from "../Buttons/Button";
import styled from "styled-components";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { updateTaskStatusAction } from "../../redux/tasks/tasks.actions";
import { toast } from "react-toastify";

export const EditTaskStatus = ({ task }) => {
  const dispatch = useDispatch();

  const { authUser } = useSelector(authSelector);

  const handleEditStatus = (e) => {
    if (task.taskStatus === "deleted") {
      toast.error("This task is deleted. So you can't edit this task.");
      return;
    }
    const payload = {
      reqPayload: {
        tenantUid: authUser?.tenantUid,
        taskUid: task.taskUid,
        status: e.target.value,
      },
      // callback,
    };
    dispatch(updateTaskStatusAction(payload));
  };

  return (
    <Inputs
      type="dropdown"
      name="taskStatus"
      value={task?.taskStatus}
      disabled={task.taskStatus === "deleted"}
      placeholder="TaskStatus"
      options={generateTaskStatusOptions(authUser.role)}
      onChange={handleEditStatus}
      icon="edit"
      label={"Edit Status"}
    />
  );
};

const LocBtn = styled(Button)`
  & .input-text {
    font-size: 12px;
  }
`;
