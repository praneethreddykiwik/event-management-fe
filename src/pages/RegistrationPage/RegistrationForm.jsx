import { Continue } from "../../Enum/RegistrationPage.Enum";
import { Inputs } from "../../components/Inputs/Inputs";
import styled from "styled-components";
import { Button } from "../../components/Buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import useTenant from "../../hooks/useTenant.hook";
import useNavigateWithQuery from "../../hooks/useNavigateWithQuery";
import { validationList } from "../../constants/validations.constants";
import {
  updateAllRegInputs,
  updateRegInputs,
  usersSelector,
} from "../../redux/users/users.slice";

const RegistrationForm = ({ onCreateUser }) => {
  const navigate = useNavigateWithQuery();
  const dispatch = useDispatch();
  const tenantId = useTenant();
  const { createUserInputs } = useSelector(usersSelector);

  const validateFields = () => {
    let isValid = true;

    const newInputs = createUserInputs.map((el) => {
      const isReq = el.validations?.includes(validationList.REQUIRED);
      if (isReq && !el.value) {
        isValid = false;
        return { ...el, error: "Invalid input!" };
      }
      return el;
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
    onCreateUser(payload);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateRegInputs({ name, value }));
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <InputBox>
        {createUserInputs.map((inp) => {
          return <Inputs {...inp} onChange={onChange} />;
        })}
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
