import { Continue } from "../enum/RegistrationPage.Enum";
import { Inputs } from "../components/Inputs/Inputs";
import styled from "styled-components";
import { Button } from "../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import useTenant from "../hooks/useTenant.hook";
import useNavigateWithQuery from "../hooks/useNavigateWithQuery";
import { validationList } from "../constants/validations.constants";
import {
  formsSelector,
  updateAllTaskInputs,
  updateTaskInputs,
} from "../redux/farms/farms.slice";

const TaskForm = ({ onCreateTask }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const tenantId = useTenant();
  const { createTaskInputs } = useSelector(formsSelector);

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
      reqPayload: { ...reqPayload, tenantId },
    };

    await onCreateTask(payload);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateTaskInputs({ name, value }));
  };

  return (
    <Form>
      <InputBox>
        {createTaskInputs.map((inp) => (
          <Inputs key={inp.name} {...inp} onChange={onChange} />
        ))}
      </InputBox>
      <Button whiteText onClick={onSubmit}>
        {Continue}
      </Button>
    </Form>
  );
};

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export default TaskForm;
