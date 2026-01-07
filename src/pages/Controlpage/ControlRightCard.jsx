import React, { useState } from "react";
import styled from "styled-components";
import LastUsersBox from "./CntrlLastUsers.jsx";
import { HALLS_DASHBOARD } from "../../enum/control_common.jsx";
import Thermo from "./ControlThermo.jsx";
import Temp from "./ControlTemp.jsx";

const RightCardContainer = () => {
  const [active, setActive] = useState(false);

  return (
    <RightSidebar>
      <Time>{HALLS_DASHBOARD.TIME}</Time>
      <Divider />

      <ThermoHeader>
        <ThermoTitle>{HALLS_DASHBOARD.THERMOVALUE}</ThermoTitle>

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
  flex: 0 0 290px;
  width: 290px;
  background: #191827;
  border-radius: 24px;
  padding: 28px 24px;
  color: #fff;

  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 649px;
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
  margin: 0;
`;

const ThermoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThermoTitle = styled.p`
  font-size: 17px;
  opacity: 0.9;
  margin: 0;
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
