import { InputLayout } from "./InputLayout";
import { InputDefault, TextAreaDefault } from "./Inputs.styled";

export const TextArea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  rows = 4,
}) => {
  return (
    <InputLayout label={label} error={error}>
      <TextAreaDefault
        as="textarea"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        rows={rows || 1}
        $hasError={!!error}
      />
    </InputLayout>
  );
};
