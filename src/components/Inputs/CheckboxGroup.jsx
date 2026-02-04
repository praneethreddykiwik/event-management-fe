/** @format */
import { InputLayout } from './InputLayout';
import { InputCheckbox } from './Inputs.styled';
import styled from 'styled-components';

export const CheckboxGroup = ({
  name,
  placeholder,
  list = [],
  value = [],
  onChange,
  disabled,
  error,
}) => {
  const makeId = (item) =>
    `${name}-${String(item).toLowerCase().replace(/\s+/g, '-')}`;

  const toggle = (item, checked) => {
    let next = Array.isArray(value) ? [...value] : [];

    if (checked) next.push(item);
    else next = next.filter((i) => i !== item);

    onChange({
      target: { name, value: next },
    });
  };

  return (
    <InputLayout label={placeholder} error={error}>
      <Group>
        {list.map((item) => {
          const id = makeId(item);
          const isChecked = value.includes(item);

          return (
            <Row key={id}>
              <InputCheckbox
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={(e) => toggle(item, e.target.checked)}
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
