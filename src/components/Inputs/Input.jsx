/** @format */

import {
  InputDefault,
  InputNumber,
  InputPassword,
  InputCheckbox,
  InputRadio,
} from "../Styled/Inputs.styled";
import { inputValidation } from "../../components/Validations/inputValidation";
import styled from "styled-components";

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
    `${name}-${String(item).toLowerCase().replace(/\s+/g, "-")}`;

  const runValidation = (val) => {
    if (!setError) return;
    const err = inputValidation(val, validations);
    setError(err);
  };

  const handleChange = (val) => {
    onChange({ value: val });
    runValidation(val);
  };

  switch (type) {
    case "text":
    case "email":
      return (
        <>
          <InputDefault
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "number":
      return (
        <>
          <InputNumber
            id={name}
            name={name}
            type="number"
            placeholder={placeholder}
            value={value ?? ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "password":
      return (
        <>
          <InputPassword
            id={name}
            name={name}
            type="password"
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "date":
      return (
        <>
          <InputDefault
            id={name}
            name={name}
            type="date"
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "time":
      return (
        <>
          <InputDefault
            id={name}
            name={name}
            type="time"
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "datetime-local":
      return (
        <>
          <InputDefault
            id={name}
            name={name}
            type="datetime-local"
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "textarea":
      return (
        <>
          <InputDefault
            as="textarea"
            id={name}
            name={name}
            placeholder={placeholder}
            value={value || ""}
            onChange={(e) => handleChange(e.target.value)}
            disabled={disabled}
            $hasError={!!error}
            rows={4}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      );

    case "checkbox":
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

    case "checkbox-group":
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
                      type: "checkbox-toggle",
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

    case "radio-group":
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

    default:
      return null;
  }
};

const ErrorText = styled.p`
  color: #e53935;
  font-size: 12px;
  margin: 0;
  bottom: 42px;
  left: 10px;
  position: absolute;
`;

const GroupLabel = styled.div`
  font-size: 14px;
`;

const rowStyle = {
  display: "flex",
  gap: 8,
  alignItems: "center",
  cursor: "pointer",
};
