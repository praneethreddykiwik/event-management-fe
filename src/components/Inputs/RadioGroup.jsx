import { mobile } from "../../theme/media-queries";
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
  validations,
}) => {
  return (
    <InputLayout label={placeholder} error={error} validations={validations}>
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
              <MainLabel>{item}</MainLabel>
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

  padding: 10px 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  border-radius: 20px;
  padding: 10px 20px;

  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;

  ${mobile`
    flex-direction: column;
    gap: 10px;
    `}
`;

const Row = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const MainLabel = styled.span`
  font-size: 14px;
`;
