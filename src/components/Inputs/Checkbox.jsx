import { InputLayout } from "./InputLayout";
import { InputCheckbox } from "./Inputs.styled";
import styled from "styled-components";

export const Checkbox = ({
  name,
  value,
  onChange,
  disabled,
  list = [],
  error,
  validations,
}) => {
  return (
    <InputLayout error={error} validations={validations}>
      <Row>
        <InputCheckbox
          id={name}
          name={name}
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        />
        <span>{list[0]}</span>
      </Row>
    </InputLayout>
  );
};

const Row = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
