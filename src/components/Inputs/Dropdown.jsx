import Select from "react-select";
import { InputLayout } from "./InputLayout";
import { useMemo } from "react";

const Dropdown = ({
  name,
  options,
  label,
  value,
  onChange,
  placeholder,
  error,
  validations,
  preview,
  previewComponent,
}) => {
  const extractValue = useMemo(() => {
    return options.find((fn) => fn.value === value) || {};
  }, [options, value]);

  console.log("abdul placeholder", placeholder);

  return (
    <InputLayout label={label} error={error} validations={validations}>
      {previewComponent && preview ? (
        previewComponent
      ) : (
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
          // isClearable
          // components={{
          //   IndicatorSeparator: () => null,
          // }}
        />
      )}
    </InputLayout>
  );
};

const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "25px",
    paddingLeft: "12px",
    paddingRight: "12px",
    cursor: "pointer",
    textAlign: "left",
    border: "1px solid #e0e0e0",
    "&:focus-within": {
      border: `1px solid #B9B9B9`,
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
    color: "red",
    // color: "#bdbdbd",
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
  }),

  option: (base, state) => ({
    ...base,
    padding: "8px 20px",
    borderRadius: "28px",
    margin: "4px 0",
    fontSize: "14px",
    cursor: "pointer",

    backgroundColor: state.isSelected
      ? "#26C867"
      : state.isFocused
        ? "#f6fff1ff"
        : "transparent",

    color: state.isSelected ? "#fff" : state.isFocused ? "#26C867" : "#000000",

    "&:active": {
      // not working
      backgroundColor: "#e0deffff",
    },
  }),
};

export default Dropdown;
