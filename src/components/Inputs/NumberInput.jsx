import { InputNumber } from "./Inputs.styled";
import { InputLayout } from "./InputLayout";

export const NumberInput = ({
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
    <InputLayout label={label} error={error} width={width} validations= {validations} >
      <InputNumber
        id={name}
        name={name}
        type="number"
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        $hasError={!!error}
      />
    </InputLayout>
  );
};
