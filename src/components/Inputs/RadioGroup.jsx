import { InputLayout } from "./InputLayout";
import { InputRadio } from "./Inputs.styled";
import styled from "styled-components";

export const RadioGroup = ({
  name,
  placeholder,
  list = [],
  value,
  onChange,
  disabled,
  error,
}) => {
  return (
    <InputLayout label={placeholder} error={error}>
      <Group>
        {list.map((item) => {
          const id = `${name}-${item}`;
          const checked = value === item;

          return (
            <Row key={id}>
              <InputRadio
                id={id}
                name={name}
                type="radio"
                checked={checked}
                onChange={() =>
                  onChange({
                    target: { name, value: item },
                  })
                }
                disabled={disabled}
              />
              <span>{item}</span>
            </Row>
          );
        })}
      </Group>
    </InputLayout>
  );
};

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
