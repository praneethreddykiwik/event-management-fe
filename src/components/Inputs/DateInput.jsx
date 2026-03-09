import { InputLayout } from "./InputLayout";
import { InputDefault } from "./Inputs.styled";

export const DateInput = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  width,
  validations,
}) => {
  return (
    <InputLayout label={label} error={error} width={width} validations={validations}>
      <InputDefault
        id={name}
        name={name}
        placeholder={placeholder}
        type="date"
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        $hasError={!!error}
      />
    </InputLayout>
  );
};
