import Select from "react-select";
import styled from "styled-components";
import {
  StyledParagraph,
  StyledParagraphSmall,
} from "../Styled/Typography.styled";
import { theme } from "../../theme/theme";

const RoleDropdown = ({ options, label, value, onChange, placeholder }) => {
  return (
    <StyledRoleDropdownLayout>
      {label && <Styledselect small>{label}*</Styledselect>}

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
    </StyledRoleDropdownLayout>
  );
};

const StyledRoleDropdownLayout = styled.div`
  width: 100%;
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
    border: `1px solid ${theme.light.colors.grayDisabled}`,
    "&:focus-within": {
      border: `1px solid ${theme.light.colors.grayDisabled}`,
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
    color: "gray",
    fontSize: "14px",
  }),

  singleValue: (base) => ({
    ...base,
    fontSize: "14px",
    color: "#000000",
  }),

  menu: (base) => ({
    ...base,
    // marginTop: '8px',
    borderRadius: "30px",
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

    backgroundColor: state.isFocused ? "#f2f1ff" : "transparent",
    // backgroundColor: state.isFocused ? '#f2f1ff' : 'transparent',

    color: state.isFocused ? "#7b6cf6" : "#000000",

    "&:active": {
      backgroundColor: "#f2f1ff",
    },
  }),
};

export default RoleDropdown;
