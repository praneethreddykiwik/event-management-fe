import { CONTINUE } from "../myEnum/RegistrationPage.Enum";
import { Inputs } from "../components/Inputs/Inputs";
import styled from "styled-components";
import { Button } from "../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import useNavigateWithQuery from "../hooks/useNavigateWithQuery";
import { validationList } from "../constants/validations.constants";
import { formsSelector, updateAllTaskInputs } from "../redux/farms/farms.slice";
import { usersSelector } from "../redux/users/users.slice";
import { generateUserOptions } from "../redux/farms/metadata/task.metadata";
import { mobile } from "../theme/media-queries";
import { generateCreateTaskReq } from "../models/requests/task.req.model";

const TaskForm = ({ onCreateTask }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const { createTaskInputs } = useSelector(formsSelector);
  const { vendors, supervisors } = useSelector(usersSelector);

  const validateFields = () => {
    let isValid = true;

    const newInputs = createTaskInputs.map((el) => {
      const isReq = el.validations?.includes(validationList.REQUIRED);
      if (isReq && !el.value) {
        isValid = false;
        return { ...el, error: "This field is required" };
      }
      return { ...el, error: "" };
    });

    dispatch(updateAllTaskInputs(newInputs));
    return isValid;
  };

  const onSubmit = async () => {
    const isValid = validateFields();
    if (!isValid) return;

    const onCreatePayload = {
      navigate,
      reqPayload: generateCreateTaskReq(createTaskInputs),
    };

    await onCreateTask(onCreatePayload);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const state = createTaskInputs.map((el) => {
      const inp = { ...el };

      if (name === "assineeType" && inp.name === "assignedToUid") {
        const isSupervisorSelected = value === "Assign to Supervisor";
        inp.options = generateUserOptions(
          isSupervisorSelected ? supervisors : vendors,
        );
        inp.label = isSupervisorSelected
          ? "Assign to Supervisor"
          : "Assign to Vendor";
      }

      if (inp.name === name) {
        return { ...inp, value, error: null };
      }
      return inp;
    });

    dispatch(updateAllTaskInputs(state));
  };

  return (
    <Form>
      <InputBox>
        {createTaskInputs.map((inp) => (
          <Inputs key={inp.name} {...inp} onChange={onChange} />
        ))}
      </InputBox>
      <Button whiteText onClick={onSubmit}>
        {CONTINUE}
      </Button>
    </Form>
  );
};

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex-basis: 100%;
  padding-left: 40px;

  ${mobile`
    padding-left: 0px;
    `}
`;

export const InputBox = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default TaskForm;
