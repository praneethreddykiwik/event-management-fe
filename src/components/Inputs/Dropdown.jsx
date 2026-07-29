import Select from "react-select";
import { InputLayout } from "./InputLayout";
import { useMemo } from "react";
import { theme } from "../../theme/theme";

const Dropdown = ({
  name,
  options,
  label,
  value,
  onChange,
  placeholder,
  error,
  validations,
  disabled,
}) => {
  const extractValue = useMemo(() => {
    return options.find((fn) => fn.value === value) || {};
  }, [options, value]);

  return (
    <InputLayout label={label} error={error} validations={validations}>
      <Select
        name={name}
        options={options}
        label={label}
        value={extractValue}
        onChange={(val) => {
          const params = { target: { name, value: val.value } };
          onChange(params);
        }}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={true}
        hasError={error}
        isDisabled={disabled}
        // isClearable
        // components={{
        //   // IndicatorSeparator: () => null,
        //   LoadingIndicator: () => <span>Loading</span>,
        // }}
        // isLoading
      />
    </InputLayout>
  );
};

const customStyles = (error) => ({
  control: (base, state) => ({
    ...base,
    borderRadius: "25px",
    paddingLeft: "12px",
    paddingRight: "12px",
    cursor: "pointer",
    textAlign: "left",
    boxShadow: "none",
    "&:hover": {
      borderColor: state.selectProps.hasError ? "#e53935" : "#e3e3e3",
    },
    backgroundColor: state.isDisabled ? "#dedede" : "#fff",
    border: error
      ? `1px solid ${theme.light.colors.warning}`
      : "1px solid #e0e0e0",
    "&:focus-within": {
      border: state.selectProps.hasError
        ? "1px solid #e53935"
        : "1px solid #e3e3e3",
      boxShadow: "none",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#66666",
    padding: 8,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),
  placeholder: (base) => ({
    ...base,
    fontSize: "14px",
    color: "#bdbdbd",
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "14px",
    color: "#000000",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "22px",
    backgroundColor: "#e6e6e6",
    padding: "0 8px",
    textAlign: "left",
    zIndex: 9999,
  }),
  option: (base, state) => ({
    ...base,
    padding: "8px 20px",
    borderRadius: "28px",
    margin: "4px 0",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: state.isSelected
      ? theme.light.colors.primary
      : state.isFocused
        ? "#f6fff1ff"
        : "transparent",
    color: state.isSelected
      ? "#fff"
      : state.isFocused
        ? theme.light.colors.primary
        : state.isDisabled
          ? "#b5b5b5"
          : "#000000",
    "&:active": {
      backgroundColor: "#e0deffff",
    },
  }),
});

export default Dropdown;
