import Select from "react-select";
import styled from "styled-components";
import {
  StyledParagraphError,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";

const Dropdown = ({ options, label, value, onChange, placeholder, error }) => {
  return (
    <StyledRoleDropdownLayout>
      {label ? <StyledParagraphSmall>{label}</StyledParagraphSmall> : null}

      <Select
        options={options}
        label={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        styles={customStyles}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
      {error && <StyledParagraphError>{error}</StyledParagraphError>}
    </StyledRoleDropdownLayout>
  );
};

const StyledRoleDropdownLayout = styled.div`
  p {
    text-align: left;
    margin-left: 20px;
  }
`;
const Styledselect = styled(StyledParagraphSmall)`
  text-align: left;
  /* adjust padding according to your figma */
  margin-bottom: ${({ theme }) => theme.spacings["spacing-2"]};
  font-weight: ${({ theme }) => theme.fontWeights["default"]};
  padding-left: 10px;
`;

const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: "25px",
    paddingLeft: "12px",
    paddingRight: "12px",
    cursor: "pointer",
    textAlign: "left",
    // border: "1px solid #B9B9B9",
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
    // color: "gray",
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
    // marginTop: '8px',
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

    // backgroundColor: state.isFocused ? "#ffffffff" : "transparent",
    // backgroundColor: state.isFocused ? '#f2f1ff' : 'transparent',
    // color: state.isFocused ? "#26C867" : "#000000",

    backgroundColor: state.isSelected
      ? "#26C867" // selected
      : state.isFocused
      ? "#f6fff1ff" // hover
      : "transparent",

    color: state.isSelected ? "#fff" : state.isFocused ? "#26C867" : "#000000",

    "&:active": {
      // not working
      backgroundColor: "#e0deffff",
    },
  }),
};

export default Dropdown;
