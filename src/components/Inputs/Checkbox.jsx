import { StyledParagraph } from "../Styled/Typography.styled";
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
  origin,
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
          onChange={(e) => {
            const k = {
              target: { name: e.target.name, value: e.target.checked },
            };
            onChange(k);
          }}
          disabled={disabled}
        />
        {origin === "inputForm" ? (
          <StyledInputLabel>{list[0]}</StyledInputLabel>
        ) : (
          <span>{list[0]}</span>
        )}
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

const StyledInputLabel = styled(StyledParagraph)`
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
