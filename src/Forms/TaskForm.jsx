import { CONTINUE } from "../myEnum/RegistrationPage.Enum";
import { Inputs } from "../components/Inputs/Inputs";
import styled from "styled-components";
import { Button } from "../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import useNavigateWithQuery from "../hooks/useNavigateWithQuery";
import { validationList } from "../constants/validations.constants";
import { formsSelector, updateAllTaskInputs } from "../redux/farms/farms.slice";
import { usersSelector } from "../redux/users/users.slice";
import { generateOptions } from "../redux/farms/metadata/task.metadata";

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

    const reqPayload = createTaskInputs.reduce((acu, cur) => {
      return { ...acu, [cur.name]: cur.value };
    }, {});

    const payload = {
      navigate,
      reqPayload,
    };

    await onCreateTask(payload);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const state = createTaskInputs.map((inp) => {
      const el = { ...inp };
      if (name === "assineeType" && el.name === "assignedToUid") {
        el.options = generateOptions(value ? supervisors : vendors);
      }
      if (el.name === name) {
        return { ...el, value, error: null };
      }
      return el;
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
`;

export const InputBox = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default TaskForm;
