import React, { useState } from "react";
import styled from "styled-components";
import LastUsersBox from "./CntrlLastUsers.jsx";
import * as enums from "../../myEnum";
import Thermo from "./ControlThermo.jsx";
import Temp from "./ControlTemp.jsx";
import { theme } from "../../theme/theme.jsx";
import { StyledParagraphGray } from "../../components/Styled/Typography.styled.jsx";

const RightCardContainer = () => {
  const [active, setActive] = useState(false);

  return (
    <RightSidebar>
      <Time>{enums.TIME}</Time>
      <Divider />

      <ThermoHeader>
        <StyledParagraphGray>{enums.THERMOVALUE}</StyledParagraphGray>

        <ThermoToggle
          role="switch"
          aria-checked={active}
          tabIndex={0}
          $active={active}
          onClick={() => setActive(!active)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setActive(!active);
            }
          }}
        />
      </ThermoHeader>
      <Thermo />
      <Temp />
      <LastUsersBox />
    </RightSidebar>
  );
};

export default RightCardContainer;

const RightSidebar = styled.div`
  flex: 0 0 340px;
  width: 290px;
  background: #191827;
  border-radius: 10px;
  padding: 28px 24px;
  color: ${theme.light.colors.white};

  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 660px;
`;

const Divider = styled.div`
  width: 50px;
  height: 2px;
  background: #ffffff55;
  margin: -6px auto 8px;
  border-radius: 20px;
`;

const Time = styled.h1`
  text-align: center;
  font-size: 30px;
`;

const ThermoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThermoToggle = styled.div`
  width: 48px;
  height: 26px;
  border-radius: 20px;
  background: ${({ $active }) => ($active ? "#37c48a" : "#4f4f59ff")};
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: #dcdcdc;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    right: ${({ $active }) => ($active ? "24px" : "4px")};
    transition: all 0.3s ease;
  }
`;
