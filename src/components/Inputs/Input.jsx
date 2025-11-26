/** @format */

import {
  InputDefault,
  InputNumber,
  InputPassword,
  InputCheckbox,
  InputRadio,
} from '../Styled/Inputs.styled';

export const Input = ({
  type,
  placeholder,
  value,
  onChange,
  checked,
  name,
}) => {
  switch (type) {
    case 'text':
      return (
        <InputDefault
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      );

    case 'number':
      return (
        <InputNumber
          type="number"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      );

    case 'password':
      return (
        <InputPassword
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      );

    case 'checkbox':
      return (
        <InputCheckbox
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
        />
      );

    case 'radio':
      return (
        <InputRadio
          type="radio"
          checked={checked}
          onChange={onChange}
          name={name}
        />
      );

    default:
      return (
        <InputDefault
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      );
  }
};
