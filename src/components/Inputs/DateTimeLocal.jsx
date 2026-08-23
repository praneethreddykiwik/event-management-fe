import { InputLayout } from "./InputLayout";
import { InputDefault } from "./Inputs.styled";

export const DateTimeLocal = ({
  name,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  width,
  validations,
}) => {
  return (
    <InputLayout error={error} width={width} validations={validations}>
      <InputDefault
        id={name}
        name={name}
        type="datetime-local"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) =>
          onChange({
            target: { name, value: e.target.value },
          })
        }
        disabled={disabled}
        $hasError={!!error}
      />
    </InputLayout>
  );
};
