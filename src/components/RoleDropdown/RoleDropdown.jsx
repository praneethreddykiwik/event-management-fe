import Select from "react-select";
import styled from "styled-components";
import { StyledMediumHeading } from "../Styled/Typography.styled";

const RoleDropdown = () => {
  const options = [
    { value: "admin", label: "Admin" },
    { value: "event-manager", label: "Event Manager" },
    { value: "stakeholder/Vendor/Worker", label: "stakeholder/Vendor/Worker" },
  ];

  return (
    <StyledRoleDropdownLayout>
      <Styledselect>Select Role</Styledselect>

      <Select
        options={options}
        placeholder="Choose your role"
        styles={customStyles}
        isSearchable={false}
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
    height: "60px",
    borderRadius: "25px",
    paddingLeft: "12px",
    paddingRight: "12px",
    backgroundColor: "#e1e1e14c",
    cursor: "pointer",
    textAlign: "left",
    border: "0.5px black solid",
    "&:focus-within": {
      border: "0.5px black solid",
      boxShadow: "none",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0 8px",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#000000",
    fontWeight: 500,
    fontSize: "16px",
  }),

  singleValue: (base) => ({
    ...base,
    fontWeight: 500,
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
    fontSize: "16px",
    fontWeight: 500,
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
