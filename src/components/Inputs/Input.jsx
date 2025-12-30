import {
  InputDefault,
  InputNumber,
  InputPassword,
  InputCheckbox,
  InputRadio,
} from '../Styled/Inputs.styled';
import { inputValidation } from '../../components/Validations/inputValidation';
import styled from 'styled-components';

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  list = [],
  disabled,
  validations = [],
  error,
  setError,
}) => {
  const makeId = (item) =>
    `${name}-${String(item).toLowerCase().replace(/\s+/g, '-')}`;

  const runValidation = (val) => {
    if (!setError) return;
    const err = inputValidation(val, validations);
    setError(err);
  };

  const handleChange = (val) => {
    onChange({ value: val });
    runValidation(val);
  };

  if (type === 'text' || type === 'email') {
    return (
      <>
        <InputDefault
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
          $hasError={!!error}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </>
    );
  }


  if (type === 'number') {
    return (
      <>
        <InputNumber
          id={name}
          name={name}
          type="number"
          placeholder={placeholder}
          value={value ?? ''}
          onChange={(e) => handleChange(e.target.value)}
          disabled={disabled}
          $hasError={!!error}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </>
    );
  }


if (type === 'password' || type === 'text') {
  return (
    <InputPassword
      id={name}
      name={name}
      type={type} 
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => handleChange(e.target.value)}
      disabled={disabled}
      $hasError={!!error}
    />
  );
}

if (type === 'checkbox') {
  return (
    <label style={rowStyle}>
      <InputCheckbox
        id={name}
        name={name}
        type="checkbox"
        checked={!!value}
        onChange={(e) => handleChange(e.target.checked)}
        disabled={disabled}
      />
      <span>{list[0]}</span>
      {error && <ErrorText>{error}</ErrorText>}
    </label>
  );
}


  if (type === 'checkbox-group') {
    return (
      <>
        <GroupLabel>{placeholder}</GroupLabel>
        {list.map((item) => {
          const id = makeId(item);
          const isChecked = Array.isArray(value) && value.includes(item);

          return (
            <label key={id} style={rowStyle}>
              <InputCheckbox
                id={id}
                name={name}
                type="checkbox"
                checked={!!isChecked}
                onChange={(e) => {
                  onChange({
                    type: 'checkbox-toggle',
                    checked: e.target.checked,
                    item,
                  });
                  runValidation(value);
                }}
                disabled={disabled}
              />
              <span>{item}</span>
            </label>
          );
        })}
        {error && <ErrorText>{error}</ErrorText>}
      </>
    );
  }

  if (type === 'radio-group') {
    return (
      <>
        <GroupLabel>{placeholder}</GroupLabel>
        {list.map((item) => {
          const id = makeId(item);
          const isChecked = value === item;

          return (
            <label key={id} style={rowStyle}>
              <InputRadio
                id={id}
                name={name}
                type="radio"
                checked={!!isChecked}
                onChange={() => handleChange(item)}
                disabled={disabled}
              />
              <span>{item}</span>
            </label>
          );
        })}
        {error && <ErrorText>{error}</ErrorText>}
      </>
    );
  }

  return null;
};

const ErrorText = styled.p`
  color: #e53935;
  font-size: 12px;
  margin: 0;
  bottom: 42px;
  left: 21px;
  position: absolute;
`;

const GroupLabel = styled.div`
  font-size: 14px;
`;

const rowStyle = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  cursor: 'pointer',
};