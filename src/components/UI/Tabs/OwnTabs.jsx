import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const dummyTabs = [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }];

export default function OwnTabs({
  tabs = dummyTabs,
  selectedTab,
  handleTabChange,
}) {
  const handleChange = (event, newValue) => {
    handleTabChange(newValue);
  };

  return (
    <AntTabs
      value={+selectedTab}
      onChange={handleChange}
      aria-label="ant example"
    >
      {tabs.map((el) => (
        <AntTab label={el.label} />
      ))}
    </AntTabs>
  );
}

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    // marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#1ac468",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#1ac468",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  }),
);

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1ac468",
  },
});

// ____________________________________________ TabBody ____________________________________________

export const TabBody = ({ value, selectedTab, ...props }) => {
  return (
    <TabBodyCtn hidden={+value !== +selectedTab}>{props.children}</TabBodyCtn>
  );
};

const TabBodyCtn = styled("div")``;
