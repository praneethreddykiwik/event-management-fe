import { InputNumber } from "./Inputs.styled";
import { InputLayout } from "./InputLayout";
 
export const MobileInput = ({
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
 
  const showError =
    value && value.length !== 10
      ? "Enter valid 10-digit mobile number"
      : error;
 
  return (
    <InputLayout
      label={label}
      error={showError}
      width={width}
      validations={validations}
    >
      <InputNumber
        id={name}
        name={name}
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => {
       
          const onlyNums = e.target.value.replace(/[^0-9]/g, "");
 
          if (onlyNums.length <= 10) {
            onChange({
              target: {
                name: name,
                value: onlyNums,
              },
            });
          }
        }}
        disabled={disabled}
        $hasError={!!showError}
      />
    </InputLayout>
  );
};