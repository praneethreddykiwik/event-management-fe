import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { generateTaskStatusOptions } from "../../redux/farms/metadata/task.metadata";
import { Inputs } from "../Inputs/Inputs";
import { Button } from "../Buttons/Button";
import { useState } from "react";
import { camelToWords } from "../../utils/utils";

export const EditTaskStatus = ({ task }) => {
  const { authUser } = useSelector(authSelector);
  const handleEditStatus = () => {};

  const [preview, setPreview] = useState(true);

  const onClickPreview = () => {
    setPreview(false);
  };

  return (
    <>
      <Inputs
        type="dropdown"
        name="taskStatus"
        value={task.taskStatus}
        placeholder="TaskStatus"
        options={generateTaskStatusOptions(authUser.role)}
        onClick={handleEditStatus}
        icon="edit"
        preview={preview}
        label={"Edit Status:"}
        previewComponent={
          <Button icon="edit" type="no-border" small onClick={onClickPreview}>
            {camelToWords(task.taskStatus)}
          </Button>
        }
      />
    </>
  );
};
