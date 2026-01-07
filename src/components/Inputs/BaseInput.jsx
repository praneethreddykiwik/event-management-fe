import { InputLayout } from "./InputLayout";
import { InputDefault } from "./Inputs.styled";

export const BaseInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  width,
}) => {
  return (
    <InputLayout label={label} error={error} width={width}>
      <InputDefault
        name={name}
        type={"text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        $hasError={!!error}
      />
    </InputLayout>
  );
};
