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
  updateAllRegInputs,
  updateRegInputs,
} from "../redux/farms/farms.slice";
import { registrationMetaData } from "../redux/farms/metadata/reg.metadata";

const RegistrationForm = ({ onCreateUser }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const tenantId = useTenant();
  const { createUserInputs } = useSelector(formsSelector);

  const validateFields = () => {
    let isValid = true;

    const newInputs = createUserInputs.map((el) => {
      const isReq = el.validations?.includes(validationList.REQUIRED);
      if (isReq && !el.value) {
        isValid = false;
        return { ...el, error: "This field is required" };
      }
      return { ...el, error: "" };
    });

    dispatch(updateAllRegInputs(newInputs));
    return isValid;
  };

  const onSubmit = async () => {
  const isValid = validateFields();
  if (!isValid) return;

  const reqPayload = createUserInputs.reduce((acu, cur) => {
    return { ...acu, [cur.name]: cur.value };
  }, {});

  const payload = {
    navigate,
    reqPayload: { ...reqPayload, tenantId },
  };

  try {
    await onCreateUser(payload);
    dispatch(updateAllRegInputs(registrationMetaData));
  } catch (error) {
    console.error(error);
  }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateRegInputs({ name, value }));
  };

  return (
    <Form>
      <InputBox>
        {createUserInputs.map((inp) => (
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

export default RegistrationForm;
