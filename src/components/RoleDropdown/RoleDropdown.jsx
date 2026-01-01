import Select from "react-select";
import styled from "styled-components";
import { StyledMediumHeading } from "../Styled/Typography.styled";

const RoleDropdown = ({ options, label, values, onChange }) => {
  
  return (
    <StyledRoleDropdownLayout>
      <Styledselect>Select Role</Styledselect>

      <Select
        options={options}
        lable={label}
        value={values}
        onChange={onChange}
        placeholder="Choose your role"
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
const Styledselect = styled(StyledMediumHeading)`
  text-align: left;
  /* adjust padding according to your figma */
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
    border: "1px #000000 solid",
    "&:focus-within": {
      border: "1px #000000 solid",
      boxShadow: "none",
    },
    "&:hover": {
      border: "1px #000000 solid",
    },
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#000000",
    padding: 8,
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#000000",
    fontSize: "16px",
  }),

  singleValue: (base) => ({
    ...base,
    fontSize: "16px",
    color: "#000000",
  }),

  menu: (base) => ({
    ...base,
    marginTop: "8px",
    borderRadius: "20px",
    backgroundColor: "#e6e6e6",
    padding: "8px",
    textAlign: "left",
  }),

  option: (base, state) => ({
    ...base,
    padding: "14px 20px",
    borderRadius: "20px",
    marginTop: "10px",
    fontSize: "16px",
    cursor: "pointer",

    backgroundColor: state.isSelected
      ? "#f2f1ff"
      : state.isFocused
      ? "#f2f1ff"
      : "transparent",

    color: state.isSelected ? "#7b6cf6" : "#000000",

    "&:active": {
      backgroundColor: "#f2f1ff",
    },
  }),
};

export default RoleDropdown;
